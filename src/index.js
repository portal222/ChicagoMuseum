import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";

// import { App } from "./App"; //ovo je primer export
import App from "./App"; //ovo je primer sa export default

// class App extends React.Component {
//     render() {
//         return (<h1>Hello from React, Webpack and Babel!</h1>);
//     }
// }


//stara sintaksa, React < 18
// ReactDOM.render(<App />, document.getElementById("app"));

//I nacin pozivanja komponente: <App />
//II nacin pozivanje komponente: <App></App>

//nova sintaksa, React 18
var root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
 <React.StrictMode>
<App
     number={10}
     title="String from index file" 
     text="Text from index file" />
      </React.StrictMode>,
     );

     
// ReactDOM.render(
    
//        <App />
  
//      document.getElementById('root')
//    );
