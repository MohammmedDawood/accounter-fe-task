import React from "react";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SearchResultList = () => {
  // Dummy data
  let searchresults = [
    {
      title: "Software Engineer",
      description: "create react project a",
    },
    {
      title: "Software",
      description: "create react project b",
    },
    {
      title: "Engineer",
      description: "create react project c",
    },
  ];
  const deletebtn = (row) => {
    console.log("delete");
    console.log("table Id: " + row.row.id);
    console.log("real Item Id: " + row.row.original.id);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Search Results List",
        columns: [
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Description",
            accessor: "description",
          },
          {
            Header: "Delete",
            Cell: (row) => (
              <div>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => deletebtn(row)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ),
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
        <Table columns={columns} data={searchresults} />
      </div>
    </>
  );
};

export default SearchResultList;
