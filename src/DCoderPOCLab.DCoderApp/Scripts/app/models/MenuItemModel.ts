module app.models {
    'use strict';

    export class MenuItemModel {
        
        constructor(
            public label: string,
            public url: string,
            private $location : ng.ILocationService) { }

        public isActive(): boolean {
            return this.url === this.$location.path();
        }
    }
} 