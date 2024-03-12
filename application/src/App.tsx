// import { useQuery } from "convex/react";
// import { api } from "../convex/_generated/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";

function App() {
  // const tasks = useQuery(api.task.get);
  // return (
  //   <>
  //     <div className="App">
  //       {tasks?.map(({ _id, text }) => <div className="" key={_id}>{text}</div>)}
  //     </div>
  //     <p className="text-3xl text-teal-500 font-bold underline">Hello I am the best</p>
  //   </>
  // );

  const content = (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Router>  
    </>
  )

  return content
}

export default App