import React, { useEffect, useState } from "react";

function AnnouncementBanner({ text }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000); // 10 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div
        className={`announcement-banner ${!visible ? 'fadeOut' : ''}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          backgroundColor: "#95202A",
          color: "#FFFFFF",
          padding: "0px",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
        <p
          className="marquee"
          style={{
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {text} <a href="https://ibb.co/JkYBF6y" target="_blank" style={{color: '#dea34e'}}> Cliquez ici pour voir l&apos;image</a>
        </p>
      </div>
    )
  );
}

export default AnnouncementBanner;
