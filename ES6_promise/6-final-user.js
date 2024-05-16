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
    list.push({ status: 'fulfilled', value: signupResult })
    await uploadPhoto(fileName)
  } catch (error) {
    list.push({
      status: 'rejected',
      value: error.toString()
    })
  }
  return list
}
