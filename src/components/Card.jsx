import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";
function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-amber-600 sm:shadow-md rounded-lg sm:border sm:border-amber-500 sm:m-2 transition-shadow duration-200 m-8">
      <Link href={`/movie/${result.id}`}>
        <Image
          alt="movie-poster"
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 mb-2"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-xl font-bold truncate hover:text-amber-500 mt-2">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}{" "}
            <FaThumbsUp className="h-5 mr-1 ml-3 hover:text-amber-500" /> {result.vote_count}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
