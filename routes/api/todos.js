const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');


require('../../config/auth');
router.get('/:userid', todosCtrl.show);
router.post('/:userid', checkAuth, todosCtrl.create);
router.delete('/:id', todosCtrl.deleteTodo);
router.put('/:id', todosCtrl.editTodo);
router.put('/update/:id', todosCtrl.updateToDo);


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: "Not Authorized!"
    });
}

module.exports = router;