// eslint-disable-next-line react/prop-types
export default function Pagination({ currentPage, totalPages, handleNextPage, handlePreviousPage, }) {
    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md font-medium transition ${currentPage === 1
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-500 text-white"
                    }`}
            >
                Previous
            </button>

            <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md font-medium transition ${currentPage === totalPages
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-500 text-white"
                    }`}
            >
                Next
            </button>
        </div>
    );
}
