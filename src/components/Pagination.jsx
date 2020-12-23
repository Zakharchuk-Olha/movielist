import React from "react";

class Pagination extends React.Component {

  render() {
    const {
      onNextButtonClick,
      onPrevButtonClick,
      currentPage,
      totalPages}
    = this.props;

    const isPrevButtonDisabled = currentPage === 1 ? 'disabled' : '';
    const isNextButtonDisabled = currentPage === totalPages ? 'disabled' : '';


    return (
      <div>
        <nav aria-label="Page navigation" className="d-flex justify-content-center">
          <ul className="pagination">
              <li className={`page-item ${isPrevButtonDisabled}`}>
                <span className="page-link" onClick={onPrevButtonClick}>
                  &lt;
                </span>
              </li>
              <li className="mx-3 py-2">
                  <p>
                    {currentPage} из {totalPages}
                  </p>
              </li>
              <li className={`page-item ${isNextButtonDisabled}`}>
                <span className="page-link" onClick={onNextButtonClick}>
                  &gt;
                </span>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}




export default Pagination;
