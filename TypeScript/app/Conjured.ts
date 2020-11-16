
import { CommonLogic } from "./CommonLogic";

export class Conjured extends CommonLogic {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    // Quality decreases twice as fast as standard items
    getQualityValue(): number {
        return -2;
    }
}