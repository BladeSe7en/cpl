import React, { Component } from 'react';
import { previousPageBlog, nextPageBlog, goToPageBlog, viewPerPageBlog, getCountBlog, resetBlog } from './BlogPaginationActions';
import { getBlogs } from '../ForumTopics/ForumTopicsActions';
class BlogPagination extends Component {
    constructor(props) {
        super(props);

        this.handleGoToPreviousBlog = this.handleGoToPreviousBlog.bind(this);
        this.handleGoToNextBlog     = this.handleGoToNextBlog    .bind(this);
        this.handleGoToPageBlog     = this.handleGoToPageBlog    .bind(this);
        this.selectViewPerPageBlog  = this.selectViewPerPageBlog .bind(this);
    }

    componentDidMount() {
        const { dispatch } =this.props;
        dispatch(getCountBlog())
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(resetBlog())
    }

    handleGoToPreviousBlog() {
        const { dispatch, currentPageBlog, viewPerPageBlog } = this.props;
        if (currentPageBlog === 0) {
            return
        }
        let prevPage = (currentPageBlog - 1)
        let numSkip = (+viewPerPageBlog*prevPage)
        dispatch(getBlogs(viewPerPageBlog, numSkip));
        dispatch(previousPageBlog(prevPage))
    }

    handleGoToNextBlog() {
        const { dispatch, currentPageBlog, viewPerPageBlog, totalCountBlog } = this.props;
        let lastPage = (Math.floor(totalCountBlog / viewPerPageBlog));
        console.log('--------------------')
        console.log('currentPage: ',currentPageBlog)
        console.log('last page: ',lastPage)
        console.log('--------------------')
        if (currentPageBlog === lastPage) {
            return
        }
        let next = (currentPageBlog + 1)
        let numSkip = (+viewPerPageBlog*next)
        console.log('---next: ',next)
        console.log('---numSkip: ',numSkip)
        dispatch(getBlogs(viewPerPageBlog, numSkip));
        dispatch(nextPageBlog(next))
    }

    handleGoToPageBlog(e) {
        const { dispatch, viewPerPageBlog } = this.props;
        let page = +e.target.id;
        let numSkip = (+viewPerPageBlog*page)
        dispatch(getBlogs(viewPerPageBlog, numSkip));
        dispatch(goToPageBlog(page))
    }

    selectViewPerPageBlog(e) {
        console.log('inside select view')
        const { dispatch } = this.props;
        let views = +e.target.id
        dispatch(getBlogs(views, 0));
        dispatch(viewPerPageBlog(views));
    }

    render() {
        const { viewPerPageBlog, currentPageBlog, totalCountBlog } = this.props;
        let lastPage = (Math.ceil(totalCountBlog / viewPerPageBlog)-1);
        console.log('lastPage: ',lastPage)
        let firstEllipsis = currentPageBlog > 3 ? 'page' : 'hide';
        let lastEllipsis = currentPageBlog < (lastPage - 3) ? 'page' : 'hide'
        let twoLess = (currentPageBlog - 2)
        let oneLess = (currentPageBlog - 1)
        let oneMore = (currentPageBlog + 1)
        let twoMore = (currentPageBlog + 2)
        let twoLessBtn = twoLess >= 0 ? 'page' : 'hide';
        let oneLessBtn = oneLess >= 0 ? 'page' : 'hide';
        let oneMoreBtn = oneMore <= (lastPage) ? 'page' : 'hide';
        let twoMoreBtn = twoMore <= (lastPage) ? 'page' : 'hide';
        let hideFirst = currentPageBlog <= 2 ? 'hide' : 'page';
        let hideLast = currentPageBlog <= (lastPage - 3) ? 'page' : 'hide';

        return (
            <div className='pagination'>
                <div className='view-per-page'>
                    <h1>View Per Page</h1>
                    <input type='radio' name='page' defaultChecked id={10} onClick={this.selectViewPerPageBlog}/>
                    <label htmlFor='10'>10</label>
                    <input type='radio' name='page' id={25} onClick={this.selectViewPerPageBlog}/>
                    <label htmlFor='25'>25</label>
                    <input type='radio' name='page' id={50} onClick={this.selectViewPerPageBlog}/>
                    <label htmlFor='50'>50</label>
                </div>
                <button className='prev-next btn' onClick={this.handleGoToPreviousBlog}>Prev</button>
                <button className={hideFirst} onClick={this.handleGoToPageBlog}>1</button>
                <button className={firstEllipsis} id={currentPageBlog-3} onClick={this.handleGoToPageBlog}>...</button>
                <button className={twoLessBtn} id={twoLess} onClick={this.handleGoToPageBlog}>{twoLess+1}</button>
                <button className={oneLessBtn} id={oneLess} onClick={this.handleGoToPageBlog}>{oneLess+1}</button>
                <button className='page current'>{currentPageBlog+1}</button>
                <button className={oneMoreBtn} id={oneMore} onClick={this.handleGoToPageBlog}>{oneMore+1}</button>
                <button className={twoMoreBtn} id={twoMore} onClick={this.handleGoToPageBlog}>{twoMore+1}</button>
                <button className={lastEllipsis} id={currentPageBlog+3} onClick={this.handleGoToPageBlog}>...</button>
                <button className={hideLast} id={lastPage} onClick={this.handleGoToPageBlog}>{lastPage+1}</button>
                <button className='prev-next btn' onClick={this.handleGoToNextBlog}>Next</button>

            </div>
        )
    }
}

export default BlogPagination;
