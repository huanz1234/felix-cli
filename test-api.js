// 测试API请求
import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
})

// 测试获取所有用户
async function testGetUsers() {
  try {
    console.log('正在获取所有用户...')
    const res = await request.get('/api/users')
    console.log('用户列表:', res.data)
    return res.data
  } catch (err) {
    console.error('获取用户失败:', err.message)
  }
}

// 测试创建用户
async function testCreateUser() {
  try {
    console.log('正在创建新用户...')
    const res = await request.post('/api/users', {
      name: '测试用户',
      age: 30,
    })
    console.log('创建结果:', res.data)
    return res.data
  } catch (err) {
    console.error('创建用户失败:', err.message)
  }
}

// 测试更新用户
async function testUpdateUser(id) {
  try {
    console.log(`正在更新用户 ${id}...`)
    const res = await request.put(`/api/users/${id}`, {
      name: '更新的用户名',
      age: 35,
    })
    console.log('更新结果:', res.data)
    return res.data
  } catch (err) {
    console.error('更新用户失败:', err.message)
  }
}

// 测试删除用户
async function testDeleteUser(id) {
  try {
    console.log(`正在删除用户 ${id}...`)
    const res = await request.delete(`/api/users/${id}`)
    console.log('删除结果:', res.data)
    return res.data
  } catch (err) {
    console.error('删除用户失败:', err.message)
  }
}

// 按顺序运行测试
async function runTests() {
  console.log('=== 开始API测试 ===')

  // 测试获取用户
  await testGetUsers()

  // 测试创建用户
  const createResult = await testCreateUser()
  const newUserId = createResult?.data?.id

  if (newUserId) {
    // 测试更新用户
    await testUpdateUser(newUserId)

    // 测试删除用户
    await testDeleteUser(newUserId)
  }

  // 显示最终用户列表
  await testGetUsers()

  console.log('=== API测试完成 ===')
}

// 执行测试
runTests()
