var TaskList = React.createClass({

  render: function() {
    console.log('TaskList');

    var displayTask = function(task){
      return <li>{task} </li>
    };

    return (
      <ul>
        {this.props.items.map(displayTask)}
      </ul>
    );
  }
});

var TaskApp = React.createClass({
  getInitialState: function(){
    console.log("TaskApp")
    return {
      items: [],
      task: ''
    };
  },

  addTask: function(event){
    event.preventDefault();
    this.setState({
      items: this.state.items.concat([this.state.task]),
      task: ''
    })
  },

  onChange: function(event){
    this.setState({task: event.target.value})
  },
  render: function() {
    return (
      <div>
        <h1>My Tasks</h1>
        <TaskList items={this.state.items} />
        <form onSubmit={this.addTask}>
          <input onChange={this.onChange} value={this.state.task}></input>
          <button>Add Task</button>
        </form>
      </div>
    );
  }
});
ReactDOM.render(<TaskApp />, document.body);
