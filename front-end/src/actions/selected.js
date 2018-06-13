

export default function dataSelected(event, postingData, applicantData, postingApplicantData) {
    let targetType = undefined;
    let targetId = undefined;
    let currentApplicantPosting = [undefined];
    let currentApplicant = [undefined];
    let currentPosting = [undefined];
    let data = null;

    if (event != undefined) {
        targetType = event.target.id
        targetId = event.currentTarget.accessKey
        if (event.currentTarget.id === 'card') {
            targetType = 'applicant_posting'
        }
    }

    // INCLUDES ALL THE SPECIFIC DATA RELATED TO THIS APPLICANT POSTING
    if (postingData != undefined && applicantData != undefined && postingApplicantData != undefined) {
        currentApplicantPosting = postingApplicantData.filter((postingApplicant) => {
            return (postingApplicant.id === parseInt(targetId))
          })
        currentApplicant = applicantData.filter((data) => {return data.id === parseInt(currentApplicantPosting[0].applicantId)})
        currentPosting = postingData.filter((data) => { return data.id === parseInt(currentApplicantPosting[0].postingId)})
        data = {id: targetId, applicantData: currentApplicant[0], applicantPostingData: currentApplicantPosting[0], postingData: currentPosting[0]}
    }

    return {
        type: `SELECTED_${targetType}`,
        payload: data
    }
}