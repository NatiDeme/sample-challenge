import "./App.css";
import Nav from "./components/nav";

function App() {
  const n = 55;
  return (
    <>
      <Nav />
      <div className="App w-screen flex justify-center items-center h-screen">
        <div className="flex flex-wrap w-1/4 gap-0.5">
          {[...Array(n)].map((e, i) => {
            return (
              <div className="h-10 w-10 bg-black rounded-2xl" key={i}></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
