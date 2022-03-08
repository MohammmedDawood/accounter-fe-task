import React, { useEffect, useState } from "react";
import SearchResultListItem from "./SearchResultListItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";

const SearchResultList = () => {
  // Dummy data
  let todos = [
    {
      id: 1,
      title: "Software Engineer",
      description: "create react project",
    },
    {
      id: 2,
      title: "Software",
      description: "create react project",
    },
    {
      id: 3,
      title: "Engineer",
      description: "create react project",
    },
  ];
  //   const dispatch = useDispatch();
  //   const todos = useSelector((state) => state.todos);
  //   useEffect(() => {
  //     dispatch(getTodosAsync());
  //   }, [dispatch]);

  return (
    <>
      {/* // search element */}
      <div className="border border-dark mt-4 p-3 rounded-3">
        <ul className="list-group">
          {todos.map((todo) => (
            <SearchResultListItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchResultList;
