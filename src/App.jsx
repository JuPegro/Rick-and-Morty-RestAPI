import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-zinc-900 w-full flex justify-center items-center flex-col gap-1 relative">
      <img
        className="w-4/12 mt-0"
        src="src\assets\Rick-and-Morty.png"
        alt="Rick-and-Morty-Logo"
      />
      <CharacterList />
      {/* <Background /> */}
    </div>
  );
}

export default App;
