import React from "react";
import { Link } from "react-router-dom";

function NewsCard({ news, isGrid, setIsGrid }) {
  const event = new Date(news?.publishedAt);

  if (news.urlToImage) {
    return (
        <div
          className={`${
            isGrid ? "w-96 h-96" : "flex w-4/5"
          } shadow-md rounded-md cursor-pointer bg-white overflow-hidden m-4`}
        >
          <div>
            <img
              className={`${
                isGrid ? "w-full h-48 object-cover" : "h-60 min-w-[450px]"
              }`}
              src={news?.urlToImage}
              alt="news-image"
            />
          </div>
          <div className="card-content p-4">
            <h3 className="text-xl font-bold mb-2"> {news?.title} </h3>
            <h6 className="text-gray-500 text-sm mb-2">
              {event.toLocaleString()}
            </h6>
            <p className="text-gray-700 line-clamp-2"> {news?.description} </p>
          </div>
        </div>
    );
  }

  return null;
}

export default NewsCard;
