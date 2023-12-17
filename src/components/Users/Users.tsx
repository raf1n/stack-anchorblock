import Table from "../Table/Table";
import { FiUploadCloud } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
const Users = () => {
  const data = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    // ... other data items
  ];

  // ...

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
      <Table data={data} />
    </div>
  );
};

export default Users;
