import axios from 'axios';

const URL = 'http://localhost:3000'

export const FETCH_APPLICANTS = 'FETCH_APPLICANTS'

export function fetchapplicants() {
    const applicantRecords = axios.get(`${url}/api/applicants`)
        // .then(res => res.data)
        // .then(
        //     (applicantRecords) => {
        //         this.setState({
        //         applicantData: applicantRecords,
        //         applicantOptions: applicantRecords
        //         });
        //     },
        //     (error) => {
        //         this.setState({
        //         error
        //         })
        //     }
        // )

    return {
        type: FETCH_APPLICANTS,
        payload: applicantRecords
    };
}


// // componentDidMount() {
//     console.log('api request occurring')
//       axios.get(`${url}/api/postings`)
//         .then(res => res.data)
//         .then(
//           (postingRecords) => {
//             this.setState({
//               postingData: postingRecords,
//               postingOptions: postingRecords
//             });
//           },
//           (error) => {
//             this.setState({
//               error
//             })
//           }
//         )

        axios.get(`${url}/api/applicants`)
        .then(res => res.data)
        .then(
          (applicantRecords) => {
            this.setState({
              applicantData: applicantRecords,
              applicantOptions: applicantRecords
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )


//         axios.get(`${url}/api/postingApplicant`)
//         .then(res => res.data)
//         .then(
//           (postingApplicants) => {
//             console.log(postingApplicants)
//             this.setState({
//               postingApplicantData: postingApplicants,
//               newPostingApplicantData: postingApplicants
//             });
//           },
//           (error) => {
//             this.setState({
//               error
//             })
//           }
//         )

//         axios.get(`${url}/api/user`)
//         .then(res => res.data)
//         .then(
//           (userData) => {
//             this.setState({
//                 userData,
//             });
//           },
//           (error) => {
//             this.setState({
//               error
//             })
//           }
//         )
//     }
