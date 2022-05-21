// import { useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { CircularProgress, Fab, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WordDescription from "./WordDescription";

const style = {
  position: "sticky",
  top: "70vh",
  left: "100px",
  // right: "auto",
  zIndex: "1000",
  width: "50px",
  backgroundColor: "#0e7b65",
};
export default function CheckboxList({
  allWords,
  setTab,
  searchWord,
  setEditWord,
  handleClickOpen,
  dataLoading,
}) {
  return (
    <List style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: `${dataLoading ? "flex" : "none"}`,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <CircularProgress sx={{ color: "#0e7b65" }} />
      </div>
      <div
        style={{
          display: `${
            allWords.length <= 0 && dataLoading === false ? "block" : "none"
          }`,
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h4>No Todo found!</h4>
        <small>Click the plus icon to add Todo</small>
      </div>
      {allWords.map((word, index) =>
        searchWord ? ( 
          word.word === searchWord && (
            <div key={index} style={{ animation: "fadeIn 0.4s ease-in-out" }}>
              <WordDescription
                handleClickOpen={handleClickOpen}
                setEditWord={setEditWord}
                setTab={setTab}
                word={word}
                index={index}
              />
              <Divider />
              <Divider />
            </div>
          )
        ) : (
          <div key={index} style={{ animation: "fadeIn 0.4s ease-in-out" }}>
            <WordDescription
              handleClickOpen={handleClickOpen}
              setEditWord={setEditWord}
              setTab={setTab}
              word={word}
              index={index}
            />
            <Divider />
          </div>
        )
      )}
      <div
        style={{
          position: "sticky",
          top: "70vh",
          marginLeft: "auto",
          marginRight: "50px",
          zIndex: "1000",
          width: "60px",
          height: "60px",
          cursor: "pointer",
        }}
      >
        <Fab
          style={{
            display: `${dataLoading ? "none" : "block"}`,
            width: "100%",
            height: "100%",
            backgroundColor: "#0e7b65",
          }}
          color="primary"
          aria-label="add"
          onClick={() => setTab(5)}
        >
          <AddIcon sx={{ mt: 1, width: '60%', height: '60%' }} />
        </Fab>
      </div>
    </List>
  );
}
