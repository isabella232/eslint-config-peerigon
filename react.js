module.exports = {
    "parser": "espree",
    "env": {
        "es6": true,
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    "rules": {
        "no-nested-ternary": 0, // nested ternaries can increase the readability of JSX components
        "react/display-name": 2,
        "react/no-danger": 2,
        "react/no-deprecated": 2,
        "react/no-did-mount-set-state": [2, "disallow-in-func"],
        "react/no-did-update-set-state": [2, "disallow-in-func"],
        "react/no-direct-mutation-state": 2,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": 0,
        "react/no-set-state": 2,
        "react/no-string-refs": 2,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": 2,
        "react/prefer-stateless-function": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/require-render-return": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": 0,
        "react/sort-prop-types": 0,
        "react/wrap-multilines": 2,
        "react/no-render-return-value": 2,
        "react/no-unescaped-entities": 2,
        "react/no-children-prop": 2,
        "react/style-prop-object": 0,
        "react/no-unused-prop-types": 2,
        "react/no-danger-with-children": 2,
        "react/forbid-component-props": 0,
        "react/no-find-dom-node": 2,

        "react/jsx-boolean-value": 0,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-curly-spacing": [2, "never"],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-handler-names": [2, {
          "eventHandlerPrefix": "handle",
          "eventHandlerPropPrefix": "on"
        }],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-key": 2,
        "react/jsx-max-props-per-line": [2, {
            "maximum": 4,
        }],
        "react/jsx-no-bind": [2, {
            "ignoreRefs": false,
            "allowArrowFunctions": false,
            "allowBind": false,
        }],
        "react/jsx-no-duplicate-props": [2, {
            "ignoreCase": false,
        }],
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-sort-props": 0,
        "react/jsx-space-before-closing": [2, "always"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-no-target-blank": 2,
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-filename-extension": 2,
    }
};
