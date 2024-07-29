import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
dotenv.config();

export const bucketName = process.env.AWS_BUCKET_NAME!;
export const region = process.env.AWS_REGION!;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const getPresignedUrl = async (key: string, expires: number = 900) => {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
  });

  try {
    const url = await getSignedUrl(s3Client, command, { expiresIn: expires });
    return url;
  } catch (error) {
    console.error("Error generating presigned URL", error);
    return null;
  }
};
