import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/filter/FilterSlice";

export default function Pagination({ length }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const prevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  return (
    <div className="flex">
      <button
        disabled={currentPage === 1}
        onClick={prevPage}
        className="mx-1 flex items-center justify-center rounded-md bg-white px-4 py-2 transition-colors duration-300 hover:bg-blue-500 hover:text-white disabled:bg-gray-400 disabled:text-current"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        disabled={length - currentPage * 6 <= 0}
        onClick={nextPage}
        className="mx-1 flex transform items-center justify-center rounded-md bg-white px-4 py-2 transition-colors duration-300 hover:bg-blue-500 hover:text-white disabled:bg-gray-400 disabled:text-current"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
