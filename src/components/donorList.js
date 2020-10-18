import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import * as Types from '../redux/types'

const DonorList = () => {

    // Hooks
    const { addToast } = useToasts()
    const donors = useSelector(state => state.donors)
    const dispatch = useDispatch()


    // Delete Donor Handler
    const deleteDonor = id => {
        dispatch({
            type: Types.DELETE_DONOR,
            payload: { id }
        })
        addToast('Deleted Successfully', { appearance: 'success' })
    }

    // Edit Donor Handler
    const editDonor = donorData => {
        dispatch({
            type: Types.EDIT_DONOR,
            payload: { donorData }
        })
    }

    return (
        <>
            <div className="donors_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 scroll-x ">
                            <h1 className="form_header text-center">Donor List</h1>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Group</th>
                                        <th scope="col">Birth</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {donors.map((donor, i) => (
                                        <tr>
                                            <th scope="row">{i}</th>
                                            <td>{donor.name}</td>
                                            <td>{donor.email}</td>
                                            <td>{donor.age}</td>
                                            <td>{donor.bloodGroup}</td>
                                            <td>{new Date(donor.birth).toLocaleDateString()}</td>
                                            <td>
                                                <button onClick={e => editDonor(donor)} className="button smallBTN">Edit</button>
                                                <button onClick={e => deleteDonor(donor.id)} className="button smallBTN btn_bg_2">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DonorList;