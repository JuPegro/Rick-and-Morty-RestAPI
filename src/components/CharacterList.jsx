import Character from "./Character";
import { useState, useEffect } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const ChararterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    }

    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col gap-3">
      {loading ? (
        <img
        className="w-4/12 mt-0"
        src="src\assets\Rick-and-Morty-Port.gif"
        alt="Rick-and-Morty-Logo"
      />
      ) : (
        <>
          <div className="flex justify-between items-center w-full">
            <button
              className=" bg-lime-500 shadow-md text-lime-950 shadow-lime-600 py-1 px-4 rounded-md "
              onClick={() => setPage(page - 1)}
            >
              <FaArrowLeftLong className="font-bold" />
            </button>
            <p className="gradient-text font-extrabold text-xl">Page: {page}</p>
            <button
              className=" bg-lime-500 shadow-md text-lime-950 shadow-lime-600 py-1 px-4 rounded-md "
              onClick={() => setPage(page + 1)}
            >
              <FaArrowRightLong className="font-bold" />
            </button>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 z-10">
            {characters.map((character) => {
              return <Character key={character.id} Character={character} />;
            })}
          </div>
          <div className="flex justify-between items-center w-full">
            <button
              className=" bg-lime-500 shadow-md text-lime-950 shadow-lime-600 py-1 px-4 rounded-md "
              onClick={() => setPage(page - 1)}
            >
              <FaArrowLeftLong className="font-bold" />
            </button>
            <p className="gradient-text font-extrabold text-xl">Page: {page}</p>
            <button
              className=" bg-lime-500 shadow-md text-lime-950 shadow-lime-600 py-1 px-4 rounded-md "
              onClick={() => setPage(page + 1)}
            >
              <FaArrowRightLong className="font-bold" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChararterList;
