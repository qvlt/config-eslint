# @qvlt/config-eslint

ESLint configuration for Qvlt projects.

## Installation

```bash
pnpm add -D @qvlt/config-eslint
```

**Note**: `eslint` and all required plugins are included as dependencies, so you don't need to install them separately.

## Usage

### Base Configuration (TypeScript + JavaScript)

```javascript
// eslint.config.js
import config from '@qvlt/config-eslint';

export default config;
```

### React Configuration

```javascript
// eslint.config.js
import reactConfig from '@qvlt/config-eslint/react.js';

export default reactConfig;
```

### TypeScript Configuration

```javascript
// eslint.config.js
import typescriptConfig from '@qvlt/config-eslint/typescript.js';

export default typescriptConfig;
```

### Monorepo Helper

For monorepos with multiple TypeScript configurations:

```javascript
// eslint.config.js
import config from '@qvlt/config-eslint';
import { monorepoResolver } from '@qvlt/config-eslint/monorepo.js';

export default [...config, monorepoResolver];
```

### Type-Checked Preset

For projects that need stricter type-aware rules (slower but more thorough):

```javascript
// eslint.config.js
import config from '@qvlt/config-eslint/typechecked.js';
import { monorepoResolver } from '@qvlt/config-eslint/monorepo.js';

export default [...config, monorepoResolver];
```

**Note**: The type-checked preset uses `tseslint.configs.recommendedTypeChecked` and requires a `tsconfig.json` file. It provides more thorough type checking but may be slower than the standard preset.

### Package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

**Note**: This configuration uses `eslint-config-prettier` to disable ESLint rules that conflict with Prettier. Run Prettier separately via CLI for formatting.

### TypeScript Resolver Configuration

The configuration uses `eslint-import-resolver-typescript` with `alwaysTryTypes: true` by default. For monorepos or projects with custom TypeScript configurations, you can override the resolver settings:

### React Restricted Imports

The React configuration includes a `no-restricted-imports` rule that enforces using `@/` prefix for internal imports. If your project doesn't use this alias, you can disable this rule:

```javascript
// eslint.config.js
import reactConfig from '@qvlt/config-eslint/react.js';

export default [
  ...reactConfig,
  {
    rules: {
      'no-restricted-imports': 'off',
    },
  },
];
```

```javascript
// eslint.config.js
import config from '@qvlt/config-eslint';

export default [
  ...config,
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
        },
      },
    },
  },
];
```

### Examples

See the `example/` directory for complete working examples:

- `eslint.config.js` - Base configuration
- `react-eslint.config.js` - React configuration
- `typescript-eslint.config.js` - TypeScript configuration
- `package.json` - Example package.json with scripts

## Features

- **TypeScript Support**: Full TypeScript linting with recommended rules
- **React Support**: Complete React, React Hooks, and JSX accessibility rules
- **Import Organization**: Automatic import sorting and organization
- **Prettier Integration**: Uses eslint-config-prettier to disable conflicting rules (run Prettier separately)
- **Test Files**: Special rules for test and spec files
- **Config Files**: Special rules for configuration files
- **Source Files**: Enhanced rules for source code files

## Rules Included

### Import Rules

- Import ordering and organization
- No duplicate imports
- No relative package imports
- No self-imports
- No useless path segments

### TypeScript Rules

- No unused variables (with underscore prefix exception)
- No explicit `any` (warning)
- No `var` requires
- No non-null assertions (warning)
- Ban TS comments (warning)

### React Rules (in React config)

- JSX key requirements
- No duplicate props
- No undefined JSX elements
- React Hooks rules
- React Refresh rules
- Accessibility rules (jsx-a11y)

### General Rules

- No console statements (warning)
- No debugger statements (error)
- No alert statements (warning)
- Prefer const over let
- No unused expressions

## File-Specific Rules

### Test Files

- Console statements allowed
- `any` types allowed

### Config Files

- Console statements allowed
- `var` requires allowed

### Source Files

- Enhanced import dependency checking
- Import cycle warnings
- Extension enforcement
- Restricted import patterns (in React config - requires @ alias setup)

## Dependencies

This package includes all necessary ESLint plugins and configurations as dependencies:

- `@eslint/js`
- `eslint-config-prettier`
- `eslint-import-resolver-typescript`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y` (React config)
- `eslint-plugin-react` (React config)
- `eslint-plugin-react-hooks` (React config)
- `eslint-plugin-react-refresh` (React config)
- `typescript-eslint`

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/qvlt/config-eslint.git
cd config-eslint

# Install dependencies
pnpm install

# Run linting on example
pnpm --filter example lint
```

### Testing

The package includes an example project in the `example/` directory that demonstrates all configurations. Run the example to test changes:

```bash
pnpm --filter example lint
pnpm --filter example type-check
```

### Releasing

This package uses **tag-based publishing** with GitHub Actions for automated releases. See [RELEASING.md](./RELEASING.md) for detailed instructions.

Quick release commands:

```bash
# Patch version (0.0.2 -> 0.0.3)
pnpm run version:patch

# Minor version (0.0.2 -> 0.1.0)
pnpm run version:minor

# Major version (0.0.2 -> 1.0.0)
pnpm run version:major
```

The GitHub Actions workflow will automatically:

- Update package.json version
- Run tests and linting
- Publish to npm as public package
- Create GitHub release with changelog

## License

MIT
