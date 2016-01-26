'use strict'

const Todo = use('App/Model/Todo')

class TodoController {

    * index (request, response) {
      const todos = yield Todo.all()
      if (request.is('json','application')) return response.json({hello:"world"})
      const view = yield response.view('todos/index', {todos: todos.toJSON()})
      response.send(view)
    }

    * create (request, response) {
      const view = yield response.view('todos/create')
      response.send(view)
    }

    * show (request, response) {
      response.send('Show method')
    }

    * store (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = TodoController
