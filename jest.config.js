export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.tsx',
    'react-markdown': '<rootDir>/src/__mocks__/react-markdown.tsx',
    'rehype-raw': '<rootDir>/src/__mocks__/rehype-raw.ts',
    'rehype-sanitize': '<rootDir>/src/__mocks__/rehype-sanitize.ts',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!rehype-raw|rehype-sanitize|remark-breaks|remark-gfm|remark-toc)',
  ],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};

