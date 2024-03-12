import Character from "./Character";
import { useState, useEffect } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const ChararterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center w-full">
        <button className=" bg-lime-500 shadow-md text-lime-950 shadow-lime-600 py-1 px-4 rounded-md ">
          <FaArrowLeftLong className="font-bold" />
        </button>
        <p className="gradient-text font-extrabold text-xl">Page: {page}</p>
        <button className=" bg-lime-500 shadow-md text-lime-950 shadow-lime-600 py-1 px-4 rounded-md ">
          <FaArrowRightLong className="font-bold"/>
        </button>
      </div>
      <div className="grid grid-cols-5 gap-5 z-10">
        {characters.map((character) => {
          return <Character key={character.id} Character={character} />;
        })}
      </div>
    </div>
  );
};

export default ChararterList;
