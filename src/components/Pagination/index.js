import "./index.css";
import MoviesListContext from "../../context/MoviesListContext";

const Pagination = () => (
  <MoviesListContext.Consumer>
    {(value) => {
      const { increasePageNumber, decreasePageNumber, pageNumber } = value;
      const decreaseNumber = () => {
        decreasePageNumber();
      };

      const increaseNumber = () => {
        increasePageNumber();
      };

      return (
        <div className="pagination">
          <div className="color">
            <button onClick={decreaseNumber}>Previous page</button>
          </div>
          <div className="pageNumber">{pageNumber}</div>

          <div className="color">
            <button onClick={increaseNumber}>Next Page</button>
          </div>
        </div>
      );
    }}
  </MoviesListContext.Consumer>
);

export default Pagination;
