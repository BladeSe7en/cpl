import React, { Component } from 'react';
import { previousPage, nextPage, goToPage, viewPerPage, getCount } from './PaginationActions';
import { getBlogs } from '../ForumTopics/ForumTopicsActions';
class Pagination extends Component {
    constructor(props) {
        super(props);

        this.handleGoToPrevious = this.handleGoToPrevious.bind(this);
        this.handleGoToNext     = this.handleGoToNext    .bind(this);
        this.handleGoToPage     = this.handleGoToPage    .bind(this);
        this.selectViewPerPage  = this.selectViewPerPage .bind(this);
    }

    componentDidMount() {
        const { dispatch } =this.props;
        dispatch(getCount())
    }

    handleGoToPrevious() {
        const { dispatch, currentPage, viewPerPage } = this.props;
        if (currentPage === 0) {
            return
        }
        let prevPage = (currentPage - 1)
        let numSkip = (+viewPerPage*prevPage)
        dispatch(getBlogs(viewPerPage, numSkip));
        dispatch(previousPage(prevPage))
    }

    handleGoToNext() {
        const { dispatch, currentPage, viewPerPage, totalCount } = this.props;
        let lastPage = (Math.floor(totalCount / viewPerPage)-1);
        if (currentPage === lastPage+1) {
            return
        }
        let next = (currentPage + 1)
        let numSkip = (+viewPerPage*next)
        dispatch(getBlogs(viewPerPage, numSkip));
        dispatch(nextPage(next))
    }

    handleGoToPage(e) {
        const { dispatch, viewPerPage } = this.props;
        let page = +e.target.id;
        let numSkip = (+viewPerPage*page)
        dispatch(getBlogs(viewPerPage, numSkip));
        dispatch(goToPage(page))
    }

    selectViewPerPage(e) {
        console.log('inside select view')
        const { dispatch } = this.props;
        let views = +e.target.id
        dispatch(getBlogs(views, 0));
        dispatch(viewPerPage(views));
    }

    render() {
        const { viewPerPage, currentPage, totalCount } = this.props;
        let lastPage = (Math.ceil(totalCount / viewPerPage)-1);
        let firstEllipsis = currentPage > 3 ? 'page' : 'hide';
        let lastEllipsis = currentPage < (lastPage - 3) ? 'page' : 'hide'
        let twoLess = (currentPage - 2)
        let oneLess = (currentPage - 1)
        let oneMore = (currentPage + 1)
        let twoMore = (currentPage + 2)
        let twoLessBtn = twoLess >= 0 ? 'page' : 'hide';
        let oneLessBtn = oneLess >= 0 ? 'page' : 'hide';
        let oneMoreBtn = oneMore <= (lastPage) ? 'page' : 'hide';
        let twoMoreBtn = twoMore <= (lastPage) ? 'page' : 'hide';
        let hideFirst = currentPage <= 2 ? 'hide' : 'page';
        let hideLast = currentPage <= (lastPage - 3) ? 'page' : 'hide';

        return (
            <div className='pagination'>
                <div className='view-per-page'>
                    <h1>View Per Page</h1>
                    <input type='radio' name='page' defaultChecked id={10} onClick={this.selectViewPerPage}/>
                    <label htmlFor='10'>10</label>
                    <input type='radio' name='page' id={25} onClick={this.selectViewPerPage}/>
                    <label htmlFor='25'>25</label>
                    <input type='radio' name='page' id={50} onClick={this.selectViewPerPage}/>
                    <label htmlFor='50'>50</label>
                </div>
                <button className='prev-next btn' onClick={this.handleGoToPrevious}>Prev</button>
                <button className={hideFirst} onClick={this.handleGoToPage}>1</button>
                <button className={firstEllipsis} id={currentPage-3} onClick={this.handleGoToPage}>...</button>
                <button className={twoLessBtn} id={twoLess} onClick={this.handleGoToPage}>{twoLess+1}</button>
                <button className={oneLessBtn} id={oneLess} onClick={this.handleGoToPage}>{oneLess+1}</button>
                <button className='page current'>{currentPage+1}</button>
                <button className={oneMoreBtn} id={oneMore} onClick={this.handleGoToPage}>{oneMore+1}</button>
                <button className={twoMoreBtn} id={twoMore} onClick={this.handleGoToPage}>{twoMore+1}</button>
                <button className={lastEllipsis} id={currentPage+3} onClick={this.handleGoToPage}>...</button>
                <button className={hideLast} id={lastPage} onClick={this.handleGoToPage}>{lastPage+1}</button>
                <button className='prev-next btn' onClick={this.handleGoToNext}>Next</button>

            </div>
        )
    }
}

export default Pagination;
