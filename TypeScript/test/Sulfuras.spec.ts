import { expect } from 'chai';
import { Item } from '../app/Item';

import { GildedRose } from '../app/gilded-rose';

describe('Sulfuras legendary case', () => {
    it('should expect the quality to always increase to 80', () => {
        const storeItems = [
            new Item('Sulfuras, Hand of Ragnaros', 5, 10)
        ];

        const expectedResult = [
            new Item('Sulfuras, Hand of Ragnaros', 5, 80)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });

    it('should always have a quality of 80', () => {
        const storeItems = [
            new Item('Sulfuras, Hand of Ragnaros', 5, 80)
        ];

        const expectedResult = [
            new Item('Sulfuras, Hand of Ragnaros', 5, 80)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });
});