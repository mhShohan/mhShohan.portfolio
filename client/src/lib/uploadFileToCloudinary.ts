import { config } from "@/utils/config";

const uploadFileToCloudinary = async (image: File) => {
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', config.cloudinaryUploadPreset as string);
  data.append('cloud_name', config.cloudinaryCloudName as string);
  data.append('folder', 'mhShohan-portfolio');

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${config.cloudinaryCloudName}/image/upload`,
      {
        method: 'POST',
        body: data,
      }
    );
    const res = await response.json();

    if (res.secure_url) {
      return res.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    return null
  }
}

export default uploadFileToCloudinary;