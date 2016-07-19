var Counter = React.createClass({
  getInitialState: function(){
    return {
      count: 0
    };
  },
  add: function(){
    this.setState({count: this.state.count + 1});
  },
  sub: function(){
    this.setState({count: this.state.count - 1});
  },
  render: function() {
    return (
      <div>
        <h1 className="ui header"> Counter: { this.state.count}</h1>
        <button className="ui button" onClick={this.sub} >Sub</button>
        <button className="ui button" onClick={this.add} >Add</button>
      </div>
    );
  }
});
ReactDOM.render(<Counter/>, document.body);
