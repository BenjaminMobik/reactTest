var Avatar = React.createClass({

  getDefaultProps: function() {
    return {
      path: "https://www.npmjs.com/static/images/npm-enterprise.svg"
    }
  },
  render: function() {
    return (
      <div>
        <a href={this.props.path}>
          <img src={this.props.path} />
        </a>
      </div>
    );
  }
});
ReactDOM.render(<Avatar/>, document.body);
