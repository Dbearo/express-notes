const express = require("express");
const path = require('path');
const router = require('express').Router();
//sets default view
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
//sends the  notes.html file when you input /notes in the search bar
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
//sends index.html when you input /*
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
//exports router for functionality
module.exports = router;