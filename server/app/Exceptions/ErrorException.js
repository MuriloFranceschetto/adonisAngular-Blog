'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ErrorException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = ErrorException
