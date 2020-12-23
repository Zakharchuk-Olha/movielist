import React from "react";
import { Card, DropdownButton, Dropdown } from 'react-bootstrap';
import styled from "styled-components";


const Poster = styled.div`
  background: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 200px;
  width: auto;
`;

const Overview = styled.div`
  height: 100%;
  opacity: 0;
  padding: 5px;
  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, .5);
  }
`;



class MovieItem extends React.Component {

    constructor () {
        super()

        this.state = {
            willWatch: false,
            watchedMovies: false,
            watchingNowMovies: false,
            dropDownValue: "Статус"
        };

    }

    changeValue(text) {
        this.setState({dropDownValue: text})
      }

      viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.open(url)
      }



    render() {
      const {movie,
        removeMovie,
        removeMovieFromLists,
        addMovieToWillWatch,
        addMovieToWillWatchList,
        addMovieToWatchingNow,
        addMovieToWatchingNowList,
        addMovieToWatched,
        addMovieToWatchedMoviesList,
        removeMovieFromWatched,
        removeMovieFromWatchedMoviesList,
        removeMovieFromWatchingNow,
        removeMovieFromWatchingNowList,
        removeMovieFromWillWatch,
        removeMovieFromWillWatchList,
      } = this.props;




      return (
        <Card>

          <Poster bgImage={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}>
            <Overview>
              <p style={{color: 'white', lineHeight: 1.25, fontSize: 12 }}>{movie.overview}</p>
            </Overview>
          </Poster>
          <Card.Body>
              <Card.Title type="button" style={{fontSize: 19 }} onClick={this.viewMovie.bind(this)}>{movie.title}</Card.Title>
            <Card.Text>
              <p>Rating: {movie.vote_average}</p>
            </Card.Text>
            <Card.Text className="row">
              <p className="col" style={{margin: "auto"}} >{movie.release_date.substring(0, 4)}</p>
              <div className="col">
                <DropdownButton  variant="outline-secondary"  id="dropdown-item-button" title={this.state.dropDownValue} className="format">
                  <Dropdown.Item as="button">
                    <div onClick={(e) => this.changeValue(e.target.textContent)}>
                      {this.state.watchingNowMovies === true ? (
                        <div  onClick={
                          () => {
                             this.setState({
                                 watchingNowMovies: false,
                             });
                             removeMovieFromWatchingNow(movie);
                             removeMovieFromWatchingNowList(movie);
                           }}>
                              Не смотрю
                        </div>
                      ) : (
                        <div onClick={
                          () => {
                            this.setState({
                              watchingNowMovies: true
                            });
                            addMovieToWatchingNow(movie);
                            addMovieToWatchingNowList(movie);

                          }}>
                              Смотрю
                        </div>
                      )}
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item as="button">
                    <div onClick={(e) => this.changeValue(e.target.textContent)}>
                      {this.state.willWatch === true ? (
                        <div  onClick={
                          () => {
                            this.setState({
                                willWatch: false
                            });
                            removeMovieFromWillWatch(movie);
                            removeMovieFromWillWatchList(movie);

                          }}>
                              Перестал
                        </div>
                      ) : (
                        <div onClick={
                          () => {
                            this.setState({
                              willWatch: true
                            });
                            addMovieToWillWatch(movie);
                            addMovieToWillWatchList(movie);
                          }}>
                              Буду смотреть
                        </div>
                      )}
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item as="button">
                    <div onClick={(e) => this.changeValue(e.target.textContent)}>
                      {this.state.watchedMovies === true ? (
                        <div onClick={
                          () => {
                            this.setState({
                              watchedMovies: false,
                            });
                            removeMovieFromWatched(movie);
                            removeMovieFromWatchedMoviesList(movie);
                          }}>
                              Не смотрел
                        </div>
                      ) : (
                        <div onClick={
                          () => {
                            this.setState({
                              watchedMovies: true
                          });
                          addMovieToWatched(movie);
                          addMovieToWatchedMoviesList(movie);
                          }}>
                              Посмотрел
                        </div>
                      )}
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item as="button">
                    <div onClick={
                      () => {
                        removeMovie(movie);
                        removeMovieFromLists(movie);
                      }}>
                        Удалить фильм
                    </div>
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
}

export default MovieItem;
