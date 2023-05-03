import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { initializeTable } from "./config/manager";

async function bootstrap() {
  await initializeTable();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
