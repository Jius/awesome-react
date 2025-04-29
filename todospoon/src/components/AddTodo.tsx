import { useState } from "react"
import { db } from "../../db/db"

export const AddTodo = () => {
  const [description, setDescription] = useState("")

  const handleSubmit = async () => {
    try {
      // Add the new friend!
      const id = await db.todos.add({description, active: 1});

      console.info("Todos created", id)
      setDescription("")
    } catch (error) {
      console.error("Something wrong", error)
    }
  }

  return (
    <form>
      <label>Todo</label>
      <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

      <button type="button" onClick={handleSubmit}>Create</button>
    </form>
  )
}