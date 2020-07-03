const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({text: 'hello world'}));

module.exports = router;