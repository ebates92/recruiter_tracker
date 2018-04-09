
export default function (state = 'All', action) {
    console.log(action)
    switch(action.type) {
        case 'SELECTED_posting':
            return [ action.payload ]
        default:
            return state
    }
}