import React from "react";
import "./LoadingSpinner.css";

export default function LoadingSpinner({size="normal"}) {
    let classs="loading-spinner-"+size
  return (
    <div className="spinner-container">
      <div className={classs}></div>
    </div>
  );
}