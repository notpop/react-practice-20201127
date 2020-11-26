import React from "react";

export const ColorfulMessage = (props) => {
  const { color, message } = props;
  const contents_style = {
    color,
    fontSize: "18px"
  };

  return (
    <>
      <p style={contents_style}>Hi! {message}</p>
      <p style={contents_style}>Welcome to Website!</p>
    </>
  );
};
