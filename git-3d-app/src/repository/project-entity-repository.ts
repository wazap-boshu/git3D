import { ProjectEntity } from "@/entities/project";
import { db } from "@/helper/firebase";
import { Id } from "@/value-object/id";
import { CollectionReference, doc, getDocs, QueryDocumentSnapshot, setDoc } from "@firebase/firestore";
import { collection } from "firebase/firestore";

type FirestoreProjectEntity = {
  name: string;
  description: string;
}

/**
 * プロジェクトリポジトリ
 */
export class ProjectEntityRepository {
  private constructor() { }

  static shared = new ProjectEntityRepository();

  // コレクションID
  collectionId = 'project';

  async save(entity: ProjectEntity): Promise<void> {
    const [id, data] = this.convertToFirestore(entity);

    await setDoc(doc(db, this.collectionId, id), data)
  }

  /**
   * プロジェクト一覧を取得する
   * @returns プロジェクト一覧
   */
  async find(): Promise<ProjectEntity[]> {
    const collectionRef: CollectionReference = collection(db, this.collectionId);

    const querySnapshot = await getDocs(collectionRef);

    let result: ProjectEntity[] = [];

    for await (const doc of querySnapshot.docs) {
      result.push(this.convertFromFirestore(doc));
    }

    return result;
  }

  /**
   * IDでプロジェクトを取得する
   * @param id プロジェクトID
   */
  async findById(id: Id): Promise<ProjectEntity> {
    const collectionRef: CollectionReference = collection(db, this.collectionId);

    console.log("FIND BY ID" + id.value + " ")

    const querySnapshot = await getDocs(collectionRef);

    let result: ProjectEntity | undefined = undefined;

    for await (const doc of querySnapshot.docs) {
      console.log(`${id.value} === ${doc.id}`)
      if (id.value === doc.id) {
        result = this.convertFromFirestore(doc);
      }
    }

    if (!result) throw new Error('Project id does not exist');

    return result;
  }

  /**
   * Firestoreからエンティティに変換する
   * @param doc Document
   * @returns プロジェクトエンティティ
   */
  private convertFromFirestore(doc: QueryDocumentSnapshot) {
    const id = new Id(doc.id);

    const data = doc.data();

    // TODO: プロジェクトをIDで関連付ける

    return new ProjectEntity(id, data.name, data.description);
  }

  /**
   * Firestoreの型に変換
   * @param entity プロジェクトエンティティ 
   * @returns JSON
   */
  private convertToFirestore(entity: ProjectEntity): [string, FirestoreProjectEntity] {
    return [
      entity.id.value,
      {
        name: entity.name,
        description: entity.description,
      }
    ]
  }
}