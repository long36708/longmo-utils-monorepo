import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/coverage/**', 'scripts/**', "eslint.config.js"]
    },
    js.configs.recommended,
    {
        files: ['packages/common/src/**/*.ts', 'packages/node/src/**/*.ts'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            'no-console': 'off',
            'no-debugger': 'warn',
            'no-undef': 'off'
        }
    },
    {
        files: ['packages/browser/src/**/*.ts'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                HTMLElementTagNameMap: 'readonly',
                ScrollIntoViewOptions: 'readonly',
                RequestInit: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            'no-console': 'off',
            'no-debugger': 'warn',
            'no-undef': 'off'
        }
    },
    {
        files: ['packages/node/src/**/*.ts'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...globals.node,
                NodeJS: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            'no-console': 'off',
            'no-debugger': 'warn',
            'no-undef': 'off'
        }
    },
    {
        files: ['packages/**/test/**/*.ts'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.vitest,
                HTMLElementTagNameMap: 'readonly',
                ScrollIntoViewOptions: 'readonly',
                RequestInit: 'readonly',
                NodeJS: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'no-undef': 'off'
        }
    }
]
