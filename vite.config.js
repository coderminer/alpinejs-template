export default {
  base: "./",
  server: {
    proxy: {
      "^/api": {
        target: "http://aider.meizu.com/app/weather", // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
