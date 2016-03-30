var React = require("react");

var TodoListHeader = React.createClass({
	render: function() {
		return (
			<thead>
				<tr>
					<th>Task</th>
					<th>Actions</th>
				</tr>
			</thead>
		);
	}
});

module.exports = TodoListHeader;