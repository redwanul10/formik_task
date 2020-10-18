import * as Types from '../types'

const initialState = {
    donors: [],
    edit: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.ADD_DONOR:

            return {
                ...state,
                edit: false,
                donors: [{ ...action.payload.donorData }, ...state.donors]
            }


        case Types.DELETE_DONOR:

            const filter = state.donors.filter(donor => donor.id !== action.payload.id)
            return {
                ...state,
                donors: [...filter]
            }


        case Types.UPDATE_DONOR:

            const index = state.donors.findIndex(donor => donor.id === action.payload.donorData.id)
            const newState = state
            state.donors[index] = action.payload.donorData

            return {
                ...newState,
                edit: false,
            }

        case Types.EDIT_DONOR:

            return {
                ...state,
                edit: { ...action.payload.donorData }
            }

        case Types.CANCEL_EDIT:

            return {
                ...state,
                edit: false
            }

        default:
            return state
    }
}

export default reducer