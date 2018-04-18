

export default function dataSelected(event) {
    console.log(event)
    let targetType = (event === undefined) ? null : event.target.id
    const targetId = (event === undefined) ? null : event.currentTarget.accessKey
    if (event.currentTarget.id === 'card') {
        targetType = 'applicant'
    }

    return {
        type: `SELECTED_${targetType}`,
        payload: targetId
    }
}