import Item from "./abstract/Item";

export default class Water extends Item {
  constructor(description, price) {
    super("Water", description, price);
  }
}
