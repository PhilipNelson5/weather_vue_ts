module.exports = {
  devServer: {
    host: "localhost"
  },
  publicPath: process.env.NODE_ENV === "production" ? "/weather_vue_ts/" : "/"
};
