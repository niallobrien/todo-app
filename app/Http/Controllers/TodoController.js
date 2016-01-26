'use strict'

const Todo = use('App/Model/Todo')

class TodoController {

    * index (request, response) {
      const todos = yield Todo.all()
      const view = yield response.view('todos/index', {todos: todos})
      if (request.is('json','application')) response.json(todos)
      response.send(view)
    }

    * store (request, response) {}

    * show (request, response) {
      let params = request.params()
      const todo = yield Todo.find(params.id)
      const view = yield response.view('index', {todo: todo })
      response.send(view)
    }

    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = TodoController
