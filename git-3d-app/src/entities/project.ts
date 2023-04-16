import { Id } from "@/value-object/id";

export class ProjectEntity {

  // MARK: properties

  id: Id;

  name: string;

  description: string;

  // private threeDimentionalEntities: ThreeDimentionalEntity[];

  constructor(
    id: Id,
    name: string,
    description: string,
    // threeDimentionalEntities: ThreeDimentionalEntity[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  /**
   * プロジェクト詳細を取得
   * @returns プロジェクト詳細
   */
  getDescription(): string {
    return this.description;
  }

  /**
   * タイトル
   * @returns タイトル 
   */
  title(): string {
    return this.name
  }
}