// db.ts
import Dexie, { type EntityTable } from 'dexie';

interface Todo {
  id: number;
  description: string;
  active: number;
}

const db = new Dexie('todospoon') as Dexie & {
  todos: EntityTable<
    Todo,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  todos: '++id, description, active' // primary key "id" (for the runtime!)
});

export type { Todo };
export { db };
