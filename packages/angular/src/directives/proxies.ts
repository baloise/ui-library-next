/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@baloise/ui-library-next';

import { Accordion as IAccordion } from '@baloise/ui-library-next/dist/types/components/bal-accordion/bal-accordion';
export declare interface BalAccordion extends Components.BalAccordion {}
@ProxyCmp({
  inputs: ['closeIcon', 'closeLabel', 'collapsed', 'openIcon', 'openLabel', 'type'],
  methods: ['open', 'close', 'toggle']
})
@Component({
  selector: 'bal-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeIcon', 'closeLabel', 'collapsed', 'openIcon', 'openLabel', 'type'],
  outputs: ['balAccordionChange']
})
export class BalAccordion {
  /** Emmited when the accordion has changed */
  balAccordionChange!: IAccordion['balChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balAccordionChange']);
  }
}


export declare interface BalButton extends Components.BalButton {}
@ProxyCmp({
  inputs: ['bottomRounded', 'dense', 'disabled', 'expanded', 'icon', 'iconRight', 'inverted', 'isActive', 'isSquare', 'light', 'loading', 'outlined', 'size', 'type']
})
@Component({
  selector: 'bal-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bottomRounded', 'dense', 'disabled', 'expanded', 'icon', 'iconRight', 'inverted', 'isActive', 'isSquare', 'light', 'loading', 'outlined', 'size', 'type']
})
export class BalButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCard extends Components.BalCard {}
@ProxyCmp({
  inputs: ['border', 'flat', 'inverted', 'square', 'teaser']
})
@Component({
  selector: 'bal-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'flat', 'inverted', 'square', 'teaser']
})
export class BalCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardActions extends Components.BalCardActions {}
@ProxyCmp({
  inputs: ['right']
})
@Component({
  selector: 'bal-card-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['right']
})
export class BalCardActions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardButton extends Components.BalCardButton {}
@ProxyCmp({
  inputs: ['icon']
})
@Component({
  selector: 'bal-card-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon']
})
export class BalCardButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardContent extends Components.BalCardContent {}
@ProxyCmp({
  inputs: ['inverted']
})
@Component({
  selector: 'bal-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted']
})
export class BalCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardHeading extends Components.BalCardHeading {}

@Component({
  selector: 'bal-card-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalCardHeading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardStep extends Components.BalCardStep {}
@ProxyCmp({
  inputs: ['active', 'disabled', 'done', 'hidden', 'label', 'value'],
  methods: ['getOptions', 'setActive']
})
@Component({
  selector: 'bal-card-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'done', 'hidden', 'label', 'value']
})
export class BalCardStep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CardSteps as ICardSteps } from '@baloise/ui-library-next/dist/types/components/bal-card-steps/bal-card-steps';
export declare interface BalCardSteps extends Components.BalCardSteps {}
@ProxyCmp({
  inputs: ['backLabel', 'hasBack', 'hidden', 'inverted', 'navigation', 'showLabel'],
  methods: ['select']
})
@Component({
  selector: 'bal-card-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backLabel', 'hasBack', 'hidden', 'inverted', 'navigation', 'showLabel'],
  outputs: ['balCardStepsChange', 'balCardStepsBackClick', 'balCardStepsStepClick']
})
export class BalCardSteps {
  /** Emitted when the changes has finished. */
  balCardStepsChange!: ICardSteps['balChange'];
  /** Emitted when the back button is clicked. */
  balCardStepsBackClick!: ICardSteps['balBackClick'];
  /** Emitted when the step circle is clicked. */
  balCardStepsStepClick!: ICardSteps['balStepClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balCardStepsChange', 'balCardStepsBackClick', 'balCardStepsStepClick']);
  }
}


export declare interface BalCardSubtitle extends Components.BalCardSubtitle {}
@ProxyCmp({
  inputs: ['inverted']
})
@Component({
  selector: 'bal-card-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted']
})
export class BalCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardTitle extends Components.BalCardTitle {}
@ProxyCmp({
  inputs: ['inverted']
})
@Component({
  selector: 'bal-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted']
})
export class BalCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Checkbox as ICheckbox } from '@baloise/ui-library-next/dist/types/components/bal-checkbox/bal-checkbox';
export declare interface BalCheckbox extends Components.BalCheckbox {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'inverted', 'label', 'name', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'bal-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'inverted', 'label', 'name', 'value'],
  outputs: ['balCheckboxChange', 'balCheckboxFocus', 'balCheckboxBlur']
})
export class BalCheckbox {
  /** Emitted when the checked property has changed. */
  balCheckboxChange!: ICheckbox['balChange'];
  /** Emitted when the toggle has focus. */
  balCheckboxFocus!: ICheckbox['balFocus'];
  /** Emitted when the toggle loses focus. */
  balCheckboxBlur!: ICheckbox['balBlur'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balCheckboxChange', 'balCheckboxFocus', 'balCheckboxBlur']);
  }
}


export declare interface BalData extends Components.BalData {}
@ProxyCmp({
  inputs: ['border', 'horizontal']
})
@Component({
  selector: 'bal-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'horizontal']
})
export class BalData {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDataItem extends Components.BalDataItem {}
@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'bal-data-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled']
})
export class BalDataItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDataLabel extends Components.BalDataLabel {}
@ProxyCmp({
  inputs: ['required']
})
@Component({
  selector: 'bal-data-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['required']
})
export class BalDataLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDataValue extends Components.BalDataValue {}

@Component({
  selector: 'bal-data-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalDataValue {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Dropdown as IDropdown } from '@baloise/ui-library-next/dist/types/components/bal-dropdown/bal-dropdown';
export declare interface BalDropdown extends Components.BalDropdown {}
@ProxyCmp({
  inputs: ['expanded', 'isActive', 'scrollable'],
  methods: ['open', 'close', 'toggle', 'getMenuElement', 'getContentElement']
})
@Component({
  selector: 'bal-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'isActive', 'scrollable'],
  outputs: ['balDropdownChange']
})
export class BalDropdown {
  /** Listen when the dropdown opens or closes. Returns the current `isActive` value. */
  balDropdownChange!: IDropdown['balChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balDropdownChange']);
  }
}


export declare interface BalField extends Components.BalField {}
@ProxyCmp({
  inputs: ['disabled', 'iconLeft', 'iconRight', 'inverted', 'label', 'loading', 'required', 'validationMessage']
})
@Component({
  selector: 'bal-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'iconLeft', 'iconRight', 'inverted', 'label', 'loading', 'required', 'validationMessage']
})
export class BalField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { FileUpload as IFileUpload } from '@baloise/ui-library-next/dist/types/components/bal-file-upload/bal-file-upload';
export declare interface BalFileUpload extends Components.BalFileUpload {}
@ProxyCmp({
  inputs: ['accept', 'disabled', 'label', 'maxBundleSize', 'maxFileSize', 'maxFiles', 'multiple']
})
@Component({
  selector: 'bal-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'disabled', 'label', 'maxBundleSize', 'maxFileSize', 'maxFiles', 'multiple'],
  outputs: ['balFileUploadChange', 'balFileUploadRejectedFile']
})
export class BalFileUpload {
  /** Triggers when a file is added or removed. */
  balFileUploadChange!: IFileUpload['balChangeEventEmitter'];
  /** Triggers when a file is rejected due to not allowed MIME-Type and so on. */
  balFileUploadRejectedFile!: IFileUpload['balRejectedFileEventEmitter'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balFileUploadChange', 'balFileUploadRejectedFile']);
  }
}


export declare interface BalHint extends Components.BalHint {}
@ProxyCmp({
  inputs: ['closeLabel', 'disabled'],
  methods: ['toggle', 'open', 'close']
})
@Component({
  selector: 'bal-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeLabel', 'disabled']
})
export class BalHint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalHintText extends Components.BalHintText {}

@Component({
  selector: 'bal-hint-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalHintText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalHintTitle extends Components.BalHintTitle {}

@Component({
  selector: 'bal-hint-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalHintTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIcon extends Components.BalIcon {}
@ProxyCmp({
  inputs: ['color', 'isLeft', 'isRight', 'name', 'rotate', 'size', 'turn']
})
@Component({
  selector: 'bal-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'isLeft', 'isRight', 'name', 'rotate', 'size', 'turn']
})
export class BalIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Input as IInput } from '@baloise/ui-library-next/dist/types/components/bal-input/bal-input';
export declare interface BalInput extends Components.BalInput {}
@ProxyCmp({
  inputs: ['clickable', 'disabled', 'inverted', 'maxLength', 'minLength', 'name', 'numberKeyboard', 'onlyNumbers', 'placeholder', 'readonly', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'bal-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'disabled', 'inverted', 'maxLength', 'minLength', 'name', 'numberKeyboard', 'onlyNumbers', 'placeholder', 'readonly', 'type', 'value'],
  outputs: ['balInput', 'balInputBlur', 'balInputClick', 'balInputKeyPress', 'balInputFocus']
})
export class BalInput {
  /** Emitted when a keyboard input occurred. */
  balInput!: IInput['balInput'];
  /** Emitted when a keyboard input occurred. */
  balInputBlur!: IInput['balBlur'];
  /** Emitted when the input has clicked. */
  balInputClick!: IInput['balClick'];
  /** Emitted when a keyboard key has pressed. */
  balInputKeyPress!: IInput['balKeyPress'];
  /** Emitted when the input has focus. */
  balInputFocus!: IInput['balFocus'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balInput', 'balInputBlur', 'balInputClick', 'balInputKeyPress', 'balInputFocus']);
  }
}


export declare interface BalList extends Components.BalList {}
@ProxyCmp({
  inputs: ['border', 'disabled', 'inverted']
})
@Component({
  selector: 'bal-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'disabled', 'inverted']
})
export class BalList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItem extends Components.BalListItem {}
@ProxyCmp({
  inputs: ['disabled', 'selected']
})
@Component({
  selector: 'bal-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'selected']
})
export class BalListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItemContent extends Components.BalListItemContent {}

@Component({
  selector: 'bal-list-item-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalListItemContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItemIcon extends Components.BalListItemIcon {}
@ProxyCmp({
  inputs: ['right']
})
@Component({
  selector: 'bal-list-item-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['right']
})
export class BalListItemIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItemSubtitle extends Components.BalListItemSubtitle {}

@Component({
  selector: 'bal-list-item-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalListItemSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItemTitle extends Components.BalListItemTitle {}

@Component({
  selector: 'bal-list-item-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalListItemTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalNavbar extends Components.BalNavbar {}
@ProxyCmp({
  inputs: ['light', 'logoHref']
})
@Component({
  selector: 'bal-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['light', 'logoHref']
})
export class BalNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Pagination as IPagination } from '@baloise/ui-library-next/dist/types/components/bal-pagination/bal-pagination';
export declare interface BalPagination extends Components.BalPagination {}
@ProxyCmp({
  inputs: ['disabled', 'pageRange', 'totalPages', 'value'],
  methods: ['next', 'previous']
})
@Component({
  selector: 'bal-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'pageRange', 'totalPages', 'value'],
  outputs: ['balNavbarChange']
})
export class BalPagination {
  /** Triggers when a page change happens */
  balNavbarChange!: IPagination['balChangeEventEmitter'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balNavbarChange']);
  }
}

import { Select as ISelect } from '@baloise/ui-library-next/dist/types/components/bal-select/bal-select';
export declare interface BalSelect extends Components.BalSelect {}
@ProxyCmp({
  inputs: ['disabled', 'expanded', 'inverted', 'loading', 'options', 'placeholder', 'remote', 'scrollable', 'typeahead', 'value'],
  methods: ['clear']
})
@Component({
  selector: 'bal-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'expanded', 'inverted', 'loading', 'options', 'placeholder', 'remote', 'scrollable', 'typeahead', 'value'],
  outputs: ['balSelectChange', 'balSelectInput', 'balSelectBlur', 'balSelectFocus', 'balSelectClick', 'balSelectKeyPress']
})
export class BalSelect {
  /** Emitted when a option got selected. */
  balSelectChange!: ISelect['balChange'];
  /** Emitted when a keyboard input occurred. */
  balSelectInput!: ISelect['balInput'];
  /** Emitted when the input loses focus. */
  balSelectBlur!: ISelect['balBlur'];
  /** Emitted when the input has focus. */
  balSelectFocus!: ISelect['balFocus'];
  /** Emitted when the input got clicked. */
  balSelectClick!: ISelect['balClick'];
  /** Emitted when the input has focus and key from the keyboard go hit. */
  balSelectKeyPress!: ISelect['balKeyPress'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balSelectChange', 'balSelectInput', 'balSelectBlur', 'balSelectFocus', 'balSelectClick', 'balSelectKeyPress']);
  }
}

import { SelectOption as ISelectOption } from '@baloise/ui-library-next/dist/types/components/bal-select-option/bal-select-option';
export declare interface BalSelectOption extends Components.BalSelectOption {}
@ProxyCmp({
  inputs: ['focused', 'hidden', 'icon', 'selected', 'value']
})
@Component({
  selector: 'bal-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['focused', 'hidden', 'icon', 'selected', 'value'],
  outputs: ['balSelectOptionClick']
})
export class BalSelectOption {
  /** Click event when a option get clicked. */
  balSelectOptionClick!: ISelectOption['balSelectOptionClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balSelectOptionClick']);
  }
}


export declare interface BalSpinner extends Components.BalSpinner {}
@ProxyCmp({
  inputs: ['inverted', 'small']
})
@Component({
  selector: 'bal-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted', 'small']
})
export class BalSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Step as IStep } from '@baloise/ui-library-next/dist/types/components/bal-step/bal-step';
export declare interface BalStep extends Components.BalStep {}
@ProxyCmp({
  inputs: ['active', 'bubble', 'disabled', 'label', 'value'],
  methods: ['getOptions', 'setActive']
})
@Component({
  selector: 'bal-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'bubble', 'disabled', 'label', 'value'],
  outputs: ['balStepChange']
})
export class BalStep {
  /** Emitted when the steps get rendered. */
  balStepChange!: IStep['stepChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balStepChange']);
  }
}

import { Steps as ISteps } from '@baloise/ui-library-next/dist/types/components/bal-steps/bal-steps';
export declare interface BalSteps extends Components.BalSteps {}
@ProxyCmp({
  methods: ['select']
})
@Component({
  selector: 'bal-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  outputs: ['balStepsChange']
})
export class BalSteps {
  /** Emitted when the changes has finished. */
  balStepsChange!: ISteps['stepsDidChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balStepsChange']);
  }
}

import { TabItem as ITabItem } from '@baloise/ui-library-next/dist/types/components/bal-tab-item/bal-tab-item';
export declare interface BalTabItem extends Components.BalTabItem {}
@ProxyCmp({
  inputs: ['active', 'bubble', 'disabled', 'label', 'value'],
  methods: ['getOptions', 'setActive']
})
@Component({
  selector: 'bal-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'bubble', 'disabled', 'label', 'value'],
  outputs: ['balTabChange']
})
export class BalTabItem {
  /** Emitted when the tabs get rendered. */
  balTabChange!: ITabItem['tabChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balTabChange']);
  }
}

import { Tabs as ITabs } from '@baloise/ui-library-next/dist/types/components/bal-tabs/bal-tabs';
export declare interface BalTabs extends Components.BalTabs {}
@ProxyCmp({
  inputs: ['action', 'actionLabel', 'dense', 'expanded', 'rounded'],
  methods: ['select']
})
@Component({
  selector: 'bal-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action', 'actionLabel', 'dense', 'expanded', 'rounded'],
  outputs: ['balTabsChange', 'balTabsActionClick']
})
export class BalTabs {
  /** Emitted when the changes has finished. */
  balTabsChange!: ITabs['tabsDidChange'];
  /** Emitted when the action button has clicked */
  balTabsActionClick!: ITabs['actionHasClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balTabsChange', 'balTabsActionClick']);
  }
}


export declare interface BalTag extends Components.BalTag {}
@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'bal-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['type']
})
export class BalTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalText extends Components.BalText {}

@Component({
  selector: 'bal-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
