import {
  CreateTableCommandInput,
  GlobalSecondaryIndex,
  KeySchemaElement,
  ProvisionedThroughput,
} from "@aws-sdk/client-dynamodb";
import { AttributeDefinition, BillingMode } from "aws-sdk/clients/dynamodb";
const attributes: AttributeDefinition[] = [
  {
    AttributeName: "pk",
    AttributeType: "S",
  },
  {
    AttributeName: "sk",
    AttributeType: "S",
  },
  {
    // Validation Exception: The number of attributes in key schema must match the number of attributes in attributes definitions
    // Only attributes used in key schema or gsi/lsi need to be defined here
    AttributeName: "gsi1pk",
    AttributeType: "S",
  },
  {
    AttributeName: "gsi1sk",
    AttributeType: "S",
  },
];

const keySchema: KeySchemaElement[] = [
  {
    AttributeName: "pk",
    KeyType: "HASH",
  },
  { AttributeName: "sk", KeyType: "RANGE" },
];

const globalSecondaryIndexes: GlobalSecondaryIndex[] = [
  {
    IndexName: "gsi1pk-gsi1sk-index",
    KeySchema: [
      { AttributeName: "gsi1pk", KeyType: "HASH" },
      { AttributeName: "gsi1sk", KeyType: "RANGE" },
    ],
    Projection: {
      ProjectionType: "ALL",
    },
    // ProvisionedThroughput: { // ProvisionedThroughput not needed with billingMode = PAY_PER_REQUEST
    //   ReadCapacityUnits: 1,
    //   WriteCapacityUnits: 1,
    // },
  },
];

const provisionThroughput: ProvisionedThroughput = {
  ReadCapacityUnits: 1000,
  WriteCapacityUnits: 1000,
};

const billingMode: BillingMode = "PAY_PER_REQUEST";

export const tableName = `testing-local`;

export const tableDefinition: CreateTableCommandInput = {
  TableName: tableName,
  KeySchema: keySchema,
  AttributeDefinitions: attributes,
  GlobalSecondaryIndexes: globalSecondaryIndexes,
  // ProvisionedThroughput: provisionThroughput,
  BillingMode: billingMode,
};
