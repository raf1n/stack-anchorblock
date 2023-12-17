const Pagination = ({
  page,
  setPage,
  data,
}: {
  page: number;
  setPage: any;
  data: any;
}) => {
  return (
    <div className="border-t p-4 flex items-center gap-2 justify-between">
      <button
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
        className="text-[#344054] border border-gray-200 px-3 py-1 rounded-lg"
      >
        Previous
      </button>
      <h2 className="text-[#344054]">
        Page {data?.page} of {data?.total_pages}
      </h2>
      <button
        onClick={() => {
          if (page < data?.total_pages) {
            setPage(page + 1);
          }
        }}
        className="text-[#344054] border border-gray-200 px-3 py-1 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
