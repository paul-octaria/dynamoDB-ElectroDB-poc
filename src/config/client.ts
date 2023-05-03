/* istanbul ignore file */
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import DynamoDB from "aws-sdk/clients/dynamodb";
import {
  DYNAMODB_AWS_ACCESS_KEY_ID,
  DYNAMODB_AWS_SECRET_ACCESS_KEY,
  DYNAMODB_ENDPOINT,
  REGION,
} from "../constants";
import AWS from "aws-sdk";

/**
 * It is recomended that you use the dynamodb-local docker image for this example. For more
 * information on how to download visit: https://hub.docker.com/r/amazon/dynamodb-local
 *
 * If you intend on running this example against your own aws account, modify the config
 * to match your account. This includes *removing* the `endpoint` property, which is used
 * when connecting to the local docker dynamo instance described above.
 */

// AWS.config.update({
//   region: REGION,
//   accessKeyId: DYNAMODB_AWS_ACCESS_KEY_ID,
//   secretAccessKey: DYNAMODB_AWS_SECRET_ACCESS_KEY,
// });

export const configuration = {
  endpoint: DYNAMODB_ENDPOINT,
  region: REGION,
};

export const dynamodb = new DynamoDBClient(configuration);
