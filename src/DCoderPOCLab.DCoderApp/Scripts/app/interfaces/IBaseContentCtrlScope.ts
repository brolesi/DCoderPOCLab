module app.interfaces {
    'use strict';

    export interface IBaseContentCtrlScope extends ng.IScope {
        title: string;
        cards: models.ICardModel[];
        onLoad(): void;
    }
} 