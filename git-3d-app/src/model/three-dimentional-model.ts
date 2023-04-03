import { Project } from "./project";

export class ThreeDimentionalModel {

  // MARK: propertieis

  private project: Project;

  private name: string;

  /**
   * コンストラクタ
   */
  constructor(
    project: Project,
    name: string,
  ) {
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