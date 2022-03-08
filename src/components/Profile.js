import React, { useState } from "react";
import SearchGoogleCard from "./SearchGoogleCard";
import SearchResultList from "./SearchResultList";
import UserInfoCard from "./UserInfoCard";
import countriesData from "../data/countries.js";
import Table from "./Table";

const Profile = () => {
  const [countries] = useState([...countriesData]);

  return (
    <div>
      <UserInfoCard />
      <SearchGoogleCard />
      {/* <SearchResultList /> */}
      {/* <Table data={countries} rowsPerPage={4} /> */}
    </div>
  );
};

export default Profile;
