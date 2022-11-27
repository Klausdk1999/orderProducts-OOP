import TaxItem from "./abstract/TaxItem";

export default class Electronic extends TaxItem {
  constructor(description, price) {
    super("Electronic", description, price);
  }

  getTax() {
    return 0.3;
  }
}
