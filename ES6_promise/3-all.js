const { uploadPhoto, createUser } = require('./utils');
export default function handleProfileSignup() {
  Promise.all([
    uploadPhoto().then(photo => photo.body),
    createUser().then(user => user)
  ])
    .then(([photo, user]) => {
      console.log(photo, user.firstName, user.lastName);
    })
    .catch(error => { console.log("Signup system offline") });
}
