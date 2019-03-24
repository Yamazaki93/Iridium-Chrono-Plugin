/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
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
        this.imagePath = this.injector.get('StaticAssets').GetAssetPath('icon.png');
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
export { SettingsFrontendComponent };
if (false) {
    /** @type {?} */
    SettingsFrontendComponent.prototype.imagePath;
    /**
     * @type {?}
     * @private
     */
    SettingsFrontendComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtZnJvbnRlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2V0dGluZ3MtZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2V0dGluZ3MtZnJvbnRlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RDtJQVFFLG1DQUNVLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGNUIsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUdYLENBQUM7Ozs7SUFFTCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RSxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsZ05BQWlEO2lCQUVsRDs7OztnQkFOMkIsUUFBUTs7SUFrQnBDLGdDQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSx5QkFBeUI7OztJQUVwQyw4Q0FBZTs7Ozs7SUFFYiw2Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNldHRpbmdzLWZyb250ZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLWZyb250ZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0Zyb250ZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpbWFnZVBhdGggPSAnJztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmltYWdlUGF0aCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdTdGF0aWNBc3NldHMnKS5HZXRBc3NldFBhdGgoJ2ljb24ucG5nJyk7XG4gIH1cblxufVxuIl19