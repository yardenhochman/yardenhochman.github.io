import React from 'react';

const Bio = ({ bio: { myPicUrl, description } }) => (
  <section className="container-fluid">
    <a name="bio" />
    <h2>Hi!</h2>
    <div className="bio">
      <div className="some_picture">
        <img className="profile_pic" src={myPicUrl} />
      </div>
      <div className="descriptionDiv">
        <p className="description">{description}</p>
      </div>
    </div>
    <div className="pageEnd" />
  </section>
);
export default Bio;

/* 
Todo:

-Make mobile version where the text fills the screen properly and looks better
-My Picture shows up after the text
-Replace picture
*/
