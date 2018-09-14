module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};