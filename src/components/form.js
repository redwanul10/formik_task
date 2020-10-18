import React from 'react';
import { Form, Field, Formik } from 'formik'
import CustomField from './customField'
import SelectField from './selectField'
import validationSchema from '../utill/validationSchema'
import DateField from './dateField';
import { useDispatch, useSelector } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import * as Types from '../redux/types'
import uid from 'uid'

const FormSection = () => {

    // Hooks
    const dispatch = useDispatch()
    const { addToast } = useToasts()
    const editData = useSelector(state => state.edit)

    // Add Donor
    const addDonor = donorData => {
        dispatch({
            type: Types.ADD_DONOR,
            payload: { donorData }
        })
    }

    // Update Donor
    const updateDonor = donorData => {
        dispatch({
            type: Types.UPDATE_DONOR,
            payload: { donorData }
        })
    }

    // Initial Form Values
    const initialValues = {
        name: "",
        email: "",
        age: "",
        bloodGroup: "",
        birth: ""
    }

    //  HandleSubmit , AddDonor and UpdateDonor
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        if (!editData) {
            // Add Donor
            addDonor({ ...values, id: uid(15) })
            addToast('Added Successfully', { appearance: 'success' })
        } else {
            // Update Donor
            updateDonor({ ...editData, ...values })
            addToast('Updated Successfully', { appearance: 'success' })
        }
        resetForm(editData || initialValues)
        setSubmitting(false);
    }

    // CancelHandelar
    const cancelEdit = () => {
        dispatch({
            type: Types.CANCEL_EDIT
        })
    }

    // Handle Form Validation
    const handleValidate = values => {
        return validationSchema.validate(values, { abortEarly: false })
            .then(() => ({}))
            .catch(err => {
                let error = {}
                err.inner.forEach(fieldError => {
                    error[fieldError.path] = fieldError.message
                })
                addToast('Error Occured', { appearance: 'error' })
                return error
            })
    }

    return (
        <div className="form_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="form_header text-center">{editData ? "Edit" : "Add"} Blood Donor</h1>
                        <Formik
                            initialValues={editData || initialValues}
                            enableReinitialize={true}
                            validate={handleValidate}
                            validateOnBlur={false}
                            validateOnChange={false}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, values, setFieldValue }) => (

                                <Form >
                                    <CustomField label="Name" type="text" name="name" />
                                    <CustomField label="Email" type="email" name="email" />
                                    <CustomField label="Age" type="number" name="age" />
                                    <DateField label="Birth" selected={values['birth']} handleChange={setFieldValue} name="birth" />

                                    <SelectField
                                        label="Select Blood Group"
                                        name="bloodGroup"
                                    >
                                        <option value="...">.....</option>
                                        <option value="A-">A-</option>
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB-">AB-</option>
                                        <option value="AB-">AB-</option>
                                    </SelectField>

                                    <button className="button" type="submit" disabled={isSubmitting}>{!editData ? "Submit" : "Update"}</button>
                                    {editData && (
                                        <button className="button" onClick={cancelEdit} >cancel</button>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSection;