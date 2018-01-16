/* eslint-disable */
var taskSvc = (function(){
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var alphabet = `0123456789${letters}${letters.toUpperCase()}`;

  function rando(){
    var output = '';
    for (var i = 0; i < 6; i += 1) {
      output += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return output;
  };

  var tasks = [
    { taskName: 'Walk Dog', finished: true, id: rando() },
    { taskName: 'Buy Bread', finished: false, id: rando() },
  ];

  function delay(t){
    t = t || 2000;
    return new Promise(function(res){
      setTimeout(res, t);
    });
  } 

  return {
    // () => Promise<Tasks[]>
    getTasks: function(){ 
      return delay()
        .then(function(){
          return tasks.map(function(task){
            return Object.assign({}, task);
          });
        });
    },

    // (taskName:String) => Promise<Task>
    addTask: function(taskName){
      return delay()
        .then(function(){
          var newTask = {
            taskName: taskName,
            finished: false,
            id: rando(),
          };
          tasks.push(newTask);
          return Object.assign({}, newTask);
        });
    },
    // (id:String) => Promise<Task>
    toggleTask: function(id){ 
      return delay()
        .then(function(){
          const foundTask = tasks.find(function(t){
            return t.id === id;
          });
          if (foundTask !== undefined) {
            foundTask.finished = !foundTask.finished;
          }
          return Object.assign({}, foundTask);
        });
    },
  };

}());
