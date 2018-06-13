module.exports = {
	extends: ["./rules/jsx-a11y", "./rules/react"].map(require.resolve),
	plugins: ["jsx-a11y", "react"],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			generators: true,
			experimentalObjectRestSpread: true
		}
	},
	rules: {
		// http://eslint.org/docs/rules/
		"array-callback-return": "warn",
		camelcase: "warn",
		curly: "warn",
		"default-case": ["error", { commentPattern: "^no default$" }],
		"dot-location": ["warn", "property"],
		"eol-last": "warn",
		eqeqeq: ["error", "always"],
		indent: ["error", "tab", { SwitchCase: 1 }],
		"guard-for-in": "warn",
		"keyword-spacing": "warn",
		"new-parens": "warn",
		"no-array-constructor": "off",
		"no-caller": "warn",
		"no-cond-assign": ["warn", "always"],
		"no-const-assign": "warn",
		"no-control-regex": "warn",
		"no-delete-var": "warn",
		"no-dupe-args": "warn",
		"no-dupe-class-members": "warn",
		"no-dupe-keys": "warn",
		"no-duplicate-case": "warn",
		"no-empty-character-class": "warn",
		"no-empty-pattern": "warn",
		"no-eval": "warn",
		"no-ex-assign": "warn",
		"no-extend-native": "warn",
		"no-extra-bind": "warn",
		"no-extra-label": "warn",
		"no-fallthrough": "warn",
		"no-func-assign": "warn",
		"no-global-assign": "warn",
		"no-implied-eval": "warn",
		"no-invalid-regexp": "warn",
		"no-iterator": "warn",
		"no-label-var": "warn",
		"no-labels": ["warn", { allowLoop: false, allowSwitch: false }],
		"no-lone-blocks": "warn",
		"no-loop-func": "warn",
		"no-mixed-operators": [
			"warn",
			{
				groups: [
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="],
					["&&", "||"],
					["in", "instanceof"]
				],
				allowSamePrecedence: false
			}
		],
		"no-multi-str": "warn",
		"no-new-func": "off",
		"no-new-object": "off",
		"no-new-symbol": "off",
		"no-new-wrappers": "off",
		"no-obj-calls": "warn",
		"no-octal": "warn",
		"no-octal-escape": "warn",
		"no-redeclare": "error",
		"no-regex-spaces": "warn",
		"no-restricted-syntax": ["warn", "LabeledStatement", "WithStatement"],
		"no-script-url": "warn",
		"no-self-assign": "warn",
		"no-self-compare": "warn",
		"no-sequences": "warn",
		"no-shadow-restricted-names": "warn",
		"no-sparse-arrays": "warn",
		"no-template-curly-in-string": "warn",
		"no-this-before-super": "warn",
		"no-throw-literal": "warn",
		"no-undef": "error",
		"no-unexpected-multiline": "warn",
		"no-unreachable": "error",
		"no-unsafe-negation": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-vars": ["error", { vars: "local", args: "none" }],
		"no-use-before-define": ["warn", "nofunc"],
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": [
			"warn",
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false
			}
		],
		"no-with": "warn",
		"no-whitespace-before-property": "warn",
		"object-curly-spacing": ["warn", "always"],
		"operator-assignment": ["warn", "always"],
		radix: "warn",
		"require-yield": "warn",
		"rest-spread-spacing": ["warn", "never"],
		semi: "error",
		strict: ["warn", "never"],
		"unicode-bom": ["warn", "never"],
		"use-isnan": "warn",
		"valid-typeof": "warn"
	}
};