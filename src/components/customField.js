import React from 'react'
import {useField} from 'formik'
import { ErrorMessage  } from 'formik'

const CustomField = ({ label,placeholder, ...props }) => {

    const [field, meta] = useField(props);
 
    return (
 
      <>
        <div class="form-group">
            <label for="exampleInputEmail1">{label}</label>
            <input {...props} {...field}
            class="form-control" 
            placeholder={placeholder?placeholder:""}
            />
            <small id="emailHelp" class="form-text text-muted">
            <ErrorMessage name={props.name}/>
            </small>
        </div>
 
        {/* <label>{label}</label>
        <input {...field} {...props} /> */}

        {/* {meta.touched && meta.error ? (
 
          <div className="error">{meta.error}</div>
 
        ) : null} */}
 
      </>
 
    );
 
  };

  export default CustomField