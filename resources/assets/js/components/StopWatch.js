var StopWatch = React.createClass({

  getInitialState: function() {
    return {
      time: 0,
      until: 0,
      enabled: true
    };
  },
  start: function(){
    this.setState({enabled: false})
    this.interval = setInterval( () => {
      this.tick();
      if (this.isTimeUp()) {
        this.finish();
      }
    }, 1000);

  },
  isTimeUp: function(){
    return this.state.time == this.state.until
  },
  finish: function(){
    console.log('ding ding ding')
    ReactDOM.findDOMNode(this.refs.input).focus();
    this.setState({time:0, until:'', enabled:true})
    return clearInterval(this.interval);

  },
  tick: function(){
    this.setState({time: this.state.time +1})
  },
  type: function(e){
    this.setState({until: e.target.value})
  },
  render: function() {
    return (
      <div>
      <div className="ui action input">
        <input type='text' ref='input' onChange={this.type} value = {this.state.until}></input>
        <button className="ui button" disabled={ ! this.state.enabled} onClick={this.start}>Go</button>

      </div>
      <h1>
        {this.state.time}
      </h1>
      </div>

    );
  }
});


export default StopWatch
