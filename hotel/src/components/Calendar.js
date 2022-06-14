import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment'
import { Link } from "react-router-dom";
const Calendar = (props) => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker onChange={onChange} value={value} minDate={moment().toDate()} locale='fr-FR' className="form-date" />
      <div className="form-res">
        <Link to={{ pathname: "/checkout", state: {date: {value}, slug: props.slug}}} className="btn-primary">
        Reserver la chambre
        </Link>
      </div>
    </div>
  );
}

export default Calendar
