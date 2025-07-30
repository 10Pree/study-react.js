import { useEffect, useState } from "react"
import axios from "axios"

const BASE_URL = 'https://667b7c5fbd627f0dcc92c24f.mockapi.io/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function fetchTodos() {
    try{
      const response = await axios.get(`${BASE_URL}`)
      setTodos(response.data)
      setLoading(false)
    }catch (error){
      console.log(error)
    }
  }
  async function deleteTodo(id) {
    try{
      setLoading(false)
      await axios.delete(`${BASE_URL}/${id}`)
      setLoading(true)
      await fetchTodos()
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{
    fetchTodos()
  }, [])
  return (
    <>
    {
      isLoading && <div>Loading...</div>
    }
    {
      !isLoading &&  <div>
        {
          todos.map((todo, index) => (
            <div key={index}>
              {todo.id} {todo.name}
              <button>Edit</button>
              <button onClick={async() =>{ await deleteTodo(todo.id)}}>Delete</button>
            </div>
          ))
        }
      </div>
    }
    </>
  )
}

export default App
