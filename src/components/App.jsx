var React = require("react");
var TodoList = require("./Todo-list.jsx");
var CreateTodo  = require("./Create-todo.jsx");
var _ = require("lodash");

var todos = [
	{
		task: 'make dinner',
		isCompleted: false
	},
	{
		task: 'do exercise',
		isCompleted: false
	},
	{
		task: 'clean house',
		isCompleted: true
	}
];



var App = React.createClass({

	getInitialState: function() {
	    return {
	        todos: todos  
	    };
	},
	createNewTask: function(task) {

		var newTodos = this.state.todos;
		newTodos.push({
			task: task,
			isCompleted: false
		});

		this.setState({
			todos: newTodos
		});
	},
	toggleTask: function(task) {
		
		var foundTodo = this.state.todos.find(function(item) {
			return item.task == task;
		})

		foundTodo.isCompleted = ! foundTodo.isCompleted;

		this.setState({
			todos: this.state.todos
		});
	},
	saveTask: function(oldTask, newTask) {

		var foundTodo = this.state.todos.find(function(item) {
			return item.task == oldTask;
		})

		foundTodo.task = newTask;

		this.setState({
			todos: this.state.todos
		});

		console.log(this.state);
	},
	render: function() {
		return (
			<div>
				<h1>React ToDo App</h1>
				<CreateTodo  createNewTask={this.createNewTask}/>
				<TodoList todos={this.state.todos} toggleTask={this.toggleTask} saveTask={this.saveTask}/>
			</div>
		);
	}
});

module.exports = App;