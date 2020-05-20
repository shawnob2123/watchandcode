
let todoList = {
    todos: [],  
 
    addTodo: function (todoText) { 
    this.todos.push({
        todoText: todoText,
        completed: false

    });
},


changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
},

deleteTodo: function(position) {
    this.todos.splice(position, 1);

},

toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed; //if true, flip to false. if starts false, will flip to true. We change the value to the opposite.   ! called "bang operator"
},
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        // get number of completed todos


        this.todos.forEach(function (todo) {
            if (todo.complete === true) {
                completedTodos++;
            }

        });

        // Case 1: If eveythings true, make everything false
        this.todos.forEach(function(todo){
        if (completedTodos === totalTodos) {
            todo.completed = false;
            
    }else{
        todo.completed = true;
    }
    
    });
}
    

    },


    let handlers = {

    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();

    },

    addTodo: function (){
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
        
    },

    changeTodo: function (){
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput = '';
        view.displayTodos();
        
    },

    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },

    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }


};

let view = {
    displayTodos: function() {

        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';


            todoList.todos.forEach(function(todo, position) {
                let todoLi = document.createElement('li');
                let todoTextWithCompletion = '';

                if (todo.completed === true) {
                    console.log(todoTextWithCompletion = '(x)' + (todoTextWithCompletion));
                }else {
                    console.log(todoTextWithCompletion = '()' + (todoTextWithCompletion));

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
                },this);
            
            },
        
        

        createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;

            
    },

    setUpEventListeners: function() {
        let todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event) {

        let elementClicked = event.target;

        if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(ParseInt(elementClicked.parentNodeId));  //Q - ParseInt interger base 10?

        }
    }
};
    


view.setUpEventListeners();