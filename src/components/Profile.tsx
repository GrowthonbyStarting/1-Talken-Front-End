import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_bar">
        <div className="profile_bar_image"></div>
        <div className="profile_bar_name"></div>
        <div className="profile_bar_job"></div>
        <div className="profile_bar_borderline"></div>
        <div className="profile_bar_contact"></div>
        <div className="profile_bar_hashtag"></div>
      </div>
    </div>
  );
}
