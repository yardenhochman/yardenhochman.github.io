import React from 'react';
import text from './text';

const Bio = () => {
  const { myPicUrl, description } = text;
  return (
    <section className="container-fluid">
      <a name="bio" href="#bio">
        <h2>
          Hi!
        </h2>
      </a>
      <div className="bio">
        <div className="some_picture">
          <img className="profile_pic" alt="" src={myPicUrl} />
        </div>
        <div className="description-area">
          <p className="description">
            {description}
          </p>
        </div>
      </div>
      <div className="pageEnd" />

    </section>
  );
};
export default Bio;

/*
Todo:

-Make mobile version where the text fills the screen properly and looks better
-My Picture shows up after the text
-Replace picture
*/
