import axios from "axios";

function useDocs() {
  axios
    .get("http://localhost:4000/kino")
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

export { useDocs };
