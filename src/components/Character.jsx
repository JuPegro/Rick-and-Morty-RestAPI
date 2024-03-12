import React from "react";

const Character = ({ Character }) => {
  return (
    <div className="border border-lime-500 shadow-md shadow-lime-800 rounded-lg bg-zinc-800 glass-container">
      <img
        className="rounded-t-lg w-full h-4/6"
        src={Character.image}
        alt={Character.name}
      />
      <div className="mx-4 mt-2 flex flex-col gap-2">
        <h2 className="font-bold text-white text-lg">{Character.name}</h2>
        <div className="flex gap-4">
          <p className="text-slate-300 text-sm font-medium">{Character.species}</p>
          <p
            className={
              Character.gender === "Male"
                ? "bg-lime-950 text-lime-500 border-lime-500 border px-2 rounded-lg text-sm "
                : Character.gender === "Female"
                ? "bg-teal-950 text-teal-300 border-teal-300 border px-2 rounded-lg text-sm "
                : "bg-rose-950 text-rose-500 border-rose-500 border px-2 rounded-lg text-sm "
            }
          >
            {Character.gender}
          </p>
        </div>
        <p className="text-slate-300 text-xs">{Character.origin.name}</p>
      </div>
    </div>
  );
};

export default Character;
