import { Item } from "./Item";

export class CommonLogic {
    protected name: string;
    protected sellIn: number;
    protected quality: number;
    private qualityValue: number = -1;

    constructor(name:string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    
    init(): Item {
        this.qualityValue = this.getQualityValue();
        this.increaseQuality();

        return <Item> {
            name: this.name,
            sellIn: this.sellIn,
            quality: this.quality
        }
    }

    getQualityValue(): number {
        // Normal items
        if (this.sellIn <= 0) {
            this.qualityValue = -2;
        }
        return this.qualityValue;
    }

    increaseQuality () {
        // Quality should never go above 50
        if (this.quality >= 50) {
            this.quality = 50;
        } else {
            this.quality = this.quality + this.qualityValue;
        }
        // Quality of item is never negative
        if (this.quality < 0) {
            this.quality = 0;
        }

        this.sellIn +=-1;
    }
}