module app.interfaces {
    'use strict';

    export interface IBaseContentCtrlScope extends ng.IScope {
        cards: models.ICardModel[];
        onLoad(): void;
    }
} 