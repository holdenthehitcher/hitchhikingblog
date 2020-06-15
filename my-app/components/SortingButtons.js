import React from "react";
import Button from "react-bootstrap/Button";

export default function SortingButtons() {
  return (
    <div className="row">
      <div className="col-lg-2">
        <Button type="button">Sort by Category</Button>
      </div>
      <div className="col-lg-2">
        <Button type="button">Sort by Location</Button>
      </div>
      <div className="col-lg-2">
        <Button type="button">Sort by Date</Button>
      </div>
    </div>
  );
}
