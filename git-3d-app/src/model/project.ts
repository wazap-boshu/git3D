export class Project {

  // MARK: properties
  private name: string;

  private description: string;

  constructor(
    name: string,
    description: string, 
  ) {
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