# Biblios

## A React component library for your modern development lifestyle
**Biblios** is a library of reusable React components. Use it to build React applications quickly and avoid redundant code.

## Using Biblios
The following instructions describe how to use Biblios in your React applications.

### Installing Biblios
1. Clone Biblios from Github: `git clone https://github.com/jFarrow02/biblios`

2. Navigate to the project root: `cd biblios`

3. Install package dependencies via npm: `npm install`

4. Build and link Biblios:
```
npm run babel:package
npm link
```
5. Change directories to the application into which you'll be importing its components. Link Biblios:
```
cd <your-project-location>
npm run babel:package
```
**_TODO: 2019-12-28 21:39 EST_** Investigate packaging from the "dist" folder:
`"babel:package": "set NODE_ENV=production && babel dist --out-dir biblios --ignore src/**/*.test.js --minified",`