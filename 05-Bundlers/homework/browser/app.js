//(function () { comento la IIF

  //var whiteboard = window.whiteboard; //usa el modulo whiteboard.
//Lo comento porque lo quiero dejar de usar de window y quiero usarlo con un require.

//var whiteboard = require('./whiteboard.js');
//comente lo de arriba para hacerlo con ES6
import whiteboard from './whiteboard.js';

//var socket = window.io(window.location.origin);

//var io = require('socket.io-client'); las comento para trabajar con ES6
//var socket = io(window.location.origin)

//ES6
import io from 'socket.io-client';
var socket = io(window.location.origin)

  socket.on('connect', function () {
    console.log('Connected!');
  });

socket.on('load', function (strokes) {

  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });

});

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

//})();
