import { expect } from 'chai';
import { Item } from '../app/Item';

import { GildedRose } from '../app/gilded-rose';

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