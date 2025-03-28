/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

interface CustomMatchers<R = unknown> {
  toBeInTheDocument(): R;
  toHaveTextContent(text: string): R;
}

declare module 'vitest' {
  interface Assertion<T> extends CustomMatchers<T> {
    _customMatchers: never;
  }
  interface AsymmetricMatchersContaining<T> extends CustomMatchers<T> {
    _customMatchers: never;
  }
}
