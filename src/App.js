import './App.js';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useTodo } from './hooks/useTodo.js';

function App() {

   const {  handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
    handleActualizarTodo,
    todos,
    todosCount,
    pendingTodosCount} = useTodo();

    return(
        <>
         <div className='card-to-do'>
            <h1>Lista De Tareas</h1>
           <div className='counter-todos'>
             <h3>N° Tareas: <span>{todosCount}</span></h3>
             <h3> Pendientes: <span>{pendingTodosCount}</span></h3>
           </div>
          
          {/*Agregar nueva tarea */}
           <div className='add-todo'>
             <h3>Agregar Tareas</h3>
             <TodoAdd handleNewTodo={handleNewTodo}/>
             
           </div>

           <TodoList
           
           todos={todos}
           handleUpdateTodo={handleUpdateTodo}
           handleDeleteTodo={handleDeleteTodo}
           handleCompleteTodo={handleCompleteTodo}
           handleActualizarTodo={handleActualizarTodo}
           
           />
         </div>

        
        </>
    );
}
export default App;