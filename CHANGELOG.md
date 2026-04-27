# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-04-27

### Changed
- CI: typecheck the example app via `tsconfig.example.json` so generic-typed `Dropdown<T>` regressions surface before publish.
- Example apps tighten `useState<T | null>` typing and explicitly cast `onChange` payloads to fix inference against the new generic `(value: T | T[] | null) => void` signature.

## [1.0.0] - 2025-09-05

### Added
- Initial release
- Universal dropdown component that works on iOS, Android, and Web
- TypeScript support with full generics
- Single and multi-select modes
- Search/filter functionality
- Custom item rendering
- Zero dependencies
- 7KB bundle size
- Native web compatibility (no workarounds needed)
- Comprehensive examples and documentation

### Technical Details
- 200 lines of maintainable code
- No external dependencies
- Works with React Native 0.60+
- Works with React Native Web
- TypeScript native implementation