import { Item } from "./Item";
import { AgedBrie } from "./AgedBrie";
import { BackStage } from "./BackStage";
import { CommonLogic } from "./CommonLogic";

export class UpdateQuality {
    static groceryItem(item: Item): CommonLogic {
        const { name, sellIn, quality } = item;
        switch(name) {
            case 'Aged Brie':
                return new AgedBrie(name, sellIn, quality);
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackStage(name, sellIn, quality);
            default: 
                return new CommonLogic(name, sellIn, quality);
        }
    }
}