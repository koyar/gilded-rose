
import { CommonLogic } from "./CommonLogic";

export class AgedBrie extends CommonLogic {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    getQualityValue (): number {
        // Aged Brie quality increases twice as fast once the sell by date has passed or 0.
        return (this.sellIn <=0) ? 2 : 1;
    }
}