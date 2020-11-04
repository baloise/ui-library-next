/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BalCardStepOptions } from "./components/bal-card-step/bal-card-step.type";
import { BalOptionValue } from "./components/bal-select-option/bal-select-option.type";
export namespace Components {
    interface BalButton {
        /**
          * If `true` the bottom corners get rounded
         */
        "bottomRounded": boolean;
        /**
          * If `true` the button is dense
         */
        "dense": boolean;
        /**
          * If `true` the button is disabled
         */
        "disabled": boolean;
        /**
          * If `true` the button has a full width
         */
        "expanded": boolean;
        /**
          * Name of the left button icon
         */
        "icon": string;
        /**
          * Name of the right button icon
         */
        "iconRight": string;
        /**
          * If `true` the button is inverted
         */
        "inverted": boolean;
        /**
          * If `true` the button has a active theme
         */
        "isActive": boolean;
        /**
          * If `true` the width of the buttons is limited
         */
        "isSquare": boolean;
        /**
          * If `true` the button has a light color
         */
        "light": boolean;
        /**
          * If `true` the label is hidden and a loading spinner is shown instead.
         */
        "loading": boolean;
        /**
          * If `true` the button is outlined
         */
        "outlined": boolean;
        /**
          * Size of the button
         */
        "size": 'is-small' | '';
        /**
          * The theme type of the button. Given by bulma our css framework.
         */
        "type": 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger' | 'is-link';
    }
    interface BalCard {
        /**
          * If `true` a light blue border is added to the card.
         */
        "border": boolean;
        /**
          * If `true` the card loses its shadow.
         */
        "flat": boolean;
        /**
          * If `true` the card background color becomes blue.
         */
        "inverted": boolean;
        /**
          * If `true` the card loses its border radius.
         */
        "square": boolean;
        /**
          * If `true` the card has a limited width on desktop.
         */
        "teaser": boolean;
    }
    interface BalCardActions {
        /**
          * If `true` the buttons start form right to left.
         */
        "right": boolean;
    }
    interface BalCardButton {
        /**
          * Name of the icon like `edit`.
         */
        "icon": string;
    }
    interface BalCardContent {
        /**
          * If `true` the card text color becomes white.
         */
        "inverted": boolean;
    }
    interface BalCardHeading {
    }
    interface BalCardStep {
        /**
          * Tell's if the step is active and the content is visible.
         */
        "active": boolean;
        /**
          * If `true` the step is disabled.
         */
        "disabled": boolean;
        /**
          * If `true` the step is done.
         */
        "done": boolean;
        /**
          * Options of the step like label, value etc.
         */
        "getOptions": () => Promise<BalCardStepOptions>;
        /**
          * If `true` the step is hidden in the steps navigation.
         */
        "hidden": boolean;
        /**
          * Label for the step.
         */
        "label": string;
        /**
          * Sets the step active.
         */
        "setActive": (active: boolean) => Promise<void>;
        /**
          * This is the key of the step.
         */
        "value": string;
    }
    interface BalCardSteps {
        /**
          * Label for back button
         */
        "backLabel": string;
        /**
          * If `true` the steps navigation has back button.
         */
        "hasBack": boolean;
        /**
          * If `true` the steps navigation is hidden.
         */
        "hidden": boolean;
        /**
          * If `true` a the style is ready for a dark background.
         */
        "inverted": boolean;
        /**
          * Select a step.
         */
        "select": (value: string) => Promise<void>;
    }
    interface BalCardSubtitle {
        /**
          * If `true` the card text color becomes white.
         */
        "inverted": boolean;
    }
    interface BalCardTitle {
        /**
          * If `true` the card text color becomes white.
         */
        "inverted": boolean;
    }
    interface BalCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked": boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled": boolean;
        /**
          * If `true`, the control works on dark background.
         */
        "inverted": boolean;
        /**
          * The label of the control.
         */
        "label": string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Sets the focus on the checkbox input element.
         */
        "setFocus": () => Promise<void>;
        /**
          * The value of the control.
         */
        "value": string;
    }
    interface BalDropdown {
        /**
          * Closes the dropdown menu.
         */
        "close": () => Promise<void>;
        /**
          * Returns the `HTMLDivElement` of the content element
         */
        "getContentElement": () => Promise<HTMLDivElement>;
        /**
          * Returns the `HTMLDivElement` of the menu element
         */
        "getMenuElement": () => Promise<HTMLDivElement>;
        /**
          * If `true` the dropdown content is open.
         */
        "isActive": boolean;
        /**
          * Open the dropdown menu.
         */
        "open": () => Promise<void>;
        /**
          * Limit the height of the dropdown content. Pass the amount of pixel.
         */
        "scrollable": number;
        /**
          * Open or closes the dropdown.
         */
        "toggle": () => Promise<void>;
    }
    interface BalField {
        /**
          * If `true` the field loses opacity
         */
        "disabled": boolean;
        /**
          * Baloise icon for the left side of the input
         */
        "iconLeft": string;
        /**
          * Baloise icon for the right side of the input
         */
        "iconRight": string;
        /**
          * If `true` the field can be used on blue background.
         */
        "inverted": boolean;
        /**
          * Text of the inputs label
         */
        "label": string;
        /**
          * If `true` a loading spinner is visible at the end of the input
         */
        "loading": boolean;
        /**
          * If `true` a asterix (*) is added to the label text
         */
        "required": boolean;
        /**
          * Validation message text
         */
        "validationMessage": string;
    }
    interface BalIcon {
        /**
          * Defines the color of the icon.
         */
        "color": 'danger' | 'warning' | 'primary' | 'blue' | 'success' | 'grey' | 'white' | 'black' | 'blue-line' | 'blue-light-line' | '';
        /**
          * If `true` the icon can be positioned ot the left side of another component
         */
        "isLeft": boolean;
        /**
          * If `true` the icon can be positioned ot the right side of another component
         */
        "isRight": boolean;
        /**
          * The name of the icon without the bal-icon prefix.
         */
        "name": string;
        /**
          * If `true` the icon rotates like for a loading spinner
         */
        "rotate": boolean;
        /**
          * Defines the size of the icon.
         */
        "size": 'small' | 'medium' | 'large' | '';
    }
    interface BalInput {
        "clickable": boolean;
        "disabled": boolean;
        "inverted": boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        "placeholder": string;
        "readonly": boolean;
        "setFocus": () => Promise<void>;
        "type": string;
        /**
          * The value of the control.
         */
        "value": string;
    }
    interface BalSelect {
        "clear": () => Promise<void>;
        "disabled": boolean;
        "loading": boolean;
        "options": BalOptionValue<any>[];
        "placeholder": string;
        "remote": boolean;
        "scrollable": number;
        "typeahead": boolean;
        "value": BalOptionValue<any>;
    }
    interface BalSelectOption {
        /**
          * If `true` the option is focused
         */
        "checkbox": boolean;
        /**
          * If `true` the option is focused
         */
        "focused": boolean;
        "hidden": boolean;
        /**
          * Baloise icon as a prefix
         */
        "icon": string;
        /**
          * If `true` the option is selected
         */
        "selected": boolean;
        /**
          * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
         */
        "value": BalOptionValue<any>;
    }
    interface BalSpinner {
        /**
          * If `true` the component can be used on dark background
         */
        "inverted": boolean;
        /**
          * If `true` the component is smaller
         */
        "small": boolean;
    }
    interface BalText {
    }
}
declare global {
    interface HTMLBalButtonElement extends Components.BalButton, HTMLStencilElement {
    }
    var HTMLBalButtonElement: {
        prototype: HTMLBalButtonElement;
        new (): HTMLBalButtonElement;
    };
    interface HTMLBalCardElement extends Components.BalCard, HTMLStencilElement {
    }
    var HTMLBalCardElement: {
        prototype: HTMLBalCardElement;
        new (): HTMLBalCardElement;
    };
    interface HTMLBalCardActionsElement extends Components.BalCardActions, HTMLStencilElement {
    }
    var HTMLBalCardActionsElement: {
        prototype: HTMLBalCardActionsElement;
        new (): HTMLBalCardActionsElement;
    };
    interface HTMLBalCardButtonElement extends Components.BalCardButton, HTMLStencilElement {
    }
    var HTMLBalCardButtonElement: {
        prototype: HTMLBalCardButtonElement;
        new (): HTMLBalCardButtonElement;
    };
    interface HTMLBalCardContentElement extends Components.BalCardContent, HTMLStencilElement {
    }
    var HTMLBalCardContentElement: {
        prototype: HTMLBalCardContentElement;
        new (): HTMLBalCardContentElement;
    };
    interface HTMLBalCardHeadingElement extends Components.BalCardHeading, HTMLStencilElement {
    }
    var HTMLBalCardHeadingElement: {
        prototype: HTMLBalCardHeadingElement;
        new (): HTMLBalCardHeadingElement;
    };
    interface HTMLBalCardStepElement extends Components.BalCardStep, HTMLStencilElement {
    }
    var HTMLBalCardStepElement: {
        prototype: HTMLBalCardStepElement;
        new (): HTMLBalCardStepElement;
    };
    interface HTMLBalCardStepsElement extends Components.BalCardSteps, HTMLStencilElement {
    }
    var HTMLBalCardStepsElement: {
        prototype: HTMLBalCardStepsElement;
        new (): HTMLBalCardStepsElement;
    };
    interface HTMLBalCardSubtitleElement extends Components.BalCardSubtitle, HTMLStencilElement {
    }
    var HTMLBalCardSubtitleElement: {
        prototype: HTMLBalCardSubtitleElement;
        new (): HTMLBalCardSubtitleElement;
    };
    interface HTMLBalCardTitleElement extends Components.BalCardTitle, HTMLStencilElement {
    }
    var HTMLBalCardTitleElement: {
        prototype: HTMLBalCardTitleElement;
        new (): HTMLBalCardTitleElement;
    };
    interface HTMLBalCheckboxElement extends Components.BalCheckbox, HTMLStencilElement {
    }
    var HTMLBalCheckboxElement: {
        prototype: HTMLBalCheckboxElement;
        new (): HTMLBalCheckboxElement;
    };
    interface HTMLBalDropdownElement extends Components.BalDropdown, HTMLStencilElement {
    }
    var HTMLBalDropdownElement: {
        prototype: HTMLBalDropdownElement;
        new (): HTMLBalDropdownElement;
    };
    interface HTMLBalFieldElement extends Components.BalField, HTMLStencilElement {
    }
    var HTMLBalFieldElement: {
        prototype: HTMLBalFieldElement;
        new (): HTMLBalFieldElement;
    };
    interface HTMLBalIconElement extends Components.BalIcon, HTMLStencilElement {
    }
    var HTMLBalIconElement: {
        prototype: HTMLBalIconElement;
        new (): HTMLBalIconElement;
    };
    interface HTMLBalInputElement extends Components.BalInput, HTMLStencilElement {
    }
    var HTMLBalInputElement: {
        prototype: HTMLBalInputElement;
        new (): HTMLBalInputElement;
    };
    interface HTMLBalSelectElement extends Components.BalSelect, HTMLStencilElement {
    }
    var HTMLBalSelectElement: {
        prototype: HTMLBalSelectElement;
        new (): HTMLBalSelectElement;
    };
    interface HTMLBalSelectOptionElement extends Components.BalSelectOption, HTMLStencilElement {
    }
    var HTMLBalSelectOptionElement: {
        prototype: HTMLBalSelectOptionElement;
        new (): HTMLBalSelectOptionElement;
    };
    interface HTMLBalSpinnerElement extends Components.BalSpinner, HTMLStencilElement {
    }
    var HTMLBalSpinnerElement: {
        prototype: HTMLBalSpinnerElement;
        new (): HTMLBalSpinnerElement;
    };
    interface HTMLBalTextElement extends Components.BalText, HTMLStencilElement {
    }
    var HTMLBalTextElement: {
        prototype: HTMLBalTextElement;
        new (): HTMLBalTextElement;
    };
    interface HTMLElementTagNameMap {
        "bal-button": HTMLBalButtonElement;
        "bal-card": HTMLBalCardElement;
        "bal-card-actions": HTMLBalCardActionsElement;
        "bal-card-button": HTMLBalCardButtonElement;
        "bal-card-content": HTMLBalCardContentElement;
        "bal-card-heading": HTMLBalCardHeadingElement;
        "bal-card-step": HTMLBalCardStepElement;
        "bal-card-steps": HTMLBalCardStepsElement;
        "bal-card-subtitle": HTMLBalCardSubtitleElement;
        "bal-card-title": HTMLBalCardTitleElement;
        "bal-checkbox": HTMLBalCheckboxElement;
        "bal-dropdown": HTMLBalDropdownElement;
        "bal-field": HTMLBalFieldElement;
        "bal-icon": HTMLBalIconElement;
        "bal-input": HTMLBalInputElement;
        "bal-select": HTMLBalSelectElement;
        "bal-select-option": HTMLBalSelectOptionElement;
        "bal-spinner": HTMLBalSpinnerElement;
        "bal-text": HTMLBalTextElement;
    }
}
declare namespace LocalJSX {
    interface BalButton {
        /**
          * If `true` the bottom corners get rounded
         */
        "bottomRounded"?: boolean;
        /**
          * If `true` the button is dense
         */
        "dense"?: boolean;
        /**
          * If `true` the button is disabled
         */
        "disabled"?: boolean;
        /**
          * If `true` the button has a full width
         */
        "expanded"?: boolean;
        /**
          * Name of the left button icon
         */
        "icon"?: string;
        /**
          * Name of the right button icon
         */
        "iconRight"?: string;
        /**
          * If `true` the button is inverted
         */
        "inverted"?: boolean;
        /**
          * If `true` the button has a active theme
         */
        "isActive"?: boolean;
        /**
          * If `true` the width of the buttons is limited
         */
        "isSquare"?: boolean;
        /**
          * If `true` the button has a light color
         */
        "light"?: boolean;
        /**
          * If `true` the label is hidden and a loading spinner is shown instead.
         */
        "loading"?: boolean;
        /**
          * If `true` the button is outlined
         */
        "outlined"?: boolean;
        /**
          * Size of the button
         */
        "size"?: 'is-small' | '';
        /**
          * The theme type of the button. Given by bulma our css framework.
         */
        "type"?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger' | 'is-link';
    }
    interface BalCard {
        /**
          * If `true` a light blue border is added to the card.
         */
        "border"?: boolean;
        /**
          * If `true` the card loses its shadow.
         */
        "flat"?: boolean;
        /**
          * If `true` the card background color becomes blue.
         */
        "inverted"?: boolean;
        /**
          * If `true` the card loses its border radius.
         */
        "square"?: boolean;
        /**
          * If `true` the card has a limited width on desktop.
         */
        "teaser"?: boolean;
    }
    interface BalCardActions {
        /**
          * If `true` the buttons start form right to left.
         */
        "right"?: boolean;
    }
    interface BalCardButton {
        /**
          * Name of the icon like `edit`.
         */
        "icon"?: string;
    }
    interface BalCardContent {
        /**
          * If `true` the card text color becomes white.
         */
        "inverted"?: boolean;
    }
    interface BalCardHeading {
    }
    interface BalCardStep {
        /**
          * Tell's if the step is active and the content is visible.
         */
        "active"?: boolean;
        /**
          * If `true` the step is disabled.
         */
        "disabled"?: boolean;
        /**
          * If `true` the step is done.
         */
        "done"?: boolean;
        /**
          * If `true` the step is hidden in the steps navigation.
         */
        "hidden"?: boolean;
        /**
          * Label for the step.
         */
        "label"?: string;
        /**
          * This is the key of the step.
         */
        "value"?: string;
    }
    interface BalCardSteps {
        /**
          * Label for back button
         */
        "backLabel"?: string;
        /**
          * If `true` the steps navigation has back button.
         */
        "hasBack"?: boolean;
        /**
          * If `true` the steps navigation is hidden.
         */
        "hidden"?: boolean;
        /**
          * If `true` a the style is ready for a dark background.
         */
        "inverted"?: boolean;
        /**
          * Emitted when the back button is clicked.
         */
        "onBalBackClick"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the changes has finished.
         */
        "onBalChange"?: (event: CustomEvent<BalCardStepOptions>) => void;
        /**
          * Emitted when the step circle is clicked.
         */
        "onBalStepClick"?: (event: CustomEvent<number>) => void;
    }
    interface BalCardSubtitle {
        /**
          * If `true` the card text color becomes white.
         */
        "inverted"?: boolean;
    }
    interface BalCardTitle {
        /**
          * If `true` the card text color becomes white.
         */
        "inverted"?: boolean;
    }
    interface BalCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked"?: boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled"?: boolean;
        /**
          * If `true`, the control works on dark background.
         */
        "inverted"?: boolean;
        /**
          * The label of the control.
         */
        "label"?: string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the toggle loses focus.
         */
        "onBalBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the checked property has changed.
         */
        "onBalChange"?: (event: CustomEvent<boolean>) => void;
        /**
          * Emitted when the toggle has focus.
         */
        "onBalFocus"?: (event: CustomEvent<void>) => void;
        /**
          * The value of the control.
         */
        "value"?: string;
    }
    interface BalDropdown {
        /**
          * If `true` the dropdown content is open.
         */
        "isActive"?: boolean;
        /**
          * Listen when the dropdown opens or closes. Returns the current `isActive` value.
         */
        "onBalChange"?: (event: CustomEvent<boolean>) => void;
        /**
          * Limit the height of the dropdown content. Pass the amount of pixel.
         */
        "scrollable"?: number;
    }
    interface BalField {
        /**
          * If `true` the field loses opacity
         */
        "disabled"?: boolean;
        /**
          * Baloise icon for the left side of the input
         */
        "iconLeft"?: string;
        /**
          * Baloise icon for the right side of the input
         */
        "iconRight"?: string;
        /**
          * If `true` the field can be used on blue background.
         */
        "inverted"?: boolean;
        /**
          * Text of the inputs label
         */
        "label"?: string;
        /**
          * If `true` a loading spinner is visible at the end of the input
         */
        "loading"?: boolean;
        /**
          * If `true` a asterix (*) is added to the label text
         */
        "required"?: boolean;
        /**
          * Validation message text
         */
        "validationMessage"?: string;
    }
    interface BalIcon {
        /**
          * Defines the color of the icon.
         */
        "color"?: 'danger' | 'warning' | 'primary' | 'blue' | 'success' | 'grey' | 'white' | 'black' | 'blue-line' | 'blue-light-line' | '';
        /**
          * If `true` the icon can be positioned ot the left side of another component
         */
        "isLeft"?: boolean;
        /**
          * If `true` the icon can be positioned ot the right side of another component
         */
        "isRight"?: boolean;
        /**
          * The name of the icon without the bal-icon prefix.
         */
        "name"?: string;
        /**
          * If `true` the icon rotates like for a loading spinner
         */
        "rotate"?: boolean;
        /**
          * Defines the size of the icon.
         */
        "size"?: 'small' | 'medium' | 'large' | '';
    }
    interface BalInput {
        "clickable"?: boolean;
        "disabled"?: boolean;
        "inverted"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        "onBalBlur"?: (event: CustomEvent<FocusEvent>) => void;
        "onBalClick"?: (event: CustomEvent<MouseEvent>) => void;
        "onBalFocus"?: (event: CustomEvent<FocusEvent>) => void;
        "onBalInput"?: (event: CustomEvent<string>) => void;
        "onBalKeyDown"?: (event: CustomEvent<KeyboardEvent>) => void;
        "onBalKeyPress"?: (event: CustomEvent<KeyboardEvent>) => void;
        "onBalKeyUp"?: (event: CustomEvent<KeyboardEvent>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "type"?: string;
        /**
          * The value of the control.
         */
        "value"?: string;
    }
    interface BalSelect {
        "disabled"?: boolean;
        "loading"?: boolean;
        "onBalBlur"?: (event: CustomEvent<FocusEvent>) => void;
        "onBalChange"?: (event: CustomEvent<BalOptionValue<any>>) => void;
        "onBalClick"?: (event: CustomEvent<MouseEvent>) => void;
        "onBalFocus"?: (event: CustomEvent<FocusEvent>) => void;
        "onBalInput"?: (event: CustomEvent<string>) => void;
        "onBalKeyDown"?: (event: CustomEvent<KeyboardEvent>) => void;
        "onBalKeyPress"?: (event: CustomEvent<KeyboardEvent>) => void;
        "onBalKeyUp"?: (event: CustomEvent<KeyboardEvent>) => void;
        "options"?: BalOptionValue<any>[];
        "placeholder"?: string;
        "remote"?: boolean;
        "scrollable"?: number;
        "typeahead"?: boolean;
        "value"?: BalOptionValue<any>;
    }
    interface BalSelectOption {
        /**
          * If `true` the option is focused
         */
        "checkbox"?: boolean;
        /**
          * If `true` the option is focused
         */
        "focused"?: boolean;
        "hidden"?: boolean;
        /**
          * Baloise icon as a prefix
         */
        "icon"?: string;
        "onBalOptionSelect"?: (event: CustomEvent<string | boolean | number | any>) => void;
        /**
          * If `true` the option is selected
         */
        "selected"?: boolean;
        /**
          * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
         */
        "value"?: BalOptionValue<any>;
    }
    interface BalSpinner {
        /**
          * If `true` the component can be used on dark background
         */
        "inverted"?: boolean;
        /**
          * If `true` the component is smaller
         */
        "small"?: boolean;
    }
    interface BalText {
    }
    interface IntrinsicElements {
        "bal-button": BalButton;
        "bal-card": BalCard;
        "bal-card-actions": BalCardActions;
        "bal-card-button": BalCardButton;
        "bal-card-content": BalCardContent;
        "bal-card-heading": BalCardHeading;
        "bal-card-step": BalCardStep;
        "bal-card-steps": BalCardSteps;
        "bal-card-subtitle": BalCardSubtitle;
        "bal-card-title": BalCardTitle;
        "bal-checkbox": BalCheckbox;
        "bal-dropdown": BalDropdown;
        "bal-field": BalField;
        "bal-icon": BalIcon;
        "bal-input": BalInput;
        "bal-select": BalSelect;
        "bal-select-option": BalSelectOption;
        "bal-spinner": BalSpinner;
        "bal-text": BalText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bal-button": LocalJSX.BalButton & JSXBase.HTMLAttributes<HTMLBalButtonElement>;
            "bal-card": LocalJSX.BalCard & JSXBase.HTMLAttributes<HTMLBalCardElement>;
            "bal-card-actions": LocalJSX.BalCardActions & JSXBase.HTMLAttributes<HTMLBalCardActionsElement>;
            "bal-card-button": LocalJSX.BalCardButton & JSXBase.HTMLAttributes<HTMLBalCardButtonElement>;
            "bal-card-content": LocalJSX.BalCardContent & JSXBase.HTMLAttributes<HTMLBalCardContentElement>;
            "bal-card-heading": LocalJSX.BalCardHeading & JSXBase.HTMLAttributes<HTMLBalCardHeadingElement>;
            "bal-card-step": LocalJSX.BalCardStep & JSXBase.HTMLAttributes<HTMLBalCardStepElement>;
            "bal-card-steps": LocalJSX.BalCardSteps & JSXBase.HTMLAttributes<HTMLBalCardStepsElement>;
            "bal-card-subtitle": LocalJSX.BalCardSubtitle & JSXBase.HTMLAttributes<HTMLBalCardSubtitleElement>;
            "bal-card-title": LocalJSX.BalCardTitle & JSXBase.HTMLAttributes<HTMLBalCardTitleElement>;
            "bal-checkbox": LocalJSX.BalCheckbox & JSXBase.HTMLAttributes<HTMLBalCheckboxElement>;
            "bal-dropdown": LocalJSX.BalDropdown & JSXBase.HTMLAttributes<HTMLBalDropdownElement>;
            "bal-field": LocalJSX.BalField & JSXBase.HTMLAttributes<HTMLBalFieldElement>;
            "bal-icon": LocalJSX.BalIcon & JSXBase.HTMLAttributes<HTMLBalIconElement>;
            "bal-input": LocalJSX.BalInput & JSXBase.HTMLAttributes<HTMLBalInputElement>;
            "bal-select": LocalJSX.BalSelect & JSXBase.HTMLAttributes<HTMLBalSelectElement>;
            "bal-select-option": LocalJSX.BalSelectOption & JSXBase.HTMLAttributes<HTMLBalSelectOptionElement>;
            "bal-spinner": LocalJSX.BalSpinner & JSXBase.HTMLAttributes<HTMLBalSpinnerElement>;
            "bal-text": LocalJSX.BalText & JSXBase.HTMLAttributes<HTMLBalTextElement>;
        }
    }
}
