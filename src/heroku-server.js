const express = require('express');
express.static('../dist');
app.listen(process.env.PORT);