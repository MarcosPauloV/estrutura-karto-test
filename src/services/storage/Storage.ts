export default class Storage {
  private static _tenant: string;
  private static _handle: any;

  // --------------------------------------
  // tenant
  // --------------------------------------
  public static get tenant(): string {
    return this._tenant;
  }

  public static set tenant(value: string) {
    this._tenant = value;
  }

  // --------------------------------------
  // handle
  // --------------------------------------
  public static get handle(): any {
    if (!this._handle) {
      throw new Error(
        `Nenhum handle foi definido para a classe "${this.prototype.constructor.name}"`
      );
    }

    return this._handle;
  }

  public static set handle(value: any) {
    this._handle = value;
  }

  // --------------------------------------
  // transformedKey
  // --------------------------------------
  public static getTransformedKey(key: string): string {
    return `${this.tenant}::${key}`;
  }

  // --------------------------------------
  // item
  // --------------------------------------
  public static getItem(chave: string, padrao?: any): any {
    return this.handle.getItem(this.getTransformedKey(chave)) || padrao;
  }

  public static setItem(chave: string, valor: any) {
    this.handle.setItem(this.getTransformedKey(chave), valor);
  }

  public static removeItem(chave: string) {
    this.handle.removeItem(this.getTransformedKey(chave));
  }
}
