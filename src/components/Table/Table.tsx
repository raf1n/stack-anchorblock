import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Pagination from "../Pagination/Pagination";
interface TablePropType {
  data: any;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const Table = ({ data, setPage, page }: TablePropType) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full overflow-auto">
        <div className="p-1.5 w-[800px] lg:w-full align-middle">
          <div className="w-full border rounded-lg shadow-sm ">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="rounded bg-white border-gray-300 text-violet-500 focus:ring-white"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    User Info
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    About
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.data?.map((row: any, rowIndex: any) => (
                  <tr key={rowIndex}>
                    <td className="py-3 pl-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded bg-white border-gray-300 text-violet-500 focus:ring-white"
                        />
                      </div>
                    </td>
                    <td className="py-3 pl-4">
                      <div className="flex items-center">
                        {row.avatar && (
                          <img
                            src={row.avatar}
                            alt={`Avatar for ${row.first_name} ${row.last_name}`}
                            className="h-8 w-8 rounded-full mr-2"
                          />
                        )}
                        <div>
                          <div className="font-medium text-gray-800">
                            {`${row.first_name} ${row.last_name}`}
                          </div>
                          <div className="text-xs text-gray-500">
                            {row.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap">
                      {/* Static "About" column */}
                      <span className="text-sm ">
                        <span className="font-medium">Some static info</span>
                        <br />
                        <span className="text-sm text-gray-500">
                          Lorem ipsum dolor shshds.
                        </span>
                      </span>
                      <br />
                    </td>
                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap">
                      {/* Static "Status" column */}
                      <span className="bg-green-100 text-sm px-3 py-[2px] font-medium rounded-xl text-green-700">
                        Random Sticker Label
                      </span>
                    </td>
                    <td className="px-4 py-4 flex mt-2">
                      <button className="text-gray-500 mr-2">
                        <FiTrash2 size={20} />
                      </button>
                      <button className="text-gray-500 mr-2">
                        <FiEdit2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination data={data} setPage={setPage} page={page} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
