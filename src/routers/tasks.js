const express = require('express');
const Task = require('../model/Task');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { title, description } = req.body;

    try {
        if(!title) return res.status(400).send({ err: 'title is not defined' });
        if(!description) return res.status(400).send({ err: 'description is not defined' });

        let task = await Task.create({ title, description });

        return res.status(200).send({ task })
    } catch (err) {
        return res.status(400).send({ err });
    }
})

module.exports = app => app.use('/task', router);