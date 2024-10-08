const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/src/test/jest.setup.ts', '<rootDir>/src/test/utils.tsx'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: [
        '<rootDir>/src/components/react-components-library'
      ],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
        './src/i18n/': {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
        './src/components/': {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
    collectCoverageFrom: [
        '**/*.{ts,tsx}', // Include all TypeScript files
        '!**/node_modules/**', // Exclude node_modules
        '!**/.next/**', // Exclude .next
        '!**/react-components-library/**', // Exclude .react-components-library
        '!**/index.{ts,tsx}', // Exclude index.ts and index.tsx files
        '!**/layout.{ts,tsx}', // Exclude layout.ts and layout.tsx files
        '!**/page.{ts,tsx}', // Exclude page.ts and page.tsx files
        '!**/routes-config.tsx', // Exclude routes-config.tsx files
        '!**/i18n-config.ts', // Exclude i18n-settings.tsx files
        '!**/*.d.ts', // Exclude TypeScript definition files
        // !Remove this file from testing because is not relevant in IlovePDF projects and this component is only and example for to start develop.
        '!**/LanguageChange.tsx', 
        '!**/Container.tsx',
        '!**/Button.tsx', 
    ],
};

module.exports = createJestConfig(customJestConfig);
