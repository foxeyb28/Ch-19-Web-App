import { openDB } from "idb";
import editor from "./editor";

const initdb = async () =>
  openDB("editor", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("editor")) {
        console.log("editor database already exists");
        return;
      }
      db.createObjectStore("editor", { keyPath: "id", autoIncrement: true });
      console.log("editor database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("putDb not implemented");
  const editorDb = await openDB("editor", 1);
  const tx = editorDb.transaction("editor", "readwrite");
  const store = tx.objectStore("editor");
  const request = store.put({ id: id, editor: content });
  const result = await request;
  console.log("data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("getDb not implemented");
  const editorDb = await openDB(editor, 1);
  const tx = editorDb.transaction("editor", "readonly");
  const store = tx.objectStore("editor");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
