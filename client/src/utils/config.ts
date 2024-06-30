export const config = {
  // baseUrl: 'http://localhost:8000/api/v1',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  cloudinaryCloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  cloudinaryUploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
}