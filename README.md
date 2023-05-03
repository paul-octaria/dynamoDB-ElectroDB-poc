# DynamoDB-ElectroDB-poc

## Dependencies

### Docker

### docker-compose

### AWS CLI

### Localstack setup

```bash
vim ~/.aws/credentials
```

```
[fake]
region = us-east-2
aws_access_key_id = **NOT_REAL**
aws_secret_access_key = **FAKE_UNUSED_CREDS**
```

### DynamoDB admin

```bash
npm install -g dynamodb-admin
```

## Getting Started

Start the docker desktop app

```bash
yarn

docker-compose up
```

Run dynamoDB admin

```bash
# For Mac/Linux:

AWS_REGION=us-east-2 \
AWS_ACCESS_KEY_ID=local \
AWS_SECRET_ACCESS_KEY=local \
DYNAMO_ENDPOINT=http://localhost:4566 dynamodb-admin
# For Windows:
set DYNAMO_ENDPOINT=http://localhost:8000
set AWS_REGION=us-east-2
dynamodb-admin
```

```bash
yarn start:dev
```

## Shut down

```bash
docker-compose down
```

Exit dynamoDB admin process

## ElectroDB Dependencies/Setup

### electrodb

```bash
yarn add electrodb
```

## Configuring DynamoDB

modify main.ts

```typescript
await initializeTable();
```

create config/manager.15:18:37

```typescript
import { createTableManager } from "./table";

export const initializeTable = async (drop = false) => {
  const tableManager = createTableManager();
  let exists = await tableManager.exists();

  if (exists && drop) {
    await tableManager.drop();
    exists = false;
  }

  if (!exists) {
    await tableManager.create();
  }
};
```

create table.ts

```typescript

```

create client.ts

```typescript

```

create constants.ts

create .env.test

create definition.ts

```bash
yarn add aws-sdk @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb dotenv
```

modify tsconfig.json "resolveJsonModule": true
