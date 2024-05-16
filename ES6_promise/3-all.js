import { createUser, uploadPhoto } from './utils';

async function handleProfileSignup() {
  try {
    const result = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  } catch {
    return console.log('Signup system offline');
  }
}

export default handleProfileSignup;
