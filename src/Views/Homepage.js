import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ListAllWords from "../Components/ListAllWords";
import SearchBar from "../Components/SearchBar";
import ListIcon from "@mui/icons-material/List";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// import SettingsIcon from "@mui/icons-material/Settings";
import * as Realm from "realm-web";
import AddNewWord from "../Components/AddNewWord";
import EditWord from "../Components/EditWord";
import Dictionary from "./Dictionary";
import Practice from "./Practice";
import Account from "./Account";
import Setting from "./Setting";
import { useAuth } from "../Components/AuthContext";
export default function Homepage() {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [allWords, setAllWords] = React.useState([]);
  const [searchWord, setSearchWord] = React.useState("");
  const { currentUser } = useAuth();
  const [dataLoading, setDataLoading] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    setDataLoading(true);
    const REALM_APP_ID = "realmappwordstore-mgzfz";
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.jwt(currentUser.accessToken);
    try {
      const user = await app.logIn(credentials);
      const words = await user.functions.getAllWords("project=" + user.id);
      setAllWords(words);
      setUserId(user.id);
      setDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [currentUser.accessToken]);
  const [tab, setTab] = React.useState(0);
  const [editWord, setEditWord] = React.useState("");
  //filter word
  const handleFilter = (filterBy) => {
    if (filterBy.order === "Descending") {
      console.log("Descending1");
      console.log(allWords);
      setAllWords(allWords.reverse());
      setTab(1);
      setTab(0);
      // handleClose()
    }
  };
  return (
    <Box
      sx={{
        pb: 7,
        width: "100%",
        borderTop: "3px solid #0e7b65",
        borderLeft: "3px solid #0e7b65",
        borderRight: "3px solid #0e7b65",
        borderRadius: "10px",
        mt: 1,
        backgroundColor: "white",
      }}
      ref={ref}
    >
      {tab === 0 && (
        <>
          {" "}
          <Paper
            sx={{
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              zIndex: "1000",
            }}
          >
            <SearchBar
              handleFilter={handleFilter}
              allWords={allWords}
              setAllWords={setAllWords}
              searchWord={searchWord}
              setTab={setTab}
              setSearchWord={setSearchWord}
              sx={{ m: 0, p: 0 }}
            />
          </Paper>
          <CssBaseline />
          <ListAllWords
            dataLoading={dataLoading}
            allWords={allWords}
            setEditWord={setEditWord}
            searchWord={searchWord}
            setTab={setTab}
          />
        </>
      )}
      {tab === 5 && <AddNewWord userId={userId} setTab={setTab} />}
      {tab === "editTab" && <EditWord editWord={editWord} setTab={setTab} />}
      {tab === 1 && <Dictionary />}
      {tab === 2 && <Practice />}
      {tab === 3 && <Account />}
      {tab === 4 && <Setting />}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="My List"
            icon={<ListIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(0)}
          />
          <BottomNavigationAction
            label="Dictionary"
            icon={<MenuBookIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(1)}
          />
          <BottomNavigationAction
            label="Practice"
            icon={<SportsEsportsIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(2)}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<Avatar sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(3)}
          />
          {/* <BottomNavigationAction
            label="Setting"
            icon={<SettingsIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(4)}
          /> */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
