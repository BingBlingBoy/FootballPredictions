// import { useQuery } from "convex/react";
// import { api } from "../convex/_generated/api";

// function App() {
//   const tasks = useQuery(api.task.get);
//   return (
//     <>
//       <div className="App">
//         {tasks?.map(({ _id, text }) => <div className="text-3xl font-bold underline" key={_id}>{text}</div>)}
//       </div>
//       <p className="text-3xl font-bold underline">Hello I am the best</p>
//     </>
//   );
// }
//
// export default App
export default function App() {
  return (
    <h1 className="text-3xl font-bold text-teal-300">
      Hello world!
    </h1>
  )
}