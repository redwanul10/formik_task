import React from 'react'
import {useField,ErrorMessage} from 'formik'


const SelectField = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <div class="form-group">
            <label >{label}</label>
            <select {...field} {...props} class="form-control" >
            {props.children}
            </select>
            <small id="emailHelp" class="form-text text-muted">
                <ErrorMessage name={props.name}/>
            </small>
        </div>
    )

}

export default SelectField