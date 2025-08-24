const e = require("express");

let idcounter = 1;
let tasks = []; // in-memory task storage

exports.addTask = (req, res) => {
    // validation checks
    if (!req.body.title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    if(req.body.status == 'completed') { 
        return res.status(400).json({ error: 'Cannot add a completed task from the start'});
    }

    // add default values for a new task
    let status = 'pending';
    let id = idcounter++;

    let newTask = {
        id: id,
        title: req.body.title,
        description: req.body.description || '',
        status: status
    };

    tasks.push(newTask);
    res.status(201).json({ message: 'Task added successfully', task: newTask });
}

exports.listTasks = (req, res) => {
    res.status(200).json({ tasksList: tasks})
}

exports.getTask = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Task ID is required' });
    }

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            return res.status(200).json({ message: 'Task retrieved successfully', task: tasks[i]})
        }
    }

    res.status(404).json({ error: `task with id ${id} not found` });
}

exports.updateTask = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Task ID is required' });
    }

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            // validation checks
            if (!req.body.title) {
                return res.status(400).json({ error: 'Title cannot be empty' });
            }

            if (req.body.status !== undefined && !['pending', 'in-progress', 'completed'].includes(req.body.status)) {
                return res.status(400).json({ error: 'Invalid status value' });
            }

            // update task fields if provided
            if (req.body.title !== undefined) tasks[i].title = req.body.title;
            if (req.body.description !== undefined) tasks[i].description = req.body.description;
            if (req.body.status !== undefined) tasks[i].status = req.body.status;

            return res.status(200).json({ message: 'Task updated successfully', task: tasks[i] });
        }
    }

    res.status(404).json({ error: `task with id ${id} not found` });
}

exports.deleteTask = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Task ID is required' });
    }

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
            return res.status(200).json({ message: 'Task deleted successfully' });
        }
    }

    res.status(404).json({ error: `task with id ${id} not found` });
}

exports.seedTasks = (req, res) => {
    tasks = [ 
        ...tasks,
        {
            id: idcounter++,
            title: `Sample Task ${idcounter-1}`,
            description: 'This is a sample task',
            status: 'pending'
        },
        {
            id: idcounter++,
            title: `Sample Task ${idcounter-1}`,
            description: 'This is another sample task',
            status: 'in-progress'
        },
        {
            id: idcounter++,
            title: `Sample Task ${idcounter-1}`,
            description: '',
            status: 'completed'
        }   
    ];

    res.status(200).json({ message: 'Sample tasks added successfully', tasksList: tasks });
}