# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### New

- Initial release of @qvlt/config-eslint
- Base TypeScript and JavaScript configurations
- React-specific configuration
- Monorepo support with TypeScript resolver
- Type-checked preset for stricter type-aware rules
- Comprehensive documentation and examples

### Changed

- N/A

### Deprecated

- N/A

### Removed

- N/A

### Fixed

- N/A

### Security

- N/A

---

## [0.0.2] - 2024-09-05

### Added

- Initial release with comprehensive ESLint configurations
- Support for TypeScript, React, and JavaScript projects
- Monorepo TypeScript resolver configuration
- Type-checked preset for enhanced type safety
- Example configurations and documentation

### Features

- **Base Configuration**: TypeScript + JavaScript linting
- **React Configuration**: Complete React, React Hooks, and JSX accessibility rules
- **TypeScript Configuration**: Enhanced TypeScript-specific rules
- **Monorepo Support**: TypeScript resolver for monorepo projects
- **Type-Checked Preset**: Stricter type-aware rules for thorough checking
- **Import Organization**: Automatic import sorting and organization
- **Prettier Integration**: Compatible with Prettier formatting
- **File-Specific Rules**: Special rules for test files, config files, and source files

### Dependencies

- `@eslint/js`: ^9.34.0
- `eslint`: ^9.34.0
- `eslint-config-prettier`: ^10.1.8
- `eslint-import-resolver-typescript`: ^4.4.4
- `eslint-plugin-import`: ^2.32.0
- `eslint-plugin-jsx-a11y`: ^6.10.2
- `eslint-plugin-react`: ^7.37.5
- `eslint-plugin-react-hooks`: ^5.2.0
- `eslint-plugin-react-refresh`: ^0.4.20
- `typescript-eslint`: ^8.41.0
