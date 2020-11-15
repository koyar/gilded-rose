
import { CommonLogic } from "./CommonLogic";

export class AgedBrie extends CommonLogic {

    constructor(name: string, quality: number, sellIn: number) {
        super(name, quality, sellIn);
    }

    getQualityValue (): number {
        return (this.sellIn <=0) ? 2 : 1;
    }
}