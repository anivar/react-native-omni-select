# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2026-08-09

### Fixed
- The panel is now anchored horizontally to its trigger — `handleOpen` measured the x position and discarded it, so the panel always opened flush against the left edge of the screen.
- The panel is clamped to the visible window and flips above the trigger when there isn't room below, instead of rendering partly or wholly off-screen for triggers near the bottom.
- A failed measurement no longer leaves the panel at width 0 (invisible, with the modal still swallowing taps) — it renders inset from the window edges instead.
- Multi-select now compares values by a derived key instead of `===`. Without `valueField`, a `value` prop rebuilt from state or fetched over the wire never matched the object in `data`, so deselecting did nothing and re-selecting appended a duplicate.
- An empty string, `0`, or `false` label no longer renders as `"[object Object]"`.
- Removed `src/types.ts` — unused, and its declarations contradicted the live ones in `Dropdown.tsx`.

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