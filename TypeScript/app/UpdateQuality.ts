import { Item } from "./Item";
import { AgedBrie } from "./AgedBrie";
import { CommonLogic } from "./CommonLogic";

export class UpdateQuality {
    static groceryItem(item: Item): CommonLogic {
        const { name, sellIn, quality } = item;
        switch(name) {
            case 'Aged Brie':
                return new AgedBrie(name, sellIn, quality);
            default: 
                return new CommonLogic(name, sellIn, quality);
        }
    }
}