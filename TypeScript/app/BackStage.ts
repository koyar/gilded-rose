
import { CommonLogic } from "./CommonLogic";

export class BackStage extends CommonLogic {

    constructor(name: string, quality: number, sellIn: number) {
        super(name, quality, sellIn);
    }

    getQualityValue (): number {
        let qualityVal: number = 0;
        if (this.sellIn <= 0) {
            this.quality = 0;
        } else if (this.sellIn <= 5) {
            qualityVal = 3;
        } else if (this.sellIn <= 10) {
            qualityVal = 2;
        } else {
            qualityVal = 1;
        }

        return qualityVal;
    }
}