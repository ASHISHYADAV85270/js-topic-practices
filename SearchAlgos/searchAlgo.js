import { data } from "./dummyData";

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  const results = searchAlgo(query, data);
});
const searchAlgo = (query, inputData) => {
  const result = inputData.map((item) => {
    
  });
  return result;
};
