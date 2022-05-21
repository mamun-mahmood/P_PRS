import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, Divider } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Slider from "@mui/material/Slider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};
// function valuetext(value) {
//     return `${value}°C`;
//   }
  
//   const minDistance = 1;
export default function BasicModal({setAllWords, allWords, setTab, handleFilter:filterData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [filterBy, setFilterBy] = React.useState({
    alphabet: "A-Z",
    type: "Word",
    order: "Ascending",
  });
  const resterFilter = () => {
    setFilterBy({
      alphabet: "A-Z",
      type: "Word",
      order: "Ascending",
    });
  };
  const handleChange = (event) => {
    setFilterBy({ ...filterBy, [event.target.name]: event.target.value });
  };
  // const [value1, setValue1] = React.useState([0, 5]);

  // const handleChange1 = (event, newValue, activeThumb) => {
  //   if (!Array.isArray(newValue)) {
  //     return;
  //   }

  //   if (activeThumb === 0) {
  //     setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
  //   } else {
  //     setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
  //   }
  // };
  const handleFilter = (filterBy) => {
    filterData(filterBy)
    handleClose()
  }
  return ( 
    <>
      <FilterListIcon onClick={handleOpen} sx={{ color: "grey" }} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ color: "#0e7b65" }}
              id="modal-modal-title"
              component="h2"
              onClick={resterFilter}
            >
              Reset
            </Button>
            <Typography
              sx={{ fontSize: "18px" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Filter Word List
            </Typography>
            <Button
              sx={{ color: "#0e7b65" }}
              id="modal-modal-title"
              component="h2"
              onClick={() => handleFilter(filterBy)}
            >
              Filter
            </Button>
          </div>
          <Divider />
          {/* Alpabet */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Alphabet</Typography>
            <FormControl variant="standard" sx={{ m: 0.5, minWidth: 80 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="alphabet"
                value={filterBy?.alphabet}
                onChange={handleChange}
                label="Filter"
              >
                <MenuItem value="A-Z">A-Z</MenuItem>
                <MenuItem value="A_F">A-F</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Sort By */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Sort By</Typography>
            <FormControl
              variant="standard"
              sx={{ minWidth: 80, display: "flex" }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="type"
                value={filterBy?.type}
                onChange={handleChange}
                label="Filter"
              >
                <MenuItem value="Word">Word</MenuItem>
                <MenuItem value="Learning">Learning</MenuItem>
                <MenuItem value="WhenAdded">When Added</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ minWidth: 80, display: "flex" }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="order"
                value={filterBy?.order}
                onChange={handleChange}
              >
                <MenuItem value="Ascending">Ascending</MenuItem>
                <MenuItem value="Descending">Descending</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* range slider */}
          {/* <Slider
          sx={{color: '#0e7b65', width: '80%', ml: "10%"}}
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
          <Typography sx={{textAlign: 'center', mt:-2}}>Learning Level</Typography> */}
        </Box>
      </Modal>
    </>
  );
}
