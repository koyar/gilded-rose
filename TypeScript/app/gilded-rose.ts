
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

        return this.items;
    }
}
