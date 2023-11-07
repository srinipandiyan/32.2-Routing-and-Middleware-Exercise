/**
 * Express app error, which extends normal JS error so that 
 * status can be tacked on to an instance of the Error class. 
 * 
 * Error-handling middelware will return.
 */


class ExpressError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}


module.exports = ExpressError;