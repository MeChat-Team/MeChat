# 编译阶段
FROM node:20.14.0-alpine AS build

WORKDIR /app

COPY package*.json ./

# 设置环境变量来忽略一些警告
ENV NPM_CONFIG_LOGLEVEL=error
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN node -v && npm -v && echo "Network check complete"

# 安装必要的构建依赖
RUN apk add --no-cache --virtual .build-deps git

# 更新 npm 到最新版本
RUN npm install -g npm@latest

# 安装项目依赖
RUN npm install --production --no-optional --legacy-peer-deps

# 清理缓存和临时文件
RUN npm cache clean --force && apk del .build-deps && rm -rf /var/cache/apk/* /tmp/*

# 运行阶段
FROM node:20.14.0-alpine AS runner

ENV TZ="Asia/Shanghai" \
  NODE_ENV=production

WORKDIR /app

# 从构建阶段复制 node_modules
COPY --from=build /app/node_modules ./node_modules
COPY . .

EXPOSE 9520

CMD ["node", "--max-old-space-size=4096", "./dist/main.js"]
