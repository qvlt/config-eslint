/**
 * Monorepo TypeScript resolver configuration for @qvlt/config-eslint
 *
 * This helper provides a pre-configured TypeScript resolver for common monorepo structures.
 * Use it to override the default resolver settings in your eslint.config.js
 */

export const monorepoResolver = {
  settings: {
    'import/resolver': {
      typescript: {
        project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json', 'registry/*/tsconfig.json'],
      },
    },
  },
};

/**
 * Example usage:
 *
 * import config from '@qvlt/config-eslint';
 * import { monorepoResolver } from '@qvlt/config-eslint/monorepo.js';
 *
 * export default [
 *   ...config,
 *   monorepoResolver,
 * ];
 */
