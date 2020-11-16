
import { Item } from './Item';
import { UpdateQuality } from './UpdateQuality';


export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items = this.items.map( 
            (item: Item) =>  UpdateQuality.groceryItem(item).init())
            .map(i => i);

        // this.items.forEach(item => {
        //     if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //         if (item.quality > 0) {
        //             if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //                 item.quality = item.quality - 1
        //             }
        //         }
        //     }
        //     if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //         item.sellIn = item.sellIn - 1;
        //     }
        //     if (item.sellIn < 0) {
        //         if (item.name != 'Aged Brie') {
        //             if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (item.quality > 0) {
        //                     if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //                         item.quality = item.quality - 1
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // });

        return this.items;
    }
}
