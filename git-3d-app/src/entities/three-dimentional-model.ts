import { Id } from "@/value-object/id";
import { ProjectEntity } from "./project";

export class ThreeDimentionalEntity {

  // MARK: propertieis

  id: Id;

  project: ProjectEntity;

  name: string;

  /**
   * コンストラクタ
   */
  constructor(
    id: Id,
    project: ProjectEntity,
    name: string,
  ) {
    this.id = id;
    this.project = project;
    this.name = name;
  }

  /**
   * 名前を取得
   * @returns モデル名
   */
  title(): string {
    return this.name;
  }

  /**
   * プロジェクトの詳細を取得
   * @returns プロジェクト詳細
   */
  projectDescription(): string {
    return this.project.getDescription();
  }

  /**
   * プロジェクトのタイトルを取得する
   * @returns プロジェクトタイトル
   */
  projectTitle(): string {
    return this.project.title();
  }

  /**
   * 画像を取得する
   * @returns 画像ソースURL
   */
  imageSource(): string {
    return "/public/next.svg"
  }

}