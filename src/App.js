import "./App.css";
import Navbar from "./components/Navbar";
import ToDoApp from "./views/ToDoApp";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <ToDoApp />
        </div>
    );
}

export default App;
