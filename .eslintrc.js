module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.*?.json'],
        createDefaultProgram: true,
      },
      extends: ['plugin:@angular-eslint/recommended', 'airbnb-typescript/base'],
      rules: {},
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.**.ts', '*.ts'],
      extends: [
        'plugin:@angular-eslint/template/process-inline-templates',
        'airbnb-typescript/base',
      ],
      rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 'off',
        'object-curly-newline': 'off',
        'no-constant-condition': 'off',
        'no-alert': 'off',
        'class-methods-use-this': 'off',
        'implicit-arrow-linebreak': 'off',
        'linebreak-style': 'off',
        'no-console': 'off',
        '@typescript-eslint/comma-dangle': 'off',
      },
    },
  ],
};
