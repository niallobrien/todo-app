'use strict'

class HomeController {

  * index (request, response) {
    const testUrl = '/test'
    const view = yield response.view('index', {testUrl: testUrl })
    response.send(view)
  }

  * test (request, response) {
    // alternative way of rendering a view
    response.send(yield response.view('test'))
  }

}

module.exports = HomeController
