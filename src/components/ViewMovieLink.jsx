import React from "react";
import styled from "styled-components";

const ListBlock = styled.div`
  border-radius:5px;
  border: 1px solid black;
  margin-bottom:5px;
  padding: 0 5px;
`;
const ListTitle = styled.p`
  display: block;
  font-size: 17px;
  font-weight: 500;
  text-align: right;
  margin: 0;
  margin-bottom:7px;
`;
const ListItem = styled.p`
  display: block;
  font-size: 15px;
  font-weight: 400;
  text-align: right;
  line-height:1.5;
`;



class ViewMovieLink extends React.Component {

    render() {
      const {moviesWillWatchList,
        watchedMoviesList,
        watchingNowList,
        moviesWillWatch,
        watchedMovies,
        watchingNow
      } = this.props;


      return (
        <div  className="col">
          <ListBlock style={{backgroundColor:"rgb(172, 236, 236, 0.3)"}}>
            <ListTitle>Буду смотреть: {moviesWillWatch.length} </ListTitle>
            <ListItem>  {moviesWillWatchList}</ListItem>
          </ListBlock>
          <ListBlock style={{backgroundColor:"rgb(255, 186, 186, .3)"}}>
            <ListTitle>Посмотрел: {watchedMovies.length}</ListTitle>
            <ListItem> {watchedMoviesList}</ListItem>
          </ListBlock>
          <ListBlock style={{backgroundColor:"rgb(229, 252, 183, .3)"}}>
            <ListTitle>Смотрю: {watchingNow.length}</ListTitle>
            <ListItem> {watchingNowList}</ListItem>
          </ListBlock>
        </div>
      );
    }
}

export default ViewMovieLink;
