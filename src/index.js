modules.exports = {
    "extends": [
        "react-app",
        "react-app/jest",
    ],
    "plugins": ["unused-imports"],
    "rules": {
        "semi": ["warn", "always"],
        "semi-spacing": ["warn", {"before": false, "after": false}],
        "semi-style": ["warn", "last"],
        "quotes": ["warn", "single", {"avoidEscape": true}],
        "quote-props": ["warn", "consistent-as-needed"],
        "jsx-quotes": ["warn", "prefer-double"],
        "array-bracket-newline": ["warn", "consistent"],
        "array-bracket-spacing": ["warn", "never"],
        "array-element-newline": ["warn", "consistent"],
        "block-spacing": "warn",
        "brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
        "comma-dangle": [
            "warn", {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline",
            },
        ],
        "comma-spacing": ["warn", {"before": false, "after": true}],
        "comma-style": ["warn", "last"],
        "computed-property-spacing": ["warn", "never"],
        "eol-last": ["warn", "always"],
        "func-call-spacing": ["warn", "never"],
        "function-call-argument-newline": ["warn", "consistent"],
        "function-paren-newline": ["warn", "consistent"],
        "func-style": ["warn", "declaration", {"allowArrowFunctions": true}],
        "implicit-arrow-linebreak": ["warn", "beside"],
        "unused-imports/no-unused-imports": "warn",
        "no-unused-vars": [
            "warn", {
                "vars": "all",
                "varsIgnorePattern": "[_]",
                "args": "none",
                "caughtErrors": "none",
            },
        ],
        "indent": ["warn", 4, {"SwitchCase": 1}],
        "linebreak-style": ["warn", "unix"],
        "no-multiple-empty-lines": ["warn", {"max": 2, "maxBOF": 0, "maxEOF": 1}],
        "padding-line-between-statements": [
            "warn",
            {"blankLine": "always", "prev": "import", "next": "*"},
            {"blankLine": "never", "prev": "import", "next": "import"},
            {"blankLine": "always", "prev": "*", "next": ["block", "block-like"]},
            {"blankLine": "always", "prev": "*", "next": "export"},
        ],
    },
    "overrides": [
        {
            "files": ["**/*.ts?(x)"],
            "rules": {
                "unused-imports/no-unused-imports-ts": "warn",
                "@typescript-eslint/no-unused-vars": [
                    "warn", {
                        "vars": "all",
                        "varsIgnorePattern": "[_]",
                        "args": "none",
                        "caughtErrors": "none",
                    },
                ],
            },
        },
    ],
};