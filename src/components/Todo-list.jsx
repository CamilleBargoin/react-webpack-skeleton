var React = require("react");
var TodoListHeader = require("./Todo-list-header.jsx");
var TodoListItem = require("./Todo-list-item.jsx");


var TodoList = React.createClass({
	render: function() {

		var methods = {
			toggleTask: this.props.toggleTask,
			saveTask: this.props.saveTask
		};

		var listItems = this.props.todos.map(function(todo, index) {
			return <TodoListItem key={index} {...todo} {...methods}/>;
		});

		return (
			<table>
				<TodoListHeader />
				<tbody>{listItems}</tbody>
			</table>
		);
	}
});

module.exports = TodoList;