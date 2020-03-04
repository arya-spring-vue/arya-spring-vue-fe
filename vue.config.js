const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    // 配置alias
    config.resolve.alias.set("@screenshot", resolve("screenshot"));
    // 配置worker-loader
    config.module
      .rule("web worker")
      .test(/\.worker\.js$/)
      .use("worker-loader")
      .loader("worker-loader")
      .tap(() => {
        // 这一行配置非常重要
        return { inline: true };
      })
      .end();
  }
};
