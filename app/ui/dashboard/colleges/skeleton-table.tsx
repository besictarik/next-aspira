const SkeletonCollegesTable = async () => {
  return (
    <div className="rounded-[1.25rem] bg-white p-[30px]">
      <table className="w-full">
        <thead>
          <tr className="flex w-full pb-[30px]">
            <th scope="col" className="basis-1/12">
              <span className="sr-only">Profile Images</span>
            </th>
            <th scope="col" className="basis-3/12 text-start">
              Name
            </th>
            <th scope="col" className="basis-1/12 text-start">
              Type
            </th>
            <th scope="col" className="basis-2/12 text-start">
              Address
            </th>
            <th scope="col" className="basis-1/12 text-start">
              Sector
            </th>
            <th scope="col" className="basis-3/12 text-start">
              Programs
            </th>
            <th scope="col" className="basis-1/12">
              <span className="sr-only">Edit & Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys([...new Array(5)]).map((index) => (
            <tr key={index} className="flex w-full items-center py-2">
              <td className="basis-1/12">
                <div className="h-8 w-8 rounded-full bg-gray-100" />
              </td>
              <td className="basis-3/12">
                <div className="h-6 w-48 rounded-md bg-gray-100" />
              </td>
              <td className="basis-1/12">
                <div className="h-6 w-16 rounded-md bg-gray-100" />
              </td>
              <td className="basis-2/12">
                <div className="h-6 w-32 rounded-md bg-gray-100" />
              </td>
              <td className="basis-1/12">
                <div className="h-6 w-16 rounded-md bg-gray-100" />
              </td>
              <td className="basis-3/12">
                <div className="h-6 w-48 rounded-md bg-gray-100" />
              </td>
              <td className="flex basis-1/12 gap-3">
                <div className="h-[38px] w-[38px] rounded-md bg-gray-100" />
                <div className="h-[38px] w-[38px] rounded-md bg-gray-100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonCollegesTable;
