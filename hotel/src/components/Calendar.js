import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment'

const Calendar = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker onChange={onChange} value={value} minDate={moment().toDate()} />
    </div>
  );
}

export default Calendar