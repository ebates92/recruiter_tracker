

export default function dataSelected(event) {
    console.log('action triggered by selection')
    const targetType = (event === undefined) ? null : event.target.id
    const targetId = (event === undefined) ? null : event.currentTarget.accessKey
    return {
        type: `SELECTED_${targetType}`,
        payload: targetId
    }
}