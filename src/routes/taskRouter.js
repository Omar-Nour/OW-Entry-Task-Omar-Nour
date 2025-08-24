const router = require("express").Router();

const {
    getTask,
    addTask,
    listTasks,
    updateTask,
    deleteTask,
    seedTasks
} = require('../controllers/taskController');

router.post('/', addTask);
router.get('/', listTasks);
router.post('/seed', seedTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


module.exports = router;


