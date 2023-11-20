const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Import the Task model

// Create a new Task
router.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({
            title,
            description,
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask); // Corrected 'join' to 'json'
    } catch (error) {
        res.status(500).json({ error: 'Error creating task' });
    }
});

module.exports = router;
