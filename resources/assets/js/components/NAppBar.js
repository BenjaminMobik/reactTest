import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

const style = {margin: 5};

const NAppBar = () => (
  <AppBar
    title="Nest"
    iconElementRight={
      <Avatar
        src="images/person-placeholder.jpg"
        size={40}
        style={style}
      />}
  />
);

export default NAppBar
