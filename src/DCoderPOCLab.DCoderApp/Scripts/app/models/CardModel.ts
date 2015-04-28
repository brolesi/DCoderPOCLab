module app.models {
    'use strict';

    export class CardModel implements ICardModel {

        constructor(
            public cardId: number,
            public sourceName: string,
            public authorImageUrl: string,
            public authorName: string,
            public authoringDate: string,
            public contentTitle: string,
            public contentSummary: string,
            public contentImageUrl: string,
            public mainCard: boolean = false) {
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

        //public getClass(): string {
        //    return (this.mainCard) ? "two-columns" : "one-column";
        //}

        public getClass(): string {
            return (this.mainCard) ? "col-md-4 col-sm-8 col-xs-12" : "col-md-2 col-sm-4 col-xs-6";
        }
    }
} 