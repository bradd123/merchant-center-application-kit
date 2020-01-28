# CustomFormModalPage

## Usage

```js
import CustomFormModalPageExample from './custom-form-modal-page.example';
```

## Description

Custom Form Modal pages are controlled components used to render a page with a form or something that requires user input, similar to `InfoModalPage` but semantically with a different role. The header includes an area for control buttons, which can be customized at will. The component exposes three default buttons which can be useful for most use cases.

## Usage

```jsx
import { CustomFormModalPage } from '@commercetools-frontend/application-components';

<CustomFormModalPage
  title="Lorem ipsum"
  isOpen={true}
  onClose={handleClose}
  subtitle={<Text.Body>{'Lorem ipsum ...'}</Text.Body>}
  topBarCurrentPathLabel="Lorem ipsum"
  topBarPreviousPathLabel="Back"
  formControls={
    <React.Fragment>
      <CustomFormModalPage.FormSecondaryButton onClick={handleCancel} />
      <CustomFormModalPage.FormPrimaryButton onClick={handleConfirm} />
      <CustomFormModalPage.FormDeleteButton onClick={handleDelete} />
    </React.Fragment>
  }
>
  <TextField {...textFieldFormProps} />
</CustomFormModalPage>;
```

## Properties

| Props                     | Type               | Required | Default                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | ------------------ | :------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`                  | `boolean`          |    ✅    | -                        | Indicates whether the page is open or closed. The parent component needs to manage this state.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `title`                   | `string`           |    ✅    | -                        | The title of the page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `subtitle`                | `node` or `string` |    -     | -                        | The subtitle of the page, usually a React component. If a string is passed, it's rendered as a paragraph.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `onClose`                 | `function`         |    -     | -                        | Called when the page closes (click on overlay, click on close button, press ESC). If the function is not provided, the page cannot be closed by any of the listed options.                                                                                                                                                                                                                                                                                                                                          |
| `level`                   | `number`           |          | `1`                      | The level indicates the stack position of the modal page, progressivelly increasing the `z-index` position (combined with the `baseZIndex`) as well as the spacing from the left side of the page.                                                                                                                                                                                                                                                                                                                  |
| `baseZIndex`              | `number`           |          | `1000`                   | The base `z-index` value to be applied to the overlay container, incremented by `1` according to the `level` prop.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `zIndex`                  | `number`           |          | -                        | The `z-index` value to be applied to the overlay container. This value overrides the normal `z-index` value calculated from the `baseZIndex` and `level` props. If you provide this value, you would need to take care of providing a proper `z-index` based on the stacked level.                                                                                                                                                                                                                                  |
| `topBarCurrentPathLabel`  | `string`           |          | The `title` prop         | The label to appear as the current path of the top bar of the modal                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `topBarPreviousPathLabel` | `string`           |          | `"Go Back"` (translated) | The label to appear as the previous path of the top bar of the modal                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `children`                | `node`             |    ✅    | -                        | Content rendered within the page. If the content is long in height (depending on the screen size) a scrollbar will appear.                                                                                                                                                                                                                                                                                                                                                                                          |
| `formControls`            | `node`             |    -     | -                        | Pass a React.node with form controls. You can use the pre-made form buttons exposed by this component or you can use your own.                                                                                                                                                                                                                                                                                                                                                                                      |
| `getParentSelector`       | `function`         |    -     | -                        | The function should return an HTML element that will be used as the parent container to hold the modal DOM tree. If no function is provided, it's expected that an HTML element with the `id="parent-container"` is present in the DOM. In `NODE_ENV=test` environment, the default HTML element is `body`.                                                                                                                                                                                                         |
| `hideControls`            | `bool`             |    -     | `false`                  | If truthy, hides the form controls.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `shouldDelayOnClose`      | `bool`             |    -     | `true`                   | Sets whether the ModalPage should delay calling its `onClose` function to allow the closing animation time to finish. This can be turned off if the developer is controlling the ModalPage only through the `isOpen` prop, and not abruptly mounting/unmounting it or one of its parent elements. You might also want to turn this off if you need to display a Prompt (e.g. to save changes) on the ModalPage before navigating out of it, as this option makes the Modal close itself before `onClose` is called. |

## Static properties

### Form Control Buttons

Pre-made form control buttons which can be useful for the most common use cases: Confirm, Cancel, and Delete

```js
CustomFormModalPage.FormPrimaryButton = FormPrimaryButton;
CustomFormModalPage.FormSecondaryButton = FormSecondaryButton;
CustomFormModalPage.FormDeleteButton = FormDeleteButton;
```

### `CustomFormModalPage.Intl`

Exposes common intl messages to be used for the secondary/primary buttons

```js
CustomFormModalPage.Intl.cancel;
CustomFormModalPage.Intl.confirm;
// ...
```