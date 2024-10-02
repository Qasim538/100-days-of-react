import { Grid2 } from "@mui/material";
import SearchBar from "./Components/SearchBar";
import VideoDetails from "./Components/VideoDetails";
import VideoList from "./Components/VideoList";
import Youtube from "./API/Youtube";

function App() {
  return (
    <Grid2 style={{justifyContent: "center"}} container spacing={10}> 
      <Grid2 ite xs={11}>
        <Grid2 container spacing={10}>
          <Grid2 >
            <Youtube />
          </Grid2>
          <Grid2>
            <VideoDetails />
          </Grid2>
          <Grid2>
            <VideoList />
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
   
  );
}

export default App;
