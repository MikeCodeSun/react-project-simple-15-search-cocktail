import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-page">
      <h1>Opps.. Page not Found</h1>
      <Link className="btn " to="/">
        Back to Home
      </Link>
    </div>
  );
}
