# Card

The `bal-card` component is a versatile component that can be combined easily wiht other componets.

## Usage

```html
<bal-card>
  <bal-card-title>BaloiseCombi</bal-card-title>
  <bal-card-subtitle>Police number 70/2.937.458</bal-card-subtitle>

  <bal-card-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </bal-card-content>

  <bal-card-actions>
    <bal-button>Action</bal-button>
  </bal-card-actions>
</bal-card>
```

## Inverted style

```html
<bal-card inverted>
  <bal-card-title inverted>BaloiseCombi</bal-card-title>
  <bal-card-subtitle inverted>Police number 70/2.937.458</bal-card-subtitle>

  <bal-card-content inverted>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </bal-card-content>

  <bal-card-actions>
    <bal-button inverted>Action</bal-button>
  </bal-card-actions>
</bal-card>
```

### With accordion

The combination with the `bal-accordion` is useful to hide details.

```html
<bal-card>
  <bal-card-title>BaloiseCombi</bal-card-title>
  <bal-card-subtitle>Police number 70/2.937.458</bal-card-subtitle>

  <bal-accordion>
    <p class="is-padded">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </bal-accordion>
</bal-card>
```

### With list

The position the action buttons to the right side just add the attribute `right` to the component `bal-card-actions`.

```html
<bal-card>
  <bal-card-title>News</bal-card-title>

  <bal-card-content>
    <bal-list border>
      <bal-list-item>
        <bal-list-item-content>
          <bal-list-item-title>News A</bal-list-item-title>
        </bal-list-item-content>
        <bal-list-item-icon right>
          <bal-icon size="medium" name="nav-go-large"></bal-icon>
        </bal-list-item-icon>
      </bal-list-item>
      <bal-list-item>
        <bal-list-item-content>
          <bal-list-item-title>News B</bal-list-item-title>
        </bal-list-item-content>
        <bal-list-item-icon right>
          <bal-icon size="medium" name="nav-go-large"></bal-icon>
        </bal-list-item-icon>
      </bal-list-item>
    </bal-list>
  </bal-card-content>

  <bal-card-actions right>
    <bal-button type="is-link">More</bal-button>
  </bal-card-actions>
</bal-card>
```

### With avatar

```html
<bal-card>
  <bal-card-title>Natasha Romanoff</bal-card-title>
  <bal-card-subtitle>Black Widow</bal-card-subtitle>

  <bal-card-content>
    <div class="columns">
      <div class="column">
        <figure class="image is-96x96">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
      </div>
      <div class="column">
        <bal-list disabled>
          <bal-list-item>
            <bal-list-item-icon>
              <bal-icon size="medium" name="call"></bal-icon>
            </bal-list-item-icon>
            <bal-list-item-content>
              <bal-list-item-title>
                <a href="tel:+41 789 48 11">+41 789 48 11</a>
              </bal-list-item-title>
            </bal-list-item-content>
          </bal-list-item>
          <bal-list-item>
            <bal-list-item-icon>
              <bal-icon size="medium" name="message"></bal-icon>
            </bal-list-item-icon>
            <bal-list-item-content>
              <bal-list-item-title>
                <a href="mailto:natasha.romanoff@gmail.com">
                  natasha.romanoff@gmail.com
                </a>
              </bal-list-item-title>
            </bal-list-item-content>
          </bal-list-item>
        </bal-list>
      </div>
    </div>
  </bal-card-content>
</bal-card>
```

### A Summary card

```html
<bal-card border flat>
  <bal-card-heading>Insured vehicle</bal-card-heading>
  <bal-card-title>Cupra Ateca</bal-card-title>
  <bal-card-subtitle>Running time: 21.07.2019 - 21.07.2021</bal-card-subtitle>

  <bal-card-button icon="edit">Edit</bal-card-button>
</bal-card>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                         | Type      | Default |
| ---------- | ---------- | --------------------------------------------------- | --------- | ------- |
| `border`   | `border`   | If `true` a light blue border is added to the card. | `boolean` | `false` |
| `flat`     | `flat`     | If `true` the card loses its shadow.                | `boolean` | `false` |
| `inverted` | `inverted` | If `true` the card background color becomes blue.   | `boolean` | `false` |
| `square`   | `square`   | If `true` the card loses its border radius.         | `boolean` | `false` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
