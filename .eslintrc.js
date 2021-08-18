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
        'import/prefer-default-export': 'off',
        'implicit-arrow-linebreak': 'off',
        'object-curly-newline': 'off',
        'class-methods-use-this': 'off'
      },
    },
  ],
};
