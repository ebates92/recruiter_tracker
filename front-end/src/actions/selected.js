

export default function dataSelected(event) {
    let targetType = undefined;
    let targetId = undefined;

    if (event != undefined) {
        targetType = event.target.id
        targetId = event.currentTarget.accessKey
        if (event.currentTarget.id === 'card') {
            targetType = 'applicant'
        }
    }
    // let targetType = (event === undefined) ? null : event.target.id
    // let targetId = (event === undefined) ? null : event.currentTarget.accessKey
    // if (event.currentTarget.id === 'card') {
    //     targetType = 'applicant'
    // }

    return {
        type: `SELECTED_${targetType}`,
        payload: targetId
    }
}