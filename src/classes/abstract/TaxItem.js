import Item from "./Item";

export default class TaxItem extends Item {
  constructor(category, description, price) {
    super(category, description, price);
    if (this.constructor === TaxItem) {
      throw new Error("This class can't be instantiated.");
    }
  }

  getTax() {
    return 0;
  }

  calculateTax() {
    return this.price * this.getTax();
  }
}