# API测试服务器

这是一个简单的Express服务器，用于测试前端的Axios请求工具。

## 功能特点

- 提供基本的RESTful API接口
- 支持CORS，允许跨域请求
- 实现了GET、POST、PUT、DELETE等HTTP方法
- 包含完整的错误处理

## 可用API接口

| 方法   | 接口           | 描述           |
| ------ | -------------- | -------------- |
| GET    | /api/status    | 获取服务器状态 |
| GET    | /api/users     | 获取所有用户   |
| GET    | /api/users/:id | 获取单个用户   |
| POST   | /api/users     | 创建新用户     |
| PUT    | /api/users/:id | 更新用户信息   |
| DELETE | /api/users/:id | 删除用户       |

## 安装和启动

1. 安装依赖：

```bash
cd server
npm install
```

2. 启动服务器：

```bash
npm start
```

服务器默认运行在 http://localhost:3000

## 使用示例

### 获取所有用户

```js
// 使用封装的Request类
const request = new Request({
  baseURL: 'http://localhost:3000',
})

// GET请求
request.get('/api/users', {}).then((res) => {
  console.log(res.data)
})
```

### 创建新用户

```js
// POST请求
request
  .post(
    '/api/users',
    {
      name: '张三',
      age: 28,
    },
    {},
  )
  .then((res) => {
    console.log(res.data)
  })
```

### 更新用户

```js
// PUT请求
request
  .put(
    '/api/users/1',
    {
      name: '张三(已更新)',
      age: 29,
    },
    {},
  )
  .then((res) => {
    console.log(res.data)
  })
```

### 删除用户

```js
// 删除请求方法尚未在Request类中实现，可以自行添加
```
