
import { CommonLogic } from "./CommonLogic";

export class BackStage extends CommonLogic {

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    getQualityValue (): number {
        let qualityVal: number = 0;
        if (this.sellIn <= 0) {
            this.quality = 0; // Quality after concert
        } else if (this.sellIn <= 5) {
            qualityVal = 3; // Quality less than 6 days
        } else if (this.sellIn <= 10) {
            qualityVal = 2; // Quality less than 10 days
        } else {
            qualityVal = 1; // Quality increases as time goes by
        }

        return qualityVal;
    }
}