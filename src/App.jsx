import CurrentLocation from "./Components/CurrentLocation";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <div
        className="bg-morning-image flex items-center justify-center h-screen bg-no-repeat bg-cover"
      >
        
      <Search/>
      <CurrentLocation/>
      </div>
      {/* <div>hello</div> */}
    </>
  );
}

export default App;
