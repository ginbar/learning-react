const express = require('express');
const app = express();

const baseDir = process.cwd();

app.use(express.static(`${baseDir}/public`));
app.use('/dist', express.static(`${baseDir}/dist`));

app.listen(process.env.PORT);