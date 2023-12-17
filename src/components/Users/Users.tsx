import Table from "../Table/Table";
import { FiUploadCloud } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { useGetAllUsersQuery } from "../../lib/redux/feature/user/userApiSlice";
import { useState } from "react";

const Users = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useGetAllUsersQuery({ page });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>

          <div>Loading ...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-16 space-y-6">
      <div className="flex justify-between items-center mt-6">
        <div className="">
          <h1 className="font-medium text-2xl ml-1 ">Users</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg border-gray-300 shadow-sm text-gray-600">
            <FiUploadCloud />
            <span className="font-semibold">Import</span>
          </button>
          <button className="flex  items-center gap-1 border px-4 py-2 rounded-lg border-gray-300 shadow-sm  bg-violet-500 text-white">
            <GoPlus size={20} color="white" />
            <span className="font-medium">Add User</span>
          </button>
        </div>
      </div>
      <Table page={page} setPage={setPage} data={data} />
    </div>
  );
};

export default Users;
