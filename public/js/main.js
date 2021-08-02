var app = angular.module('todoApp', ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "pages/home/search.html",
      controller: 'SearchController'
  })
  .when("/chat", {
    templateUrl : "pages/messenger/chat.html",
    controller: 'ChatController'
  })
  .when("/todo", {
    templateUrl : "pages/tools/todo.html",
    controller: 'TodoListController'
  })
  .otherwise({
    template : "<h1>None</h1><p>Nothing has been selected</p>"
  });
});
app.controller('SearchController', function ($scope) {
});
app.controller('ChatController', function ($scope) {
  var chatCtrl = this;
  chatCtrl.name = "Anonymous";
});
app.controller('MenuController', function ($scope) {
  var menuCtrl = this;
  menuCtrl.menu = [
    {
      text: ' Home', link: 'home', icon: 'fa-home', active: true,
      submenu: [
        { title: ' Tìm kiếm thông thường', link: '#' },
        { title: ' Tìm kiếm AI (DEMO)' }
      ]
    },
    {
      text: ' News', link: 'news', icon: 'fa-newspaper-o', active: false,
      submenu: [
        { title: ' Mới' },
        { title: ' Nóng' },
        { title: ' Thế giới' },
        { title: ' Giải trí' },
        { title: ' Quân sự' }
      ]
    },
    {
      text: ' Messenger', link: 'messenger', icon: 'fa-comments-o', active: false,
      submenu: [
        { title: ' Newfeed' },
        { title: ' Chat', link: '#!chat' }
      ]
    },
    {
      text: ' Tools', link: 'tools', icon: 'fa-wrench', active: false,
      submenu: [
        { title: ' Todo', link: '#!todo'},
        { title: ' Note' }
      ]
    },
    {
      text: ' Setting', link: 'setting', icon: 'fa-cog', active: false,
      submenu: [
        { title: ' Bảo mật' },
        { title: ' Giao diện' }
      ]
    },
    {
      text: ' Feedback', link: 'feedback', icon: 'fa-envelope', active: false,
      submenu: [
        { title: ' Đang thực hiện' },
        { title: ' Vote ý tưởng' },
        { title: ' Góp ý' }
      ]
    }];

  menuCtrl.menuCurrent = {};

  menuCtrl.changeMenu = function (menu) {
    for (var i of menuCtrl.menu) {
      if (i.link == menu.link) {
        i.active = true;
      } else {
        i.active = false;
      }
    }
    menuCtrl.menuCurrent = menu;
  }

  for (var i of menuCtrl.menu) {
    if (i.active) {
      menuCtrl.changeMenu(i);
      break;
    }
  }
});
app.controller('MainController', function ($scope) {
  var mainCtrl = this;
  window.document.title = "Boring Project";
});
app.controller('TodoListController', function ($scope) { 
  var todoList = this;
  todoList.todos = [
    { text: 'learn AngularJS', done: true },
    { text: 'build an AngularJS app', done: false }];

  todoList.addTodo = function () {
    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = '';
  };

  todoList.remaining = function () {
    var count = 0;
    angular.forEach(todoList.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function () {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) todoList.todos.push(todo);
    });
  };
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openNav() {
  document.getElementById("mySidenav2").style.left = "0";
}

function closeNav() {
  document.getElementById("mySidenav2").style.left = "-250px";
}