import Select from "react-select";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import SearchIcon from "@mui/icons-material/Search";
import Filter from "../Components/Filter";
// import { useState } from "react";
const customStyles = {
  control: (base, state) => ({
    ...base,
    fontSize: 16,
    boxShadow: state.isFocused ? 0 : 0,
    cursor: "text",
    backgroundColor: "#0e7b65",
    textAlign: "center",
    border: "none",
    borderRadius: "0",
    width: "100%",
    margin: 0,
    padding: 0,
    marginTop: "1px",
  }),

  option: (styles, { isFocused }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: isFocused ? "#0e7b65" : "white",
      color: isFocused ? "white" : "black",
    };
  },

  input: (styles) => ({
    ...styles,
    color: "white",
  }),

  menu: (styles) => ({
    ...styles,
    marginTop: -3,
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: "#0e7b65",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderLeft: "4px solid #0e7b65",
    borderRight: "4px solid #0e7b65",
    animation: "fadeIn 0.4s ease-in-out",
    
  }),

  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "white",
      fontSize: "14px",
    };
  },
};
const SearchBar = ({ allWords: data, searchWord, setSearchWord, setAllWords, setTab, handleFilter}) => {
  let allWords = [];
  data.map((each) => allWords.push({ label: each.word, value: each.word }));
  return (
    <div style={{ width: "100%", padding: 0, margin: 0 }}>
      <Select
        classNamePrefix="menu"
        styles={customStyles}
        placeholder="Search for word..."
        options={allWords}
        onChange={(e) => setSearchWord(e.value)}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
      {/* <div style={{ position: "absolute", top: 0, right: 100, display: `${searchWord ? "block" : 'none'}`}}>
        <IconButton>
          <CloseIcon onClick={() => setSearchWord("")}/>
        </IconButton>
      </div> */}
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <IconButton onClick={() => {
              setSearchWord("");
              allWords.push([]);
            }}>
          <CloseIcon
            style={{ display: `${searchWord ? "block" : "none"}` }}
          />
        </IconButton>
        <IconButton>
          <Filter handleFilter={handleFilter}  setAllWords={setAllWords} allWords={data} setTab={setTab}/>
        </IconButton>
        <IconButton>
          <AddBoxIcon sx={{ color: "grey" }} />
        </IconButton>
        <IconButton>
          <MoreVertIcon sx={{ color: "grey" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
