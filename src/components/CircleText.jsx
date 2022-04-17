import React from "react";

export default function CircleText(props) {
  const { text } = props;

  return (
    <div className="py-3">
      <span className="circle-text">{text}</span>
    </div>
  );
}
