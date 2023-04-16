import { storage } from "@/helper/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadModel = async (image: any) => {
  let uploadResult = '';

  if (image.name) {
    const storageRef = ref(storage);
    const ext = image.name.split('.').pop();
    const hashName = Math.random().toString(36).slice(-8);
    const fullPath = '/models/' + hashName + '.' + ext;
    const uploadRef = ref(storageRef, fullPath);

    // 'file' comes from the Blob or File API
    await uploadBytes(uploadRef, image).then(async function (result) {
      await getDownloadURL(uploadRef).then(function (url) {
        uploadResult = url;
      });
    });
  }

  return uploadResult;
}