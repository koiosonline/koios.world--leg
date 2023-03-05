import type { StorybookConfig } from '@storybook/core-common';

export const rootMain: StorybookConfig = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)", "../**/*.stories.mdx"],
  addons: ['@storybook/addon-essentials'],
};
