var React = require("react");


var CreateTodo = React.createClass({
	onSubmitCreate: function(e) {
		e.preventDefault();

		this.props.createNewTask(this.refs.createInput.value);
		this.refs.createInput.value = "";
	},
	render: function() {

		return (
			<form onSubmit={this.onSubmitCreate}>
				<input type="text" placeholder="what do i need to do" ref="createInput"/>
				<button>Create</button>
			</form>
		);
	}
});

module.exports = CreateTodo;