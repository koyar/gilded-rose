import { expect } from 'chai';
import { Item } from '../app/Item';

import { GildedRose } from '../app/gilded-rose';

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
});