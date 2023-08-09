import MoviesListContext from "../../context/MoviesListContext";

import {
  NavBg,
  InputSearch,
  SearchButton,
  SelectFilersContainer,
  Options,
  RatingFilter,
  DateFilter,
  FormCont,
  PageNum,
  Span,
} from "./styledComponents";

const Header = () => (
  <MoviesListContext.Consumer>
    {(value) => {
      const {
        changeSearchInput,
        latestRelease,
        getResults,
        ChangeRating,
        pageNumber,
      } = value;

      const onSearchMovie = (event) => {
        changeSearchInput(event.target.value);
      };

      const onChangeYear = (event) => {
        latestRelease(event.target.value);
        console.log(event.target.value);
      };
      onsubmit = (event) => {
        getResults(event);
      };

      const onChangeRating = (event) => {
        ChangeRating(event.target.value);
      };
      return (
        <NavBg>
          <FormCont onSubmit={onsubmit}>
            <SelectFilersContainer>
              <RatingFilter onChange={onChangeRating}>
                <Options selected value="desc">
                  High Rated
                </Options>
                <Options value="asc">Low Rated</Options>
              </RatingFilter>
              <DateFilter onChange={onChangeYear}>
                <Options value="2023">Latest Releases</Options>
                <Options value="%">Relevance</Options>
              </DateFilter>
            </SelectFilersContainer>
            <InputSearch
              type="text"
              placeholder="type movie name"
              onChange={onSearchMovie}
            />
            <SearchButton type="submit">Search</SearchButton>
            <PageNum className="pageNumber">
              page : <Span>{pageNumber}</Span>
            </PageNum>
          </FormCont>
        </NavBg>
      );
    }}
  </MoviesListContext.Consumer>
);
export default Header;
