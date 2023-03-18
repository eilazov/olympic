import { Routes, Route } from "react-router-dom";

import Traffic from "./pages/Traffic";
import Csv from "./pages/Csv";
import Overview from "./pages/Overview";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import app from "./app.module.css"
export function App() {
  // fetch('http://localhost:8080/api/addresses').then(console.log).catch(console.error);
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Traffic />}/>
        <Route path="/csv" element={<Csv />}/>
        <Route path="/overview" element={<Overview />}/>
      </Routes>
     </>
  );
}
export default App;
