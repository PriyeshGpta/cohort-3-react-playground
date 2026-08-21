const Pagination = ({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
}) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <div className="flex items-center justify-center gap-4 py-6">
            <button
                onClick={onPrevious}
                disabled={isFirstPage}
                className="
                    rounded-lg
                    border border-slate-700
                    bg-slate-900
                    px-4 py-2
                    text-sm font-medium text-slate-200
                    transition
                    hover:border-slate-600
                    hover:bg-slate-800
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    cursor-pointer
                "
            >
                Previous
            </button>

            <div className="min-w-[110px] text-center text-sm text-slate-300">
                <span className="font-semibold text-white">
                    {currentPage}
                </span>

                <span className="mx-1 text-slate-500">
                    of
                </span>

                <span>
                    {totalPages}
                </span>
            </div>

            <button
                onClick={onNext}
                disabled={isLastPage}
                className="
                    rounded-lg
                    border border-indigo-500/40
                    bg-indigo-600
                    px-4 py-2
                    text-sm font-medium text-white
                    transition
                    hover:bg-indigo-500
                    disabled:cursor-not-allowed
                    disabled:border-slate-700
                    disabled:bg-slate-800
                    disabled:text-slate-500
                    cursor-pointer
                "
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;