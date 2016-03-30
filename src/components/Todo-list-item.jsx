var React = require("react");


var TodoListItem = React.createClass({
	getInitialState: function() {
	    return {
	        isEditing: false  
	    };
	},
	onEditClick: function() {
		this.setState({
			isEditing: true
		});
	},
	onCancelEditingClick: function() {
		this.setState({
			isEditing: false
		});
	},
	onItemClick: function() {
		this.props.toggleTask(this.props.task);
	},
	onSaveTask: function(e) {
		e.preventDefault();
		var oldTask = this.props.task;
		var newTask = this.refs.editInput.value;

		this.props.saveTask(oldTask, newTask);
		this.setState({isEditing: false});
	},
	renderActionsSection: function() {
		if (this.state.isEditing) {
			return (
				<td>
					<button onClick={this.onSaveTask}>Save</button>
					<button onClick={this.onCancelEditingClick}>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={this.onEditClick}>Edit</button>
				<button>Delete</button>
			</td>
		);
	},
	renderTaskSection: function() {
		var completedClass = this.props.isCompleted ? 'isCompleted' : '';

		if (this.state.isEditing) {
			return (
				<td>
					<form onSubmit={this.onSaveTask}>
						<input defaultValue={this.props.task} ref="editInput"/>
					</form>
				</td>
			);
		}

		return <td className={completedClass} onClick={this.onItemClick}>{this.props.task}</td>
		
	},
	render: function() {
		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</tr>
		);
	}
});

module.exports = TodoListItem;