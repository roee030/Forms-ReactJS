import React from "react";
import { MDBInput } from "mdbreact";
import "./Title.css";
export default function Title() {
  return (
    <div className="title-warpper">
      <form className="title-warpper-form">
        <MDBInput label="Headline" />
        <MDBInput label="Form describe" size="sm" />
      </form>
    </div>
  );
}
