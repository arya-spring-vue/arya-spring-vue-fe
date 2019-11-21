const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@screenshot", resolve("screenshot"));
  },
  // publicPath: "/arya-spring-vue-fe"
};
