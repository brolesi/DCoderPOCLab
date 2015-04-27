module app.models {
    'use strict';

    export class CardModel implements ICardModel {

        public mainCard: boolean = false;
        public cardId: number;
        public sourceName: string;
        public authorImageUrl: string;
        public authorName: string;
        public authoringDate: string;
        public contentTitle: string;
        public contentSummary: string;
        public contentImageUrl: string;

        constructor() {
        }

        public getContentImgWidth(): number {

            if (this.mainCard)
                return 507;
            else 
                return 241;
        }

        public getContentImgHeight(): number {

            if (this.mainCard)
                return 380;
            else
                return 181;
        }

        public getClass(): string {
            return (this.mainCard) ? "two-columns" : "one-column";
        }
    }
} 