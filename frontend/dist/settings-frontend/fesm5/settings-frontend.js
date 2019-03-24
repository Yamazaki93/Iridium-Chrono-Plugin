import { Injectable, Component, Injector, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SettingsFrontendService = /** @class */ (function () {
    function SettingsFrontendService() {
    }
    SettingsFrontendService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SettingsFrontendService.ctorParameters = function () { return []; };
    /** @nocollapse */ SettingsFrontendService.ngInjectableDef = defineInjectable({ factory: function SettingsFrontendService_Factory() { return new SettingsFrontendService(); }, token: SettingsFrontendService, providedIn: "root" });
    return SettingsFrontendService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SettingsFrontendComponent = /** @class */ (function () {
    function SettingsFrontendComponent(injector) {
        this.injector = injector;
        this.imagePath = '';
    }
    /**
     * @return {?}
     */
    SettingsFrontendComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.imagePath = this.injector.get('StaticAssets').GetAssetPath('icon.jpg');
    };
    SettingsFrontendComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-settings-frontend',
                    template: "<div style=\"display: flex; align-items: center; flex-direction: row\">\r\n    <img width=\"35px\" style=\"margin-right: 10px\" [src]=\"imagePath\">\r\n    <h2>Iridium Chrono Plugin</h2>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    SettingsFrontendComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SettingsFrontendComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SettingsFrontendModule = /** @class */ (function () {
    function SettingsFrontendModule() {
    }
    SettingsFrontendModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SettingsFrontendComponent],
                    imports: [],
                    exports: [SettingsFrontendComponent]
                },] }
    ];
    return SettingsFrontendModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SettingsFrontendService, SettingsFrontendComponent, SettingsFrontendModule };

//# sourceMappingURL=settings-frontend.js.map