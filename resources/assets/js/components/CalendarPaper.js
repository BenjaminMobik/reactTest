import Paper from 'material-ui/Paper';

const style = {
  height: '88vh',
  width: 200,
  margin: '16px 16px 16px 0px',
  textAlign: 'center',
  display: 'inline-block',
  float: 'left'
};

const CalendarPaper = () => (
  <div>
    <Paper style={style} zDepth={1} />
  </div>
);

export default CalendarPaper
