const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');

require('../../config/auth');
router.get('/:userid', todosCtrl.show);
router.post('/:userid', checkAuth, todosCtrl.create);
router.delete('/:id', todosCtrl.deleteTodo);
router.put('/:id', todosCtrl.editTodo);
router.put('/update/:id', todosCtrl.updateToDo);

function checkAuth(request, response, next) {
    if (request.user) return next();
    return response.status(401).json({
        message: "Not Authorized!"
    });
}

module.exports = router;