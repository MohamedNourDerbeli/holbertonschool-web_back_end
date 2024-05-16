const { uploadPhoto, createUser } = require('./utils');

export default async function handleProfileSignup() {
  return Promise.all([
    uploadPhoto().then(photoResult => photoResult.body),
    createUser().then(userResult => userResult)])
    .then(([photo, user]) => {
      console.log(`${photo} ${user.firstName} ${user.lastName}`);
    })
    .catch(error => console.error("Signup system offline"));
};
