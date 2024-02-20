// DocCard.js

import React from 'react';

const DocCard = ({ doctor }) => {
  const imgUrl = "/" + doctor.thumbnail.replace(/\\/g, '/');

  return (
    <div className="doc-card">
      <h2>{doctor.name}</h2>
      <img src={imgUrl} alt={doctor.name} />
      <p>{doctor.speciality}</p>
      <p>
        <a href={`tel:${doctor.number}`}>{doctor.number}</a>
      </p>
      <p>
        <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
      </p>
      {/* <a href={`/doctorsdash/${doctor._id}`}>Read more</a> */}
    </div>
  );
};

export default DocCard;
