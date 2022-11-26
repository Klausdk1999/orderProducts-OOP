import TaxItem from "./abstract/TaxItem";

export default class Beer extends TaxItem {
  constructor(description, price) {
    super("Beer", description, price);
  }

  getTax() {
    return 0.2;
  }
}
