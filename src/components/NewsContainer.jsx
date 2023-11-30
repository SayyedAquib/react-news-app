import React from "react";
import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import NewsCard from "./NewsCard";

function NewsContainer() {
  const { news, isGrid, setIsGrid } = useContext(NewsContext);

  const toggleView = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={toggleView}
      >
        {isGrid ? "Switch to List View" : "Switch to Grid View"}
      </button>
      <div
        className={`flex ${
          isGrid ? "flex-wrap justify-center" : "flex-col items-center"
        }`}
      >
        {news.map((data) => (
          <NewsCard
            key={data.url}
            news={data}
            isGrid={isGrid}
            setIsGrid={setIsGrid}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsContainer;
