
export default function (state = null, action) {
    console.log(action)
    switch(action.type) {
        case 'SELECTED_applicant_posting':
            return action.payload
        default:
            return state
    }
}