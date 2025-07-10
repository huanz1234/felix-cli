# felix-cli

基于Vue 3和Vite的前端项目模板，集成了TypeScript、Axios等工具。

## 项目描述

这是一个使用Vue 3、TypeScript和Vite构建的前端项目框架，封装了Axios请求工具，方便开发RESTful API接口调用。

## TypeScript配置说明

如果需要允许使用`any`类型，可以在`tsconfig.json`中添加以下配置：

```json
{
  "compilerOptions": {
    "noImplicitAny": false
  }
}
```

或者在`.eslintrc`文件中禁用相关规则：

```json
{
  "rules": {
    "@typescript-eslint/no-explicit-any": "off"
  }
}
```

## 推荐的IDE设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并禁用Vetur)。

## `.vue`文件的TypeScript类型支持

TypeScript默认无法处理`.vue`导入的类型信息，因此我们用`vue-tsc`替代`tsc`CLI进行类型检查。在编辑器中，需要使用[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)使TypeScript语言服务识别`.vue`类型。

## 自定义配置

查看[Vite配置参考](https://vite.dev/config/)。

## 项目设置

```sh
pnpm install
```

### 开发环境编译和热重载

```sh
pnpm dev
```

### 生产环境类型检查、编译和压缩

```sh
pnpm build
```

### 使用[ESLint](https://eslint.org/)进行代码检查

```sh
pnpm lint
```
