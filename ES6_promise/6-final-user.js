import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'
export default async function handleProfileSignup (
  firstName,
  lastName,
  fileName
) {
  const list = []
  try {
    const [signupResult] = await signUpUser(firstName, lastName)
    const [photoUploadError] = await uploadPhoto(fileName)
    return [
      {
        status: 'fulfilled',
        value: signupResult
      },
      {
        status: 'rejected',
        value: photoUploadError
      }
    ]
  } catch (error) {
    return [{ status: 'rejected', value: error }]
  }
}
