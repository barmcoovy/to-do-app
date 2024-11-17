import React, { useState } from 'react'


const ToDo = () => {
    const [text,setText] = useState('');
    const [task,setTask] = useState([]);
    const [exists, setExists] = useState(false);   
    const [empty,setEmpty] = useState(false);
    const AddTask = ()=>{
        if(text!== ""){
            if(task.includes(text)){
                setExists(true);
                setText('');
            }else{
                setTask([...task,text]);
            setExists(false);
            setEmpty(false);
            }
        }
        else{
            setEmpty(true);
        }
        setText('');
    }
    const DeleteTask = (index)=>{
        setTask(task.filter((item,i)=> i !== index))
    }

    const styles={
        color:'red',
        fontStyle:'italic',
        fontSize:'20px'
    }
  return (
    <div>
        <input
            type='text'
            placeholder='Add a task'
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <input
            type='button'
            value={'Submit'}
            onClick={AddTask}
        />
        
        {task.map((item,index)=>{
            return <p key={index}>{item} <button onClick={() => DeleteTask(index)}>Delete</button></p>
        })}


        {exists ? <p style={styles}>Task already exists</p> : null}
        {empty ? <p style={styles}>Please enter a task</p> : null}
    </div>
  )
}

export default ToDo