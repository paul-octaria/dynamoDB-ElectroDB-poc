/* istanbul ignore file */
import { dynamodb } from "./client";
import {
  CreateTableCommand,
  DeleteTableCommand,
  ListTablesCommand,
  UpdateTableCommand,
} from "@aws-sdk/client-dynamodb";
import { ListTablesCommandInput } from "@aws-sdk/client-dynamodb";
import { DeleteTableCommandInput } from "@aws-sdk/client-dynamodb";
import { tableDefinition, tableName } from "./definition";

// eslint-disable-next-line @typescript-eslint/no-var-requires

export function createTableManager() {
  return {
    async exists() {
      const tableParams: ListTablesCommandInput = {};
      const tables = await dynamodb.send(new ListTablesCommand(tableParams));

      return !!tables.TableNames.includes(tableName);
    },
    async drop() {
      const tableParams: DeleteTableCommandInput = {
        TableName: tableName,
      };
      return dynamodb.send(new DeleteTableCommand(tableParams));
    },
    async create() {
      return await dynamodb.send(new CreateTableCommand(tableDefinition));
    },
    // async update() {
    // return await dynamodb.send(new UpdateTableCommand(tableDefinition));
    // },
  };
}
