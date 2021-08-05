# webpack-url-assets-test
Simple repo for testing webpack 5 url assets

1. Build the project

```bash
cd project
npm install
npm run build
```

2. Check presence/absence of the `.png` image in `project/dist` directory.


`lib` directory contains a simple library example that has its own asset - `test-image.png`. The library requires the image using `new URL` mechanism to create an image element on html page. 
`project` directory contains a simple project example that depends on the `lib` library and just calls its default exported function.

The expected behaviour with [url assets](https://webpack.js.org/guides/asset-modules/#url-assets) is that the `project` would not require any additional webapck configuration to emit the image as asset in `dist`. But the result is that webpack just ignores the image and it is not included in the `project`'s bundle.
