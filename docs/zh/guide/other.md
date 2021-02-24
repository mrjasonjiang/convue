# 其他

还有一些其他的配置项如下：

## loading

- Type: `string`
- Default: `undefined`

页面的 vue 实例创建完成前的 loading 颜色设置

使用指南请[参考head](/convue/zh/guide/head)。

## progress

- Type: `boolean | Progress`
- Default: `true`

路由切换时的进度条设置

如果设置为 false, 则不会显示，同时也不会引入该段代码。

Progress 的类型
```ts
export interface Progress {
  color?: string;
  size?: string;
}
```

传入对象的话，可以设置进度条的颜色和尺寸。

## styles

- Type: `string[]`
- Default: `undefined`

加载第三方样式，或者是本地的样式文件路径，默认会全局引入


## modules

- Type: `string[]`
- Default: `undefined`

加载第三方模板包，或者是本地的一个文件路径，默认会全局使用

比如我们需要使用 Ant Design Vue, 我们需要在 vite.config.js 文件中加入一下配置

```js
export default defineConfig({
  plugins: [
    ...convue({
      styles: ['ant-design-vue/dist/antd.css'],
      modules: ['ant-design-vue']
    }),
  ],
});
```
