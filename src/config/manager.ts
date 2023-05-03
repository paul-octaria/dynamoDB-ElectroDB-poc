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
