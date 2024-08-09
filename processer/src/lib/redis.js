import Redis from "ioredis";
import { ENV } from "../constant/env.js";

const redis = new Redis(ENV.REDIS_URL);

export const markVideoAsProcessed = async (key, value) => {
  await redis.set(key, value);
};
