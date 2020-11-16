
import { CommonLogic } from "./CommonLogic";

export class Sulfuras extends CommonLogic {

    constructor(name: string, sellIn: number, quality?: number) {
        super(name, sellIn, 80);
    }

    getQualityValue(): number {
        return 0;
    }

    increaseQuality() {}
}