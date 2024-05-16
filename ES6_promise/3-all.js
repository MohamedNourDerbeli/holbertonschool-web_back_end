const { uploadPhoto, createUser } = require('./utils');
export default async function handleProfileSignup() {
  try {
    const [photoResult, userResult] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);
    console.log(photoResult.body, userResult.firstName, userResult.lastName);
  } catch (error) {
    console.log("Signup system offline");
  }
}
