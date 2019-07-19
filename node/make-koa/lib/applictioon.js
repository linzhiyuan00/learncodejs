const Emitter = require('events');
const http = require('http');
const context = require('./context');

module.exports = class Application extends Emitter {
  constructor() {
    super()
    this.context = Object.create(context)
  }
  use() {}
  listen(...arg) {
    const server = http
    .createServer(this.callback())
    server.listen(...arg);
  }
  createContext(req,res) {

  }
  callback() {
    const handleRequest = (req,res) =>{
      const ctx = this.createContext(req,res);
    }
    return handleRequest;
  }
} 