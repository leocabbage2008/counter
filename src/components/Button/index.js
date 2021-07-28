import React from "react";

export default function Button({ handler, text, bgclr }) {
  return (
    <button
      onClick={handler}
      style={{ backgroundColor: bgclr, color: "white" }}
    >
      {text}
    </button>
  );
}
