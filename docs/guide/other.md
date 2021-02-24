# Other

There are some other configuration items as follows:

## loading

-Type: `string`
-Default: `undefined`

The loading color setting before the vue instance of the page is created

For the user guide, please [refer to head](/convue/zh/guide/head).

## progress

-Type: `boolean | Progress`
-Default: `true`

Progress bar setting during route switching

If set to false, it will not be displayed and the code will not be introduced.

Progress type
```ts
export interface Progress {
  color?: string;
  size?: string;
}
```

If you pass in an object, you can set the color and size of the progress bar.

## styles

-Type: `string[]`
-Default: `undefined`

Load a third-party style, or a local style file path, which will be imported globally by default


## modules

-Type: `string[]`
-Default: `undefined`

Load a third-party template package, or a local file path, which will be used globally by default

For example, if we need to use Ant Design Vue, we need to add a configuration in the vite.config.js file

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
