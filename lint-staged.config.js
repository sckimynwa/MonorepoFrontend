/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const escape = require('shell-quote').quote;

module.exports = {
  '**/*.{js,jsx,ts,tsx}': filenames => {
    const escapedFileNames = filenames
      .map(filename => `"${escape([filename])}"`)
      .join(' ');

    return [
      `prettier --write ${escapedFileNames}`,
      `eslint --fix --max-warnings=0 ${escapedFileNames}`,
    ];
  },

  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': filenames => {
    const escapedFileNames = filenames
      .map(filename => `"${escape([filename])}"`)
      .join(' ');

    return [`prettier --write ${escapedFileNames}`];
  },
};
