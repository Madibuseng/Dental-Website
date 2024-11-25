import React from 'react';

function Map() {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4 h-96">
        <iframe
          src={`https://www.google.com/maps?q=-26.018716,28.014210&z=15&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
