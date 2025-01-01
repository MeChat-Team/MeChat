# MeChat
## 基于99AI打造的大众级AIGC聚合平台

### 项目简介
MeChat 是一个简便易用的AIGC聚合平台，该库主要用于为您提供快速部署和在线更新，您可以通过Github为我们提交bug反馈，讨论使用方法等。具体的部署问题请联系MeChat负责人。

### 功能特性
- 管理员后台
  - 用户管理
  - 系统配置
  - 监控统计
- 用户聊天界面
  - 实时消息
  - 消息记录
  - 用户状态

### 安装部署

#### Docker 部署
1. 确保已安装 Docker 和 Docker Compose
2. 复制 .env.example 为 .env 并配置必要参数
3. 运行部署命令：
   ```bash
   docker-compose up -d
   ```

#### 本地部署
1. 安装 Node.js 16+
2. 安装依赖：
   ```bash
   npm install
   ```
3. 启动服务：
   ```bash
   npm start
   ```

### 配置说明
编辑 .env 文件配置以下参数：
- PORT: 服务端口
- DB_HOST: 数据库地址
- DB_PORT: 数据库端口
- DB_USER: 数据库用户
- DB_PASS: 数据库密码

### 使用指南
1. 访问管理员后台：http://localhost:3000/admin
2. 访问用户聊天界面：http://localhost:3000/chat

### 贡献指南
1. Fork 本项目
2. 创建特性分支 (git checkout -b feature/AmazingFeature)
3. 提交更改 (git commit -m 'Add some AmazingFeature')
4. 推送分支 (git push origin feature/AmazingFeature)
5. 创建 Pull Request
