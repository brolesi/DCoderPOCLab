module app.models {
    'use strict';

    export interface ICardModel {
        mainCard: boolean;
        cardId: number;
        sourceName: string;
        authorImageUrl: string;
        authorName: string;
        authoringDate: string;
        contentTitle: string;
        contentSummary: string;
        contentImageUrl: string;
    }
} 