
import { CommonLogic } from "./CommonLogic";

export class AgedBrie extends CommonLogic {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    getQualityValue (): number {
        return (this.sellIn <=0) ? 2 : 1;
    }
}