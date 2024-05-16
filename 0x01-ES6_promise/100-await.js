// 100-await.js
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photo, user] = await Promise.all([photoPromise, userPromise]);

    return { photo, user };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
