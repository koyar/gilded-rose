import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

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
          new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
        ];

        const expectedResult = [
          new Item('+5 Dexterity Vest', 9, 19),
          new Item('Aged Brie', 1, 1),
          new Item('Elixir of the Mongoose', 4, 6),
          new Item('Sulfuras, Hand of Ragnaros', 0, 80),
          new Item('Backstage passes to a TAFKAL80ETC concert', 14, 21)
        ];
        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
    
        expect(items).to.eql(expectedResult);
    });
});

describe('quality', () => {

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

describe('Aged Brie quality', () => {
    it('should increase the quality of Aged Brie', () => {
        const storeItems = [
            new Item('Aged Brie', 1, 2)
        ];

        const expectedResult = [
            new Item('Aged Brie', 0, 3)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });

    it('should return the the quality of an Aged Brie where it cannot be more than 50', () => {
        const storeItems = [
            new Item('Aged Brie', 2, 50)
        ];
        const expectedResult = [
            new Item('Aged Brie', 1, 50)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
    
        expect(items).to.eql(expectedResult);
    });

    it('should increase the quality of Aged Brie to be incremented to 50', () => {
        const storeItems = [
            new Item('Aged Brie', -20, 10)
        ];

        const expectedResult = [
            new Item('Aged Brie', -21, 12)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });
});

describe('Backstage pass quality', () => {
    it('should increase quality of backstage when sell in value approaches', () => {
        const storeItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 0)
        ];

        const expectedResult = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 1)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });

    it('should increase quality of backstage by 2 when there are less than 11 days', () => {
        const storeItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 8, 0)
        ];

        const expectedResult = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 7, 2)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });

    it('should increase quality of backstage by 3 when there are less than 6 days', () => {
        const storeItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 0)
        ];

        const expectedResult = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 3)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });

    it('should set quality of backstage to 0 after the concert', () => {
        const storeItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)
        ];

        const expectedResult = [
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });
})


