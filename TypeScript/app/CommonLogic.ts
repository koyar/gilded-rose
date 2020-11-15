import { Item } from "./Item";

export class CommonLogic {
    protected name: string;
    protected sellIn: number;
    protected quality: number;
    protected qualityOperator: number = -1;

    private sellInOperator: number = -1;

    constructor(name:string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    

    init(): Item {
        this.qualityOperator = this.getQualityValue();
        this.increaseQuality();
        this.sellIn +=-1;

        return <Item>{
            name: this.name,
            sellIn: this.sellIn,
            quality: this.quality
        }
    }

    getQualityValue(): number {
        return 1;
    }

    private increaseQuality () {
        if (this.quality >= 50) {
            this.quality = 50;
        } else if (this.quality < 0) {
            this.quality = 0;
        } else {
            this.quality = this.quality + this.qualityOperator;
        }
    }
}