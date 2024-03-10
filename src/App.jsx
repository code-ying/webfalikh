import React from "react";
import falikh from "./assets/Image/falikh1.jpeg";
import { BsStars } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";

function App() {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <div className="w-full h-screen bg-[#2B3560]">
      <div className="absolute top-52 left-60">
        <BsStars className="text-8xl text-white" />
      </div>
      <div className="absolute top-52 right-60">
        <BsStars className="text-8xl text-white" />
      </div>
      <div className="absolute top-2/4 left-40">
        <BsStars className="text-8xl text-white" />
      </div>
      <div className="absolute top-3/4 left-80">
        <BsStars className="text-8xl text-white" />
      </div>
      <div className="absolute top-5/6 right-80">
        <BsStars className="text-8xl text-white" />
      </div>
      <div className="absolute top-[500px] right-80">
        <BsStars className="text-8xl text-white" />
      </div>
      <div className="m-auto py-20">
        <img
          src={falikh}
          alt=""
          className="w-60 h-60 m-auto rounded-full shadow-black shadow-lg"
        />
      </div>
      <div className="m-auto">
        <div className="flex">
          <h1 className="text-6xl font-serif m-auto text-white">
            To the Moon and Back
          </h1>
        </div>
        <div className="flex pt-5">
          <p className="m-auto text-3xl font-mono text-white">C'est la vie</p>
        </div>
        <div className="flex gap-4 pt-10">
          <div onClick={() => newTab("https://open.spotify.com/user/bj9uvgb3yqlcg8f96rsztkkmx?si=4b9zB9ZvQh-EPeTSNNgaAw&utm_source=copy-link")} className="m-auto flex items-center gap-4 py-3 px-10 rounded-xl cursor-pointer ease-in duration-200 hover:bg-white/20">
            <BsSpotify className="text-5xl text-[#1DB954] ease-in duration-200" />
          <p className="text-2xl font-serif text-white hover:text-black ease-in duration-200">ViperPaall</p>
          </div>         
        </div>
        <div className="text-white pt-28 flex w-full ">
          <p className="m-auto bg-black w-full py-3 text-center">
            &#169;2024 Ahmada. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
