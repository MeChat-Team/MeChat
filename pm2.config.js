module.exports = {
  apps: [{
    name: "99AI",
    script: "./dist/main.js",
    watch: ["dist"],
    ignore_watch: [
      "node_modules",
      "logs",
      "public",
      ".git",
      "src",
      ".env"
    ],
    env: {
      TZ: "Asia/Shanghai"
    },
    instances: 1,
    error_file: "logs/err.log",
    out_file: "logs/out.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    max_memory_restart: "2000M"
  }]
}
