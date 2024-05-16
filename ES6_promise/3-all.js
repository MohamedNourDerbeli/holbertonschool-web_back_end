const { uploadPhoto, createUser } = require('./utils');
export default function handleProfileSignup() {
  Promise.all([
    uploadPhoto().then(photo => photo.body),
    createUser().then(user => user)
  ])
    .then(([photoBody, userBody]) => {
      console.log(photoBody, userBody.firstName, userBody.lastName);
    })
    .catch(error => { console.log("Signup system offline") });
}
