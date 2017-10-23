import React from 'react';

  const VC = ({vc}) => {
    return (
        <section className="screen2">
        <div className="some_picture"> 
          <img className="profile_pic" src={image} />
        </div>
        <div className="descriptionDiv">
          <p className="description">{description}</p>
        </div>
      </section>
   )
  }
export default VC;
