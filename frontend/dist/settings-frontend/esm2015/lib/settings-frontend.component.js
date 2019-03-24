/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
export class SettingsFrontendComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.imagePath = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.imagePath = this.injector.get('StaticAssets').GetAssetPath('icon.jpg');
    }
}
SettingsFrontendComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-settings-frontend',
                template: "<div style=\"display: flex; align-items: center; flex-direction: row\">\r\n    <img width=\"35px\" style=\"margin-right: 10px\" [src]=\"imagePath\">\r\n    <h2>Iridium Chrono Plugin</h2>\r\n</div>"
            }] }
];
/** @nocollapse */
SettingsFrontendComponent.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /** @type {?} */
    SettingsFrontendComponent.prototype.imagePath;
    /**
     * @type {?}
     * @private
     */
    SettingsFrontendComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtZnJvbnRlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2V0dGluZ3MtZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2V0dGluZ3MtZnJvbnRlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU81RCxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3BDLFlBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUY1QixjQUFTLEdBQUcsRUFBRSxDQUFDO0lBR1gsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZ05BQWlEO2FBRWxEOzs7O1lBTjJCLFFBQVE7Ozs7SUFTbEMsOENBQWU7Ozs7O0lBRWIsNkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZXR0aW5ncy1mcm9udGVuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy1mcm9udGVuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NGcm9udGVuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaW1hZ2VQYXRoID0gJyc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLmluamVjdG9yLmdldCgnU3RhdGljQXNzZXRzJykuR2V0QXNzZXRQYXRoKCdpY29uLmpwZycpO1xuICB9XG5cbn1cbiJdfQ==