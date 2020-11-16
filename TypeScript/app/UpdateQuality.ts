import { Item } from "./Item";
import { CommonLogic } from "./CommonLogic";
import { AgedBrie } from "./AgedBrie";
import { BackStage } from "./BackStage";
import { Sulfuras } from "./Sulfuras";
import { Conjured } from "./Conjured";

export class UpdateQuality {
    static groceryItem(item: Item): CommonLogic {
        const { name, sellIn, quality } = item;
        switch(name) {
            case 'Aged Brie':
                return new AgedBrie(name, sellIn, quality);
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackStage(name, sellIn, quality);
            case 'Sulfuras, Hand of Ragnaros':
                return new Sulfuras(name, sellIn, quality);
            case 'Conjured':
                return new Conjured(name, sellIn, quality);
            default: 
                return new CommonLogic(name, sellIn, quality);
        }
    }
}