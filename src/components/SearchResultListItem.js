import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, changeStatusTodoAsync } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const SearchResultListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteTodobtn = () => {
    console.log("delete");
    console.log(todo.id);
    // dispatch event to redux
    dispatch(
      deleteTodoAsync({
        id: todo.id,
      })
    );
  };
  const ChangeStatusTodobtn = (statusvalue) => {
    console.log("Change Status");
    console.log(todo.id);
    // dispatch event to redux
    dispatch(
      changeStatusTodoAsync({
        id: todo.id,
        status: statusvalue,
      })
    );
  };

  const [showTodoInfo, setShowTodoInfo] = useState(false);
  return (
    <li className="list-group-item">
      {/* Todo Header */}
      <div className="d-flex justify-content-between row">
        <div className="d-flex align-items-center  m-1  col-sm-12 col-md-3 col-lg-3">
          <b>
            <h1>{todo.title}</h1>
            <p className="card-text">Description: {todo.description}</p>
          </b>
        </div>
        <div className="d-flex align-items-center  col-sm-12 col-md-3 col-lg-3">
          <button
            id={todo.id}
            className="btn btn-danger m-1"
            onClick={() => deleteTodobtn()}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default SearchResultListItem;
