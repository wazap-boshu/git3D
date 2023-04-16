export class Id {
  constructor(value: string) {
    this.value = value;
  }

  value: string

  /**
   * 等価性のチェック
   * @param id ID
   * @returns 等価かどうか
   */
  equals(id: Id): boolean {
    return this.value === id.value;
  }
}