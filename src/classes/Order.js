import TaxItem from "./abstract/TaxItem";
export default class Order {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getTotal() {
      return this.items.reduce((sum, item) => sum += item.price, 0);
    }
  
    getTaxes() {
      return this.items.reduce((sum, item) => {
        if (item instanceof TaxItem) {
          return sum + item.calculateTax();
        }
        return sum;
      }, 0)
    }
  
}