import React from "react";
import Table from "./Table";

const SearchResultList = () => {
  // Dummy data
  let searchresults = [
    {
      id: 1,
      title: "Software Engineer",
      description: "create react project a",
    },
    {
      id: 2,
      title: "Software",
      description: "create react project b",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project c",
    },
  ];
  const columns = React.useMemo(
    () => [
      {
        Header: "Search Results List",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Description",
            accessor: "description",
          },
        ],
      },
    ],
    []
  );

  // const data = React.useMemo(() => searchresults, []);

  return (
    <>
      {/* // search element */}
      <div className="border border-dark mt-4 p-3 rounded-3">
        {/* <h1>SearchResultList</h1> */}
        <Table columns={columns} data={searchresults} />
      </div>
    </>
  );
};

export default SearchResultList;
