import React from 'react';

  const Bio = ({bio:{myPicUrl,description}}) => (
        <section className="container-fluid">
            <a name="bio"/>
            <div className="bio">
                <div className="some_picture"> 
                    <img className="profile_pic" src={myPicUrl} />
                </div>
                <div className="descriptionDiv">
                    <p className="description">{description}</p>
                </div>
            </div>
            <div className="pageEnd"/>
        </section>
   )
export default Bio;
