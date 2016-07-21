import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Device from 'material-ui/svg-icons/device/devices';
import Chart from 'material-ui/svg-icons/editor/show-chart';
import Print from 'material-ui/svg-icons/action/print';
import Command from 'material-ui/svg-icons/communication/call-made';
import Settings from 'material-ui/svg-icons/action/settings';



import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const style = {
  paper: {
    display: 'inline-block',
    float: 'right',
    margin: '30vh 0px 16px 32px',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const NavSide = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Stations" leftIcon={<Device />} />
        <MenuItem primaryText="Graphs" leftIcon={<Chart />} />
        <Divider />
        <MenuItem primaryText="Make a report" leftIcon={<Print />} />
        <MenuItem primaryText="Send command" leftIcon={<Command />} />
        <Divider />
        <MenuItem primaryText="Settings" leftIcon={<Settings />} />
      </Menu>
    </Paper>
  </div>
);

export default NavSide;
