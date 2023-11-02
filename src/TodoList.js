import React, {  useState } from 'react'

function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addActivity = () => {
    // setList([
    //   ...list, 
    //   task
    // ])
    setList((list) => {
      const updateList = [...list , task];
      setTask("");
      return updateList;
    })
  }

  const removeTask = (index) => {
    const updateList = list.filter((element , id) => {
      return index !== id;
    })
    setList(updateList);
  }

  const resetList = () => {
    setList([]);
  }

  return (
    <>
    <div className="container">
    <div className="header">TODO LIST</div>
    <input type="text" placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className='list-heading'>All Tasks</p>
    {list != null && list.map((data , index) => {
      return (
        <>
        <p key={index}>
          <div className='list-data'>{data}</div>
          <div className='btn-position'>
          <button onClick={() => removeTask(index)}>Remove</button>

          </div>
        </p>
        </>
      )
    })}
    {list.length >= 1 
      &&
           <button onClick={resetList}>Reset</button>
    }
    </div>
    </>
    
  )
}

export default TodoList