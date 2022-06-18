import Header from "../header/header.jsx";
import "./_normalize.sass";
import "./App.css";
import Main from "../main/main.jsx";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <Main />
            </div>
        </div>
    );
}

export default App;
