import React from "react";
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../api.js";
import MovieTabs from "./MovieTabs";
import Pagination  from './Pagination';
import GlobalStyles  from './GlobalStyles';
import ViewMovieLink  from './ViewMovieLink';




class App extends React.Component {

    constructor () {
        super()

        this.state = {
            movies: [],
            moviesWillWatch: [],
            watchedMovies: [],
            watchingNow: [],
            sort_by: "popularity.desc",
            language: "ru-Ru",
            vote_count_gte: 100,
            totalPages: 500,
            currentPage: 1,
            moviesWillWatchList: [],
            watchedMoviesList : [],
            watchingNowList: [],
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by) {
            this.getMovies();
        }

    }


    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&language=${this.state.language}&page=${this.state.page}&vote_count.gte=${this.state.vote_count_gte}`).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({
                movies: data.results
            });
        });
    }

    removeMovie = movie => {
        const updateMovies =  this.state.movies.filter(function(item){
            return item.id !== movie.id;
        });
        console.log(updateMovies);
        this.setState({
            movies : updateMovies
        });
    }


    addMovieToWillWatch = movie => {
        const updateMoviesToWillWatch = [...this.state.moviesWillWatch];
        updateMoviesToWillWatch.push(movie);

        this.setState({
            moviesWillWatch : updateMoviesToWillWatch
        });
    };

    addMovieToWillWatchList = movie => {
        const updateMovieToWillWatchList = [...this.state.moviesWillWatchList];
        updateMovieToWillWatchList.push(movie.title, <br />);

        this.setState({
            moviesWillWatchList : updateMovieToWillWatchList
        });
    };

    removeMovieFromWillWatch = movie => {
        const updateMoviesToWillWatch =  this.state.moviesWillWatch.filter(function(item){
            return item.id !== movie.id;
        });
        this.setState({
            moviesWillWatch: updateMoviesToWillWatch
        });
    };

    removeMovieFromWillWatchList = movie => {
      const updateMovieToWillWatchList =  this.state.moviesWillWatchList.filter(function(item){
          return item.id === movie.id;
      });

        this.setState({
            moviesWillWatchList: updateMovieToWillWatchList
        });
    };

    addMovieToWatched = movie => {
        const updateMoviesToWatched = [...this.state.watchedMovies];
        updateMoviesToWatched.push(movie);

        this.setState({
            watchedMovies : updateMoviesToWatched
        });
    };

    addMovieToWatchedMoviesList = movie => {
        const updateMovieToWatchedMoviesList = [...this.state.watchedMoviesList];
        updateMovieToWatchedMoviesList.push(movie.title, <br />);

        this.setState({
            watchedMoviesList : updateMovieToWatchedMoviesList
        });
    };

    removeMovieFromWatched = movie => {
        const updateMoviesToWatched =  this.state.watchedMovies.filter(function(item){
            return item.id !== movie.id;
        });
        this.setState({
            watchedMovies: updateMoviesToWatched
        });
    };

    removeMovieFromWatchedMoviesList = movie => {
        const updateMovieToWatchedMoviesList =  this.state.watchedMoviesList.filter(function(item){
            return item.id === movie.id;
        });
        this.setState({
            watchedMoviesList: updateMovieToWatchedMoviesList
        });
    };

    addMovieToWatchingNow = movie => {
        const updateMoviesToWatchingNow = [...this.state.watchingNow];
        updateMoviesToWatchingNow.push(movie);

        this.setState({
            watchingNow : updateMoviesToWatchingNow
        });
    };

    addMovieToWatchingNowList = movie => {
        const updateMovieToWatchingNowList = [...this.state.watchingNowList];
        updateMovieToWatchingNowList.push(movie.title, <br />);

        this.setState({
            watchingNowList : updateMovieToWatchingNowList
        });
    };

    removeMovieFromWatchingNow = movie => {
        const updateMoviesToWatchingNow =  this.state.watchingNow.filter(function(item){
            return item.id !== movie.id;
        });
        this.setState({
            watchingNow: updateMoviesToWatchingNow
        });
    };

    removeMovieFromWatchingNowList = movie => {
        const updateMovieToWatchingNowList =  this.state.watchingNowList.filter(function(item){
            return item.id === movie.id;
        });
        this.setState({
            watchingNowList: updateMovieToWatchingNowList
        });
    };

    removeMovieFromLists = movie => {
      return (
        this.removeMovieFromWillWatch(movie),
        this.removeMovieFromWatched(movie),
        this.removeMovieFromWatchingNow(movie),
        this.removeMovieFromWillWatchList(movie),
        this.removeMovieFromWatchingNowList(movie),
        this.removeMovieFromWatchedMoviesList(movie)
      )
    }


    updateSortBy = value => {
        this.setState({
            sort_by: value
        })
    }


    onNextButtonClick = value => {
      if (this.state.currentPage === this.state.totalPages) {
        return false;
      } fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&language=${this.state.language}&vote_count.gte=${this.state.vote_count_gte}&page=${this.state.currentPage+1}`)
        .then(response => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            movies: data.results,
            currentPage: data.page,
          });
        });
    };

    onPrevButtonClick = value => {
      if (this.state.currentPage === 1) {
        return false;
      } fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&language=${this.state.language}&vote_count.gte=${this.state.vote_count_gte}&page=${this.state.currentPage-1}`)
          .then(response => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              movies: data.results,
              currentPage: data.page,
            });
          });
    };




    render () {
        return (
          <>
            <div className="container">
                      <div className="row my-3">
                        <div className="col-12">
                          <MovieTabs
                            sort_by={this.state.sort_by}
                            updateSortBy ={this.updateSortBy}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div  className="col-lg-9 col-md-12">
                        <div className="row">
                        {this.state.movies.map(movie => {
                              return (
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={movie.id} >
                                  <MovieItem
                                    movie={movie}
                                    removeMovie={this.removeMovie}
                                    removeMovieFromLists={this.removeMovieFromLists}
                                    removeMovieFromWillWatchList={this.removeMovieFromWillWatchList}
                                    removeMovieFromWatchedMoviesList={this.removeMovieFromWatchedMoviesList}
                                    removeMovieFromWatchingNowList={this.removeMovieFromWatchingNowList}
                                    addMovieToWatched={this.addMovieToWatched}
                                    addMovieToWatchedMoviesList={this.addMovieToWatchedMoviesList}
                                    removeMovieFromWatched={this.removeMovieFromWatched}
                                    addMovieToWatchingNow={this.addMovieToWatchingNow}
                                    addMovieToWatchingNowList={this.addMovieToWatchingNowList}
                                    removeMovieFromWatchingNow={this.removeMovieFromWatchingNow}
                                    addMovieToWillWatch={this.addMovieToWillWatch}
                                    addMovieToWillWatchList={this.addMovieToWillWatchList}
                                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                                  />
                                </div>
                              )
                        })}
                        </div>
                        </div>
                          <ViewMovieLink
                          moviesWillWatchList={this.state.moviesWillWatchList}
                          watchedMoviesList={this.state.watchedMoviesList}
                          watchingNowList={this.state.watchingNowList}
                          watchedMovies={this.state.watchedMovies}
                          moviesWillWatch={this.state.moviesWillWatch}
                          watchingNow={this.state.watchingNow}
                           />
                      </div>
                <div className="row my-4">
                  <div className="col-12" >
                    <Pagination
                      onNextButtonClick={this.onNextButtonClick}
                      onPrevButtonClick={this.onPrevButtonClick}
                      totalPages={this.state.totalPages}
                      currentPage={this.state.currentPage}
                    />
                  </div>
                </div>
            </div>
        <GlobalStyles />
      </>

    );
  }
}


export default App;
