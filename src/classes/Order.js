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
      const taxes = {
        "Beer": 0.2,
        "Cigar": 0.25,
        "Eletronics": 0.3,
        "Water": 0
      }
  
      return this.items.reduce((sum, item) => {
        const productTax = taxes[item.category] || 0;
        return sum += item.price * productTax;
      }, 0)
    }
  
}