
module.exports = {
    extends: [
        //'eslint:recommended',
        //'plugin:@typescript-eslint/recommended',
        //'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
}
