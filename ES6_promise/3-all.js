const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((ressult) => {
      console.log(`${ressult[0].body} ${ressult[1].firstName} ${ressult[1].lastName}`);
    })
    .catch(() => console.log("Signup system offline"));
}
