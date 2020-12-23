import React from "react";
import { NavDropdown, Navbar } from 'react-bootstrap';


class MovieTabs extends React.Component {


    render() {

        const {sort_by, updateSortBy} = this.props;
        const handleClick = value => {
            return () => {
            updateSortBy(value);
        };}
        const getClassLink = value => {
            return (`nav-link ${
                sort_by === value ? "active" : ""
            }`)
        }

        return (
          <div>
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand href="/" style={{fontSize: '23px'}}> Что посмотреть? </Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav"  className="row">
              <NavDropdown  className="col-xl-2 col-lg-3" title="По популярности" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <div  className={getClassLink("popularity.asc")}
                          onClick = {handleClick("popularity.asc")}>
                    По возрастанию
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-item">
                  <div  className={getClassLink("popularity.desc")}
                          onClick = {handleClick("popularity.desc")}>
                    По убыванию
                  </div>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown  className="col-xl-2 col-lg-3" title="По рейтингу" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <div  className={getClassLink("vote_average.asc")}
                            onClick = {handleClick("vote_average.asc")}>
                      По возрастанию
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-item">
                    <div  className={getClassLink("vote_average.desc")}
                            onClick = {handleClick("vote_average.desc")}>
                      По убыванию
                    </div>
                  </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown  className="col-xl-2 col-lg-3" title="По году выпуска" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <div  className={getClassLink("primary_release_date.asc")}
                          onClick = {handleClick("primary_release_date.asc")}>
                      По возрастанию
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-item">
                    <div  className={getClassLink("primary_release_date.desc")}
                          onClick = {handleClick("primary_release_date.desc")}>
                      По убыванию
                    </div>
                  </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown  className="col-xl-2 col-lg-3" title="По алфавиту" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <div  className={getClassLink("original_title.asc")}
                          onClick = {handleClick("original_title.asc")}>
                      От А до Я
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-item">
                    <div  className={getClassLink("original_title.desc")}
                          onClick = {handleClick("original_title.desc")}>
                      От Я до А
                    </div>
                  </NavDropdown.Item>
              </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
          </div>
      )
  }
}




export default MovieTabs
