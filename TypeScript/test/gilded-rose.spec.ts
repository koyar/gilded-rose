import { expect } from 'chai';
import { Item } from '../app/Item';

import { GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('should return correct result for all items', () => {
        const storeItems = [
          new Item('+5 Dexterity Vest', 10, 20),
          new Item('Aged Brie', 2, 0),
          new Item('Elixir of the Mongoose', 5, 7),
          new Item('Sulfuras, Hand of Ragnaros', 0, 80),
          new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
          new Item('Conjured', 2, 4)
        ];

        const expectedResult = [
          new Item('+5 Dexterity Vest', 9, 19),
          new Item('Aged Brie', 1, 1),
          new Item('Elixir of the Mongoose', 4, 6),
          new Item('Sulfuras, Hand of Ragnaros', 0, 80),
          new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21),
          new Item('Conjured', 1, 2)
        ];
        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
    
        expect(items).to.eql(expectedResult);
    });
});

describe('Normal quality', () => {
    it('should degrade the quality twice as fast when when the sellIn date has passed', () => {
        const storeItems = [
            new Item('+5 Dexterity Vest', 0, 2)
        ];
        const expectedResult = [
            new Item('+5 Dexterity Vest', -1, 0)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
    
        expect(items).to.eql(expectedResult);
    });

    it('should never return quantity of below 0 for normal items', () => {
        const storeItems = [
            new Item('+5 Dexterity Vest', 5, 0)
        ];

        const expectedResult = [
            new Item('+5 Dexterity Vest', 4, 0)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });
});