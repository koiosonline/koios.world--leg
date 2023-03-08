import { RJSFSchema, UiSchema } from '@rjsf/utils';

export const schema: RJSFSchema = {
  title: 'Search',
  type: 'string'
};

export const uiSchema = (placeholderText: string): UiSchema => ({
  'ui:classNames': 'w-full',
  'ui:options': {
    label: false
  },
  'ui:placeholder': placeholderText,
  'ui:submitButtonOptions': {
    norender: true
  }
});
