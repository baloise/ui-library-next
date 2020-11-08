/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@baloise/ui-library-next';


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

import { CardStep as ICardStep } from '@baloise/ui-library-next/dist/types/components/bal-card-step/bal-card-step';
export declare interface BalCardStep extends Components.BalCardStep {}
@ProxyCmp({
  inputs: ['active', 'disabled', 'done', 'hidden', 'label', 'value'],
  methods: ['getOptions', 'setActive']
})
@Component({
  selector: 'bal-card-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'done', 'hidden', 'label', 'value'],
  outputs: ['balChange']
})
export class BalCardStep {
  /** Emitted when the label of the step has changed */
  balChange!: ICardStep['didChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange']);
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
  outputs: ['balChange', 'balBackClick', 'balClick']
})
export class BalCardSteps {
  /** Emitted when the changes has finished. */
  balChange!: ICardSteps['balChange'];
  /** Emitted when the back button is clicked. */
  balBackClick!: ICardSteps['balBackClick'];
  /** Emitted when the step circle is clicked. */
  balClick!: ICardSteps['balStepClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balBackClick', 'balClick']);
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
  outputs: ['balChange', 'balFocus', 'balBlur']
})
export class BalCheckbox {
  /** Emitted when the checked property has changed. */
  balChange!: ICheckbox['balChange'];
  /** Emitted when the toggle has focus. */
  balFocus!: ICheckbox['balFocus'];
  /** Emitted when the toggle loses focus. */
  balBlur!: ICheckbox['balBlur'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balFocus', 'balBlur']);
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
  outputs: ['balChange']
})
export class BalDropdown {
  /** Listen when the dropdown opens or closes. Returns the current `isActive` value. */
  balChange!: IDropdown['balChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange']);
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
  inputs: ['autoComplete', 'clickable', 'disabled', 'inverted', 'maxLength', 'minLength', 'name', 'numberKeyboard', 'onlyNumbers', 'placeholder', 'readonly', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'bal-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoComplete', 'clickable', 'disabled', 'inverted', 'maxLength', 'minLength', 'name', 'numberKeyboard', 'onlyNumbers', 'placeholder', 'readonly', 'type', 'value'],
  outputs: ['balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus']
})
export class BalInput {
  /** Emitted when a keyboard input occurred. */
  balInput!: IInput['balInput'];
  /** Emitted when a keyboard input occurred. */
  balBlur!: IInput['balBlur'];
  /** Emitted when the input has clicked. */
  balClick!: IInput['balClick'];
  /** Emitted when a keyboard key has pressed. */
  balKeyPress!: IInput['balKeyPress'];
  /** Emitted when the input has focus. */
  balFocus!: IInput['balFocus'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus']);
  }
}

import { Select as ISelect } from '@baloise/ui-library-next/dist/types/components/bal-select/bal-select';
export declare interface BalSelect extends Components.BalSelect {}
@ProxyCmp({
  inputs: ['disabled', 'expanded', 'inverted', 'loading', 'options', 'placeholder', 'remote', 'scrollable', 'typeahead', 'value'],
  methods: ['open', 'close', 'select', 'clear', 'setFocus']
})
@Component({
  selector: 'bal-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'expanded', 'inverted', 'loading', 'options', 'placeholder', 'remote', 'scrollable', 'typeahead', 'value'],
  outputs: ['balChange', 'balInput', 'balCancel', 'balBlur', 'balFocus', 'balClick', 'balKeyPress']
})
export class BalSelect {
  /** Emitted when a option got selected. */
  balChange!: ISelect['balChange'];
  /** Emitted when a keyboard input occurred. */
  balInput!: ISelect['balInput'];
  /** Emitted when the selection is cancelled. */
  balCancel!: ISelect['balCancel'];
  /** Emitted when the input loses focus. */
  balBlur!: ISelect['balBlur'];
  /** Emitted when the input has focus. */
  balFocus!: ISelect['balFocus'];
  /** Emitted when the input got clicked. */
  balClick!: ISelect['balClick'];
  /** Emitted when the input has focus and key from the keyboard go hit. */
  balKeyPress!: ISelect['balKeyPress'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balInput', 'balCancel', 'balBlur', 'balFocus', 'balClick', 'balKeyPress']);
  }
}


export declare interface BalSelectOption extends Components.BalSelectOption {}
@ProxyCmp({
  inputs: ['focused', 'hidden', 'icon', 'selected', 'value']
})
@Component({
  selector: 'bal-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['focused', 'hidden', 'icon', 'selected', 'value']
})
export class BalSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
