import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

// 中间件
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 模拟数据
let users = [
  { id: 1, name: '张三', age: 28 },
  { id: 2, name: '李四', age: 32 },
  { id: 3, name: '王五', age: 25 },
]

// 获取所有用户 - GET
app.get('/api/users', (req, res) => {
  res.json({
    code: 200,
    data: users,
    message: '获取用户列表成功',
  })
})

// 获取单个用户 - GET
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const user = users.find((u) => u.id === id)

  if (!user) {
    return res.status(404).json({
      code: 404,
      message: '用户不存在',
    })
  }

  res.json({
    code: 200,
    data: user,
    message: '获取用户成功',
  })
})

// 创建用户 - POST
app.post('/api/users', (req, res) => {
  const { name, age } = req.body

  if (!name || !age) {
    return res.status(400).json({
      code: 400,
      message: '名称和年龄不能为空',
    })
  }

  const id = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1
  const newUser = { id, name, age: parseInt(age) }

  users.push(newUser)

  res.status(201).json({
    code: 201,
    data: newUser,
    message: '创建用户成功',
  })
})

// 更新用户 - PUT
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const { name, age } = req.body
  const index = users.findIndex((u) => u.id === id)

  if (index === -1) {
    return res.status(404).json({
      code: 404,
      message: '用户不存在',
    })
  }

  users[index] = {
    ...users[index],
    name: name || users[index].name,
    age: age ? parseInt(age) : users[index].age,
  }

  res.json({
    code: 200,
    data: users[index],
    message: '更新用户成功',
  })
})

// 删除用户 - DELETE
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = users.findIndex((u) => u.id === id)

  if (index === -1) {
    return res.status(404).json({
      code: 404,
      message: '用户不存在',
    })
  }

  const deletedUser = users[index]
  users = users.filter((u) => u.id !== id)

  res.json({
    code: 200,
    data: deletedUser,
    message: '删除用户成功',
  })
})

// 服务器状态 - GET
app.get('/api/status', (req, res) => {
  res.json({
    code: 200,
    data: {
      status: 'running',
      timestamp: new Date().toISOString(),
    },
    message: '服务器正常运行',
  })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`后端服务运行在 http://localhost:${PORT}`)
  console.log('可用API接口:')
  console.log('GET    /api/status       - 获取服务器状态')
  console.log('GET    /api/users        - 获取所有用户')
  console.log('GET    /api/users/:id    - 获取单个用户')
  console.log('POST   /api/users        - 创建新用户')
  console.log('PUT    /api/users/:id    - 更新用户')
  console.log('DELETE /api/users/:id    - 删除用户')
})
