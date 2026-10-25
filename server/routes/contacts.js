const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// GET /api/contacts  ->  returns all contacts
router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contact.find().select('name email phone').sort({ name: 1 });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
