/* eslint-disable react/prop-types */
const MyTable = ({
  data,
  columns,
  keyValue,
  crudOptions = true,
  nameTable = "anonimo",
}) => {
  return (
    <section className=" text-white px-10 py-4 w-full flex justify-center flex-col">
      <h2 className="text-2xl font-bold text-center py-4">{nameTable}</h2>
      {crudOptions && (
        <button
          className="font-bold bg-green-400 text-white rounded-md px-3 py-1 w-fit"
          type="button"
        >
          Add
        </button>
      )}
      <table>
        <thead>
          <tr className="border-b-slate-800 border-b-[4px] mb-4">
            {columns.map((column) => (
              <th className="p-1" key={column.field}>
                {column.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row[keyValue]}>
              {columns.map((column) => (
                <td key={column.field}>{row[column.field]}</td>
              ))}
              {crudOptions && (
                <td className="ml-4 flex gap-2 p-1">
                  <button
                    className="font-bold bg-yellow-400 text-black rounded-md px-3 py-1"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="font-bold bg-red-400 text-white rounded-md px-3 py-1"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyTable;
