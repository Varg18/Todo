import React, {useState} from 'react'
import TodoItem from "./item/TodoItem";
import CreateTodo from "./CreateTodo/CreateTodo";

const data = [
    {
        _id: '0',
        title: 'Welcome to ', 
        isCompleted: false 
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
       const copy = [...todos]
       const current =  copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    const removeTodo = (id) => setTodos([...todos].filter(t => t._id !== id))



  return (
      <div className='text-white w-4/5 mx-auto'>
        <h1 className='text-2xl text-center mb-10 font-bold'>МоиЗадачи</h1>
        {todos.map(todo => (
            <TodoItem
                key={todo._id}
                todo={todo}
                changeTodo={changeTodo}
                removeTodo={removeTodo}
            />
        ))}
         <CreateTodo setTodos={setTodos} />
      </div>
  )
}

export default Home