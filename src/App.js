import { Component } from "react";

import MoviesListContext from "./context/MoviesListContext";
import Home from "./components/Home";

const apiKey = `ced331f4b1f7f8593c60021e9895e784`;
const BaseUrl = `https://api.themoviedb.org/3`;

const mainUrl =
  BaseUrl + `/discover/movie?sort_by=vote_average.desc&api_key=` + apiKey;
console.log(mainUrl);

var currentPage = 1;
console.log(currentPage);
var nextPage = 2;
var prevPage = 3;
var totalPages = 100;
var pageUrl = "";
console.log(nextPage);
console.log(prevPage);
console.log(totalPages);
console.log(pageUrl);
class App extends Component {
  state = { searchInput: "Jack", moviesList: [], pageNumber: 1 };

  componentDidMount() {
    this.getMovies(mainUrl);
  }

  getMovies = async (url) => {
    pageUrl = url;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // Authorization: "Bearer ced331f4b1f7f8593c60021e9895e784",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWQzMzFmNGIxZjdmODU5M2M2MDAyMWU5ODk1ZTc4NCIsInN1YiI6IjY0ZDIyOWI4NTQ5ZGRhMDExYzI5OTUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BubGYJh2We9ITYwGWYE6qGVEAnv84wVISHUGYTWagR4",
      },
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const fetchedData = response.json();
      const data = await fetchedData;
      console.log(data);

      currentPage = data.page;
      nextPage = currentPage + 1;
      prevPage = currentPage - 1;
      totalPages = data.total_pages;
      console.log(nextPage);
      console.log(prevPage);
      console.log(totalPages);
      console.log(pageUrl);

      const updatedData = data.results.map((eachMovie) => ({
        title: eachMovie.title,
        originalLanguage: eachMovie.original_language,
        posterPath: eachMovie.poster_path,
        releaseDate: eachMovie.release_date,
        id: eachMovie.id,
        overview: eachMovie.overview,
        voteAverage: eachMovie.vote_average,
      }));
      this.setState({
        moviesList: updatedData,
      });
    }
  };

  changeSearchInput = (search) => {
    this.setState({ searchInput: search });
    const searchUrl =
      BaseUrl + "/search/movie?api_key=" + apiKey + "&query=" + search;
    this.getMovies(searchUrl);
  };

  latestRelease = (year) => {
    const { searchInput } = this.state;
    let searchYear = year.toString();
    console.log(searchInput);
    console.log(year);
    const yearUrl =
      BaseUrl +
      "/search/movie?api_key=" +
      apiKey +
      "&query=" +
      searchInput +
      "&year=" +
      searchYear;
    this.getMovies(yearUrl);
  };

  decreasePageNumber = () => {
    if (prevPage > 0) {
      console.log(pageUrl);
      const x = pageUrl.split("?");
      console.log(x);
      const y = x[1].split("&");
      console.log(y);
      let key = y[y.length - 1].split("=");
      console.log(key);

      if (key[0] !== "page") {
        let numUrl = pageUrl + "&page=" + prevPage;
        this.getMovies(numUrl);
      } else {
        key[1] = prevPage.toString();
        let a = key.join("=");
        y[y.length - 1] = a;
        let b = y.join("&");

        let numUrl = x[0] + "?" + b;

        this.getMovies(numUrl);
      }
      this.setState({ pageNumber: currentPage - 1 });
    }
  };

  increasePageNumber = () => {
    if (nextPage < totalPages) {
      console.log(pageUrl);
      const x = pageUrl.split("?");
      console.log(x);
      const y = x[1].split("&");
      console.log(y);
      let key = y[y.length - 1].split("=");
      console.log(key);

      if (key[0] !== "page") {
        let numUrl = pageUrl + "&page=" + nextPage;
        this.getMovies(numUrl);
      } else {
        key[1] = nextPage.toString();
        let a = key.join("=");
        y[y.length - 1] = a;
        let b = y.join("&");

        let numUrl = x[0] + "?" + b;

        this.getMovies(numUrl);
      }
      this.setState({ pageNumber: currentPage + 1 });
    }
  };

  getResults = (event) => {
    event.preventDefault();
    const { searchInput } = this.state;

    const searchUrl =
      BaseUrl + "/search/movie?api_key=" + apiKey + "&query=" + searchInput;
    this.getMovies(searchUrl);
  };

  ChangeRating = (rating) => {
    if (rating === "desc") {
      const topRatedUrl = BaseUrl + "/movie/top_rated?" + apiKey;
      console.log(topRatedUrl);
      this.getMovies(topRatedUrl);
    } else {
      const mainUrl =
        BaseUrl +
        `/discover/movie?sort_by=vote_average.${rating}&api_key=` +
        apiKey;
      this.getMovies(mainUrl);
      //   console.log(mainUrl);
    }
  };
  render() {
    const { searchInput, moviesList, pageNumber } = this.state;

    return (
      <MoviesListContext.Provider
        value={{
          searchInput,
          changeSearchInput: this.changeSearchInput,
          moviesList,
          increasePageNumber: this.increasePageNumber,
          pageNumber,
          decreasePageNumber: this.decreasePageNumber,
          latestRelease: this.latestRelease,
          getResults: this.getResults,
          ChangeRating: this.ChangeRating,
        }}
      >
        <Home />
      </MoviesListContext.Provider>
    );
  }
}

export default App;
