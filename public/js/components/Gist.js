var Gist = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.username} last Gist on <a href={this.props.url}>here</a>
      </div>
    );
  }
});

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

var GistBox = React.createClass({
  getInitialState: function(){
    return {
      gists: [{username:'benjamin',url:'http://google.com'}]
    }
  },

  addGist: function(username){
    console.log(username)
    var url=`https://api.github.com/users/${username}/gists`
    $.get(url, function(result){
      var username = result[0].owner.login
      var url = result[0].html_url

      var gists = this.state.gists.concat({username,url})
      this.setState({gists})
    }.bind(this))
  },

  render: function() {

    var newGist = function(gist){
      return <Gist username={gist.username} url={gist.url} />
    };

    return (
      <div>
        <h1>GistBox</h1>

        <GistAddForm onAdd={this.addGist}/>

        {this.state.gists.map(newGist)}

      </div>
    );
  }
});


ReactDOM.render(<GistBox />, document.getElementById('app'));
