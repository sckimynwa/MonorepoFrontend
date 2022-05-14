/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-restricted-imports */

/// <reference types="cypress" />

import cucumber from 'cypress-cucumber-preprocessor';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
import { config } from 'dotenv';
import { defaultOptions } from '@cypress/browserify-preprocessor';
import { sendMessage } from './helpers';

config();

const plugin: Cypress.PluginConfig = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  addMatchImageSnapshotPlugin(on, config);

  const options = {
    ...defaultOptions,
    typescript: require.resolve('typescript'),
  };

  on('file:preprocessor', cucumber(options));

  on('after:run', (results) => sendMessage(results));

  return config;
};

export default plugin;
