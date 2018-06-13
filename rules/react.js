module.exports = {
	rules: {
		"react/jsx-boolean-value": "warn",
		"react/jsx-closing-bracket-location": "warn",
		"react/jsx-curly-spacing": "warn",
		"react/jsx-equals-spacing": ["warn", "never"],
		"react/jsx-first-prop-new-line": ["warn", "multiline"],
		"react/jsx-handler-names": "warn",
		"react/jsx-indent": ["warn", "tab"],
		"react/jsx-indent-props": ["warn", "tab"],
		"react/jsx-key": "warn",
		"react/jsx-max-props-per-line": "warn",
		"react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
		"react/jsx-no-comment-textnodes": "warn",
		"react/jsx-no-duplicate-props": ["warn", { ignoreCase: true }],
		"react/jsx-no-undef": "warn",
		"react/jsx-pascal-case": [
			"warn",
			{
				allowAllCaps: true,
				ignore: []
			}
		],
		"react/jsx-sort-props": "warn",
		"react/jsx-tag-spacing": "warn",
		"react/jsx-uses-react": "warn",
		"react/jsx-uses-vars": "warn",
		"react/jsx-wrap-multilines": "warn",
		"react/no-deprecated": "warn",
		"react/no-did-mount-set-state": "warn",
		"react/no-did-update-set-state": "warn",
		"react/no-direct-mutation-state": "warn",
		"react/no-is-mounted": "warn",
		"react/no-unused-prop-types": "warn",
		"react/prefer-es6-class": "warn",
		"react/prefer-stateless-function": "warn",
		"react/prop-types": "warn",
		"react/react-in-jsx-scope": "warn",
		"react/require-render-return": "warn",
		"react/self-closing-comp": "warn",
		"react/sort-comp": "warn",
		"react/sort-prop-types": "warn",
		"react/style-prop-object": "warn",
		"react/void-dom-elements-no-children": "warn"
	}
};
