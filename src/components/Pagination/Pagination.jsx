import React, { Component } from 'react';
import { previousPage, nextPage} from './PaginationActions';
class Pagination extends Component {
    constructor(props) {
        super(props);

        // this.handleGoToFirst    = this.handleGoToFirst   .bind(this);
        this.handleGoToPrevious = this.handleGoToPrevious.bind(this);
        this.handleGoToNext     = this.handleGoToNext    .bind(this);
        // this.handleGoToLast     = this.handleGoToLast    .bind(this);

       
    }

    handleGoToPrevious() {
        const { dispatch, currentPage } = this.props;
        if (currentPage === 0 ) {
            return
        }
        let prevPage = (currentPage-1)
        dispatch(previousPage(prevPage))
    }

    handleGoToNext() {
        const { dispatch, currentPage, viewPerPage } = this.props;
        let totalCount = 115;
        let lastPage = (Math.ceil(totalCount/viewPerPage));
        console.log('currentPage: ', currentPage)
        console.log('lastPage: ',lastPage)
        if (currentPage === lastPage) {
            return
        }
        let next = (currentPage+1)
        dispatch(nextPage(next))
    }

    render() {
        const { viewPerPage, currentPage } = this.props;
        let totalCount = 115;
        let lastPage = (Math.ceil(totalCount/viewPerPage));
        let firstEllipsis = currentPage > 3 ? 'page' : 'hide';
        let lastEllipsis = currentPage < (lastPage-3) ? 'page' : 'hide'
        let twoLess =  (currentPage-2) 
        let oneLess = (currentPage-1)
        let oneMore = (currentPage+1)
        let twoMore = (currentPage+2)
        let twoLessBtn = twoLess >= 0 ? 'page' : 'hide';
        let oneLessBtn = oneLess >= 0 ? 'page' : 'hide';
        let oneMoreBtn = oneMore <= (lastPage) ? 'page' : 'hide';
        let twoMoreBtn = twoMore <= (lastPage) ? 'page' : 'hide';
        let hideFirst = currentPage <= 2 ? 'hide' : 'page';
        let hideLast = currentPage <= (lastPage-3) ? 'page' : 'hide';

        return (
            <div className='pagination'>
                <button className='prev-next btn' onClick={this.handleGoToPrevious}>Prev</button>
                <button className={hideFirst} onClick={this.handleGoToFirst}>0</button>
                <button className={firstEllipsis} onClick={this.handleGoToPrevious}>...</button>
               
                <button className={twoLessBtn} onClick={this.handleGoToTwoLess}>{twoLess}</button>
                <button className={oneLessBtn} onClick={this.handleGoToOneLess}>{oneLess}</button>

                <button className='page current'>{currentPage}</button>

                <button className={oneMoreBtn} onClick={this.handleGoToOneMore}>{oneMore}</button>
                <button className={twoMoreBtn} onClick={this.handleGoToTwoMore}>{twoMore}</button>

                <button className={lastEllipsis} onClick={this.handleGoToNext}>...</button>
                <button className={hideLast} onClick={this.handleGoToLast}>{lastPage}</button>
                <button className='prev-next btn' onClick={this.handleGoToNext}>Next</button>

            </div>
        )
    }
}

export default Pagination;
