import { Item } from "./Item";

import { AgedBrie } from "./AgedBrie";

export class UpdateQuality {
    static groceryItem(item: Item) {
        switch(item.name) {
            case 'Aged Brie':
                return AgedBrie(item);
            default:
                return;
        }
    }
}