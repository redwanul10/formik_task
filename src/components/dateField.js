import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import { useField, ErrorMessage } from 'formik'
import "react-datepicker/dist/react-datepicker.css";

const DateField = (props) => {

    console.log(props)

    const [startDate, setStartDate] = useState(new Date());
    // const [field, meta] = useField(props);

    const handleChange = date => {
        props.handleChange('birth', date)
    }

    return (
        <div class="form-group">
            <label >{props.label}</label>

            <DatePicker
                className="form-control"
                wrapperClassName="d-block"
                selected={props.selected || ""}
                onChange={handleChange}
            />

            <small id="emailHelp" class="form-text text-muted">
                <ErrorMessage name={props.name} />
            </small>
        </div>

    );
}

export default DateField;