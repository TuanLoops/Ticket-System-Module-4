import React from "react";
import Open from "./Open";
import Pending from "./Pending";
import Resolved from "./Resolved";
import Closed from "./Closed";

const Status = ({ value }) => {
  if (value == 1) {
    return <Pending />;
  } else if (value == 2) {
    return <Open />;
  } else if (value == 3) {
    return <Resolved />;
  } else if (value == 4) {
    return <Closed />;
  }
};

export default Status;
