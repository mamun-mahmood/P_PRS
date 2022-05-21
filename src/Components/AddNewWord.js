import {
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import db from "./Firebase";
import { addDoc, collection, serverTimestamp} from "firebase/firestore"; 
const AddNewWord = ({ setTab, userId }) => {
  const date = new Date();
  const [formData, setFormData] = useState({
    _partition: "project=" + userId,
    date_created: date.toISOString(),
  });
  const handleChange = (event) => {
    console.log(formData);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async () => {
    const docPost = await addDoc(collection(db, "Todos"), {
      name: formData?.name,
      status: formData?.status,
      priority: formData?.priority,
      description: formData?.description,
      timestamp: serverTimestamp(),

    });
    if (docPost.id) {
      setTab(0)
    }
  };
  return (
    <div
      style={{
        padding: "10px",
        animation: "rightfadeIn 0.5s ease-in-out",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          zIndex: "1000",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "green",
              fontWeight: "800",
              borderRadius: "20px",
              border: "2px solid #0e7b65",
              mb: 1,
            }}
            onClick={() => setTab(0)}
          >
            Cancel
          </Button>
          <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
            Add New Todo
          </h4>
          <Button
            variant="outlined"
            sx={{
              color: "green",
              fontWeight: "800",
              borderRadius: "20px",
              border: "2px solid #0e7b65",
              mb: 1,
            }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
        <Divider />
      </div>
      <div>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Prority</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="priority"
                onChange={handleChange}
                label="Prority"
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="status"
                onChange={handleChange}
                label="Prority"
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="On Going">On Going</MenuItem>
                <MenuItem value="Finished">Finished</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="standard-basic"
              label="Description"
              variant="standard"
              name="description"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="standard-basic"
              label="Example"
              variant="standard"
              name="exampleSentence"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="standard-basic"
              label="Mnemonics"
              variant="standard"
              name="mnemonics"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="standard-basic"
              label="Synonyms"
              variant="standard"
              name="synonyms"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="standard-basic"
              label="Antonyms"
              variant="standard"
              name="antonyms"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="standard-basic"
              label="Note"
              variant="standard"
              name="notes"
              onChange={handleChange}
            />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <h4>Groups:</h4>
            <TextField
              fullWidth
              id="standard-basic"
              label="Add new group"
              variant="standard"
              name="group"
            />
            <IconButton>
              <AddIcon
                sx={{
                  color: "#0e7b65",
                  width: 35,
                  height: 35,
                  border: "2px solid #0e7b65",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default AddNewWord;
