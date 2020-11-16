import { expect } from 'chai';
import { Item } from '../app/Item';

import { GildedRose } from '../app/gilded-rose';

describe('Conjured', () => {
    it('should degrade quality twice as fast as normal items', () => {
        const storeItems = [
            new Item('Conjured', 5, 10)
        ];

        const expectedResult = [
            new Item('Conjured', 4, 8)
        ];

        const gildedRose = new GildedRose(storeItems);
        const items = gildedRose.updateQuality();
        
        expect(items).to.eql(expectedResult);
    });
});