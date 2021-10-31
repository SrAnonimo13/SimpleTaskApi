const express = require('express');
const Task = require('./src/model/Task');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/:id', async (req, res) => {
    let tasks = await Task.findById(req.params.id);
    res.status(200).send({ tasks });
});

app.get('/', async (req, res) => {
    let tasks = await Task.find({});
    res.status(200).send({ tasks });
})

require('./src/routers/tasks')(app);

app.listen(PORT, () => console.log('Started'));