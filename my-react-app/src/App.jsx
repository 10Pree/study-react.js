import Checkbox from "./components/Checkbox"
function App() {
  let todoList = [
    {
      text: "Codeing react",
      isChecked: false
    },
    {
      text: "Doing Document react",
      isChecked: true
    }
  ]
  return (
    <>
      <div>
        {
          todoList.map((todo, index) => (
            <Checkbox key={index} text={todo.text} isChecked={todo.isChecked} />
          ))
        }
      </div>
    </>
  )
}

export default App
