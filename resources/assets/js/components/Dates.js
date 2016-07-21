import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';

function sunday(day) {
  return day.getDay() === 0;
}

var Dates = React.createClass ({
  getInitialState: function() {
    return {
      selectedDay: new Date()
    }
  },
  handleDayClick: function(e, day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: new Date() })
    } else {
      this.setState({ selectedDay: day });
    }
  },
  render() {
    return (
      <DayPicker
        initialMonth={ new Date(2016, 5) }
        disabledDays={ sunday }
        selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
        onDayClick={ this.handleDayClick }
    />);
  }
});

export default Dates
