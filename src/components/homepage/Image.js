import React from "react";
import ImageList from "./ImageList";
import ImageSearch from "./ImageSearch";
import axios from "axios";
function App(props) {
  const [state, setState] = React.useState({
    images: [],
    error: null,
  });

  const handleMakeRequest = async (searchValue) => {
    let results = [];
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${searchValue}&client_id=${"GJtAay46rxY4RMDWHiskXM7NqChm_aBNtkPNsfiql-g"}`
      )
      .then((res) => {
        console.log(res.data);
        results = res.data.results;
        if (!searchValue) {
          setState({ ...state, error: "Please provide a value." });
        } else {
          setState({ images: results, error: null });
        }
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };
  return (
    <div style={{ padding: "5% 10%" }}>
      <ImageSearch handleMakeRequest={handleMakeRequest} />
      {state.error !== null ? (
        <div style={{ color: "#fff", textAlign: "center" }}>{state.error}</div>
      ) : (
        <ImageList images={state.images} />
      )}
    </div>
  );
}

export default App;
