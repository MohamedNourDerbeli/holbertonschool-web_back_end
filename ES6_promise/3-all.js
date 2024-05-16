const { uploadPhoto, createUser } = require('./utils');
export default function handleProfileSignup() {
  Promise.all([
    uploadPhoto().then(photo => photo.body),
    createUser().then(user => user)
  ])
  .then(([photoBody, userBody]) => {
    // Log firstName and lastName from both bodies
    console.log(`firstName: ${photoBody.firstName}, lastName: ${userBody.lastName}`);
  })
    .catch(error => { console.log("Signup system offline") });
}
