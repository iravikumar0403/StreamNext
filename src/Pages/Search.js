import { Button, TextField } from "@material-ui/core";
import React from "react";

const Search = () => {
  return (
    <div>
      <TextField variant="outlined" label="Search" />
      <Button backgroundColor="secondary">Search</Button>
    </div>
  );
};

export default Search;
