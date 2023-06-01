const express = require('express');
const cors = require('cors');

const multer = require('multer');
const uploadConfig = require('./upload');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer(uploadConfig);

app.post('/avatar', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  return res.json({ ok: true });
});

app.listen(3333, () => console.log('server running on port 3333'));