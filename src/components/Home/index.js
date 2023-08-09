import { Component } from "react";

import Movies from "../Movies";
import { MainBg } from "./styledComponents";
import Pagination from "../Pagination";

import Header from "../Header";
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <MainBg>
          <Movies />
          <Pagination />
        </MainBg>
      </>
    );
  }
}
export default Home;
