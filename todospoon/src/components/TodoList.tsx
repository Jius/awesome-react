import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db/db";

export const TodoList = () => {
  const todos = useLiveQuery(() => db.todos.where("active").equals(1).toArray());
  const done_todos = useLiveQuery(() => db.todos.where("active").equals(0).toArray());

  const handleClick = async (e) => {
    try {
      const id = parseInt(e.target.value)
      const active = + !e.target.checked
      await db.todos.update(id, {active})

    } catch(err) {
      console.error("error", err)
    }    
  }

  return (
    <>
      Active todos
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={!todo.active} onClick={handleClick} value={todo.id} />
            {todo.description}
          </li>
        ))}
      </ul>

      Finished todos
      <ul>
        {done_todos?.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={!todo.active} onClick={handleClick} value={todo.id} />
            {todo.description}
          </li>
        ))}
      </ul>
    </>
    
  )
}