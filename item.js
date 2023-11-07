/**Item in a shopping cart. */
const items = require('./fakeDb')

class Item {
    constructor (name, price) {
        this.name = name;
        this.price = price;
        items.push(this);
    }

    /**Return all items stored in global items array*/
    static findAll() {
        return items
    }

    /**Match name of item to input and return existng first item */
    static find(name) {
        //find item where item name matches function arg
        const item = items.find(val => val.name === name)
        //handle case where item does not exist in database
        if (item === undefined ) {
            throw {message: "Item not in database", status: 404}
        }
        return item
    }
    /**Update existing item and return updated item or throw error */
    static update(name, data) {
        //find item to update using find() method call
        let item = Item.find(name);
        //handle case where item does not exist in database
        if (item === undefined ) {
            throw {message: "Item not in database", status: 404}
        }
        //assign new values to name and price variables
        item.name = data.name;
        item.price = data.price;
        //return the item
        return item;
    }

    /**Delete item by name from global items array */
    static remove(name) {
        //find the index of item whose name matches function arg
        let idx = items.findIndex(val => val.name === name)
        //handle case where item does not exist in database
        if (idx === -1){
            throw {message: "Item not in database", status: 404}
        }
        //mutate items array by removing item at index
        items.splice(idx, 1)
    }
}

module.exports = Item;