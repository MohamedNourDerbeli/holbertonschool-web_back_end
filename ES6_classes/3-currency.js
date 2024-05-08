export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('code must be a String');
    if (typeof name !== 'string') throw TypeError('name must be a String');
    this._code = code;
    this._name = name;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') throw TypeError('code must be a String');
    this._name = newcode;
  }

  get code() {
    return this._code;
  }

  set name(newname) {
    if (typeof newname !== 'string') throw TypeError('name must be a String');
    this._name = newname;
  }

  get name() {
    return this._name;
  }

  static displayFullCurrency() {
    return `${this._name} ${this._code}`;
  }
}
