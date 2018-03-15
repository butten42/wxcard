module.exports = {
    root: true,
    globals: {
        vue: true,
        wx: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.wpy files
    plugins: [
        'html'
    ],
    settings: {
        'html/html-extensions': ['.html', '.wpy', '.vue']
    },
    // add your custom rules here
    'rules': {
        'arrow-parens': 0,// 要求箭头函数的参数使用圆括号
        'generator-star-spacing': 0,// 强制generator函数中 * 号周围使用一致的空格
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,// 禁用 debugger
        'space-before-function-paren': 0,
        "no-tabs": 0, //禁一些风格指南不允许使用 tab 字符，包括在注释内？
        "semi": ["warn", "never"],
        "no-alert": 'off',
        "no-console": 'off',
        "global-require": "off",
        "import/no-dynamic-require": 0,

        /*代码样式 @_LVPlum*/
        "indent": ["error", 4],//缩进风格
        "no-mixed-spaces-and-tabs": [2, false],//禁止空格，tab混用
        "quotes": [1, "single"], //引号类型
        // "quote-props": [2, "always"], //对象属性名是否强制双引号
        "space-after-keywords": [0, "always"],//关键字后面是否要空一格
    }
}
