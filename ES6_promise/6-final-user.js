import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'
export default async function handleProfileSignup (
  firstName,
  lastName,
  fileName
) {
  const list = []
  try {
    const user = await signUpUser(firstName, lastName)
    await uploadPhoto(user, fileName)
		list.push({
			status: 'Done',
			value: user
		});
    return list
  } catch (error) {
		list.push({
			status: 'rejected',
			value: error.toString()
		});
		return list;
  }
}
