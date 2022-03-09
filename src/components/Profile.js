import React, { useState } from "react";
import SearchGoogleCard from "./SearchGoogleCard";
import UserInfoCard from "./UserInfoCard";
import SearchResultList from "./SearchResultList";

const Profile = () => {
  return (
    <div>
      <UserInfoCard />
      <SearchGoogleCard />
      <SearchResultList />
    </div>
  );
};

export default Profile;
