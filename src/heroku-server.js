const express = require('express');
const app = express();

const baseDir = process.cwd();

app.use('/dist', express.static(`${baseDir}/dist`));

app.use([
    '/',
    '/development',
    '/components',
    '/redux',
    '/reactnative'], express.static(`${baseDir}/public`));

app.listen(process.env.PORT);