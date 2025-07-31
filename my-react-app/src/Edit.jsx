import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BASE_URL = 'https://667b7c5fbd627f0dcc92c24f.mockapi.io/todos'

export default function Edit() {
    const [todo, setTodo] = useState({
        name: ''
    })
    const { id } = useParams()
    async function fetchTodo(todoId) {
        try {
            const response = await axios.get(`${BASE_URL}/${todoId}`)
            setTodo(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    function handleDataUserChange(event){
        setTodo((previousState) =>({
            ...previousState,
            name: event.target.value
        }))
    }

    async function editData() {
        try{
            await axios.put(`${BASE_URL}/${id}`,{
                name: todo.name
            })
            alert("Updata Successful")
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTodo(id)
    },[id])
    return (
        <>
            <div>
                Edit Page {id}
            </div>
            <div>
                <img src={todo.avatar} width="300px" alt="" />
                <h1>{todo.name}</h1>
                <input type="text" onChange={handleDataUserChange} value={todo.name}  />
                <button onClick={editData}>Edit</button>
            </div>
        </>
    )
}