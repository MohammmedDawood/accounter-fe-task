import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const SearchGoogleCard = () => {
  const [content, setContent] = useState("");
  const [keyword, setKeyword] = useState("");
  const [description, setDescription] = useState("");

  //  set search keyword in input
  const searchforKeyword = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  useEffect(() => {
    // debounce or throttle search key word
    const delayDebounceFn = setTimeout(() => {
      if (keyword && keyword.trim().length > 0) {
        // make a request to node to search for the keyword
        UserService.getSearchResult(keyword.trim()).then(
          (response) => {
            console.log(response.data);
            setDescription(response.data.description);
          },
          (error) => {
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setDescription(_content);
          }
        );
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [keyword]);

  const onSubmit = (event) => {
    event.preventDefault();
    //todo: add search result to the database
  };
  const clearHelperFun = () => {
    // reset form
    setKeyword("");
    setDescription("");
  };

  return (
    <div>
      <header className="jumbotron mt-3">
        <h3>{content}</h3>
      </header>
      <div className="border border-dark mt-4 p-3 rounded-3">
        <form onSubmit={onSubmit} className="form-inline ">
          <div className="row justify-content-md-center">
            {/* Keyword */}
            <div className="col-lg-4 col-md-4">
              <div className="input-group mb-2 mr-sm-2 col-3">
                <span className="input-group-text">Keyword</span>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Keyword..."
                  value={keyword}
                  onChange={searchforKeyword}
                ></input>
              </div>
            </div>

            {/* Description */}
            <div className="col-lg-8 col-md-8">
              <div className="input-group mb-2 mr-sm-2 col-3">
                <span className="input-group-text mb-2 mr-sm-2">
                  Description
                </span>
                <textarea
                  className="form-control mb-2 mr-sm-2"
                  disabled
                  placeholder="Description..."
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-end">
            {/* Clear Button */}
            <button
              onClick={clearHelperFun}
              className="btn btn-secondary me-2 col-2"
            >
              Clear
            </button>
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary me-2 col-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchGoogleCard;
