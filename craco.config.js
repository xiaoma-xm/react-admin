const path = require('path');

module.exports = {
    webpack: {
        // 配置src路径别名
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
}