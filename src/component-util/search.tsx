import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  return (
    
      <TextField
        id="search"
        type="search"
        label="Search member by name"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: '100%' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
 
  );
}
export default SearchBar;