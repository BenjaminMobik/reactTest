var GistAddForm = React.createClass({
  getInitialState: function(){
    return{
      username: ''
    }
  },

  onChange: function(e){
    this.setState({username: e.target.value})
  },

  addGist: function(e){
    e.preventDefault();
    this.props.onAdd(this.state.username);
    this.setState({username:''})
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.addGist}>
          <input placeholder="type a Github name" onChange={this.onChange} value={this.state.username}></input>
          <button> Fetch </button>
        </form>
      </div>
    );
  }
});

export default GistAddForm;
