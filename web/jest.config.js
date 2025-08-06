export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.tsx',
    'react-markdown': '<rootDir>/src/__mocks__/react-markdown.tsx',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};