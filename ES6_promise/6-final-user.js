import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'
export default async function handleProfileSignup (
  firstName,
  lastName,
  fileName
) {
	try {
		const list = []
    const user = await signUpUser(firstName, lastName)
    await uploadPhoto(user, fileName)
		return list.push({
			status: 'Done',
			value: user
		});
  } catch (error) {
		return list.push({
			status: 'rejected',
			value: error.toString()
		});
  }
}
