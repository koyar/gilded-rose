import { Item } from './item';

export const AgedBrie = (item) :Item => {

    const increaseQuality = quality => (quality < 50)  ? quality + 1 : quality

    item.quality = increaseQuality(item.quality)
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality
    item.sellIn -= 1;

    return item;
}