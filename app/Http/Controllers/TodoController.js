'use strict'

const Todo = use('App/Model/Todo')
const Validator = use('Validator')

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

    * store (request, response) {
      const rules = {
        body: 'required',
        completed: 'required'
      }

      // fetching request data
      const data = request.all()
      const validation = yield Validator.validate(rules, data)

      // checking if validation has failed
      if (validation.fails()) {
        return validation.messages()
      }
      // Validation successful, go ahead
      response.json({success: 'Yay! :)'})
    }

    * edit (request, response) {
      response.send('Edit method')
    }
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = TodoController
