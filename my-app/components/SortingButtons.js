import React from "react";
import Button from "react-bootstrap/Button";

export default function SortingButtons() {
  return (
    <div className="row d-flex justify-content-center">
      <Button className="sortButtons" type="button">
        Sort by Category
      </Button>
      <Button className="sortButtons" type="button">
        Sort by Location
      </Button>
      <Button className="sortButtons" type="button">
        Sort by Date
      </Button>
    </div>
  );
}
