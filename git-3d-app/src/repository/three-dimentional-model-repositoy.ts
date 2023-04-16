import { ProjectEntity } from "@/entities/project";
import { ThreeDimentionalEntity } from "@/entities/three-dimentional-model";
import { db } from "@/helper/firebase";
import { Id } from "@/value-object/id";
import { addDoc, collection, CollectionReference, doc, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, setDoc } from "@firebase/firestore";
import { ProjectEntityRepository } from "./project-entity-repository";

type FirestoreThreeDimentionalEntity = {
  name: string;
  projectId: string;
}

/**
 * 3dモデルリポジトリ
 */
export class ThreeDimentionalEntityRepository {

  private constructor() { }

  // シングルトン
  static shared = new ThreeDimentionalEntityRepository();

  // コレクションID
  collectionId = 'tree-dimentional';

  /**
   * モデルを永続化する
   * @param entity 3dモデル
   */
  async save(entity: ThreeDimentionalEntity): Promise<void> {
    const [id, data] = this.convertToFirestore(entity);

    await setDoc(doc(db, this.collectionId, id), data)
  }

  /**
   * 3dモデル一覧を取得する
   * @returns 3dモデル
   */
  async find(): Promise<ThreeDimentionalEntity[]> {
    console.log("REPOSITORY FIND")
    const collectionRef: CollectionReference = collection(db, this.collectionId);

    const querySnapshot = await getDocs(collectionRef);

    let result: ThreeDimentionalEntity[] = [];

    for await (const doc of querySnapshot.docs) {
      const entities = await this.convertFromFirestore(doc);
      result.push(entities);
    }

    return result;
  }

  /**
   * Firestoreからエンティティに変換する
   * @param doc Document
   * @returns 3dモデルエンティティ
   */
  private async convertFromFirestore(doc: QueryDocumentSnapshot) {

    console.log("CONVERT")
    const id = new Id(doc.id);

    const data = doc.data();

    console.log(`data ${JSON.stringify(data)}`)

    console.log(`data.projectId ${data.projectId}`)

    // プロジェクトをIDで関連付ける
    const project = await ProjectEntityRepository.shared.findById(new Id(data.projectId));

    console.log(`PROJECT ${project}`)

    return new ThreeDimentionalEntity(id, project, data.name);
  }

  /**
   * Firestoreの型に変換
   * @param entity 3dモデルエンティティ 
   * @returns JSON
   */
  private convertToFirestore(entity: ThreeDimentionalEntity): [string, FirestoreThreeDimentionalEntity] {
    return [
      entity.id.value,
      {
        name: entity.name,
        projectId: 'project-id' // TODO: プロジェクトID
      }
    ]
  }
}