const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact-controller');
const contactSchema=require('../validators/contact-validator')
const validate=require('../middleware/validate-middleware')
router.route('/').post(validate(contactSchema), contactController);

module.exports = router;
