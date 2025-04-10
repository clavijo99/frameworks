import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [isUsers, setIsUsers] = useState(true)


  useEffect(
    () => {
      // 1 consumo de apis - servicios, fetch
      // ejecucion de codigo asincrono - promise y async await

      fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => {
          return response.json();
        }
      ).then(
        (data) => {
          console.log(data);


          setUsers(data);
        }
      );

      fetch('https://jsonplaceholder.typicode.com/todos').then(
        (response) => {
          return response.json();
        }
      ).then(
        (data) => {
          console.log(data);
          setTodos(data);
        }
      );
    }, []
  )

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 onClick={() => setIsUsers(true)}>Lista de usuarios</h2>
        <h2 onClick={() => setIsUsers(false)}>Lista de tareas</h2>
      </div>
      {
        isUsers ? <ul>
          {
            users.map((user) => {
              return (
                <div key={user.id}>
                  <h2>{user.name}</h2>
                </div>
              )
            })
          }
        </ul> : <ul>
          {
            todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <h2>{'todo name: ' +  todo.title}</h2>
                </div>
              )
            })
          }
        </ul>
      }

    </>
  )
}

export default App
