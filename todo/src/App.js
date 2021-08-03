import './App.css';
import Header from "./Components/header"
import { Todos } from "./Components/Todos"
import { Footer } from "./Components/Footer"
import React,{useState} from "react";



function App(todo) {
  
  const onDelete= (todo) => {
      console.log("I am OnDelete",todo)
      setTodos(todos.filter((e)=>{
        return e!==todo;

      })

      )
    };



  const [todos, setTodos] = useState([

   
    {
      sno:1,
      title:"Learn React Native",
      desc: "Create Landing Page till 16 August"

    },
    {
      sno:2,
      title:"Learn React Native",
      desc: "Make Awesome Apps"

    },
    {
      sno:3,
      title:"Learn React Native",
      desc: "Make a Great Project"

    }
  ])
  
  
  return (
   <>
   <Header title= "Todos List" searchbar={false}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>

   
   </>
   //Always use a Capital Heading otherwise it interprets it for a HTML Tag
   // Props are used to parse items from Parent file to child File
   // Gives an Error in Console because of a Number input value and A deafult Proptype as a String.\
   // Parsed Todos using todos={todos}

 

  );
  }



export default App;
