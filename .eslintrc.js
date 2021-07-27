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
      rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.component.ts'],
      extends: [
        'plugin:@angular-eslint/template/process-inline-templates',
        'airbnb-typescript/base',
      ],
      rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
