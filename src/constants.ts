import * as dotenv from "dotenv";
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const envFile = process.env.ENV_FILE;
const config = envFile ? dotenv.config({ path: envFile }) : dotenv.config();
const parsedConfig = config.parsed || {};

export const REGION =
  parsedConfig.AWS_REGION ||
  (process.env.REGION ? process.env.REGION : "us-east-2");
export const DYNAMODB_ENDPOINT = parsedConfig.DYNAMODB_ENDPOINT;

// set keys for dynamodb locally, but not when deployed
export const DYNAMODB_AWS_ACCESS_KEY_ID =
  parsedConfig.DYNAMODB_AWS_ACCESS_KEY_ID;
export const DYNAMODB_AWS_SECRET_ACCESS_KEY =
  parsedConfig.DYNAMODB_AWS_SECRET_ACCESS_KEY;
