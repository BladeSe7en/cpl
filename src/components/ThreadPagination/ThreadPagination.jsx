import React, { Component } from 'react';
import { previousPageThread, nextPageThread, goToPageThread, viewingPerPageThread } from './ThreadPaginationActions';
import { getThreadsById } from '../ForumTopics/ForumTopicsActions';
class ThreadPagination extends Component {
    constructor(props) {
        super(props);

        this.handleGoToPreviousThread = this.handleGoToPreviousThread.bind(this);
        this.handleGoToNextThread     = this.handleGoToNextThread    .bind(this);
        this.handleGoToPageThread     = this.handleGoToPageThread    .bind(this);
        this.selectViewPerPageThread  = this.selectViewPerPageThread .bind(this);
    }

    handleLastPage() {
        const { dispatch } =this.props;
        dispatch(setLastPage())
    }

    handleGoToPreviousThread() {
        const { dispatch, viewingThreadId, currentPageThread, viewPerPageThread } = this.props;
        if (currentPageThread === 0) {
            return
        }
        let prevPage = (currentPageThread - 1)
        let numSkip = (+viewPerPageThread*prevPage)
        dispatch(getThreadsById(viewingThreadId, viewPerPageThread, numSkip));
        dispatch(previousPageThread(prevPage))
    }

    handleGoToNextThread() {
        const { dispatch, currentPageThread, viewingThreadId, viewPerPageThread, totalCountThread } = this.props;
        let lastPage = (Math.floor(totalCountThread / viewPerPageThread));
        console.log('lastPage: ',lastPage)
        if (currentPageThread === lastPage) {
            return
        }
        let next = (currentPageThread + 1)
        let numSkip = (+viewPerPageThread*next)
        dispatch(getThreadsById(viewingThreadId, viewPerPageThread, numSkip));
        dispatch(nextPageThread(next))
    }

    handleGoToPageThread(e) {
        const { dispatch, viewPerPageThread, viewingThreadId } = this.props;
        let page = +e.target.id;
        let numSkip = (+viewPerPageThread*page)
        dispatch(getThreadsById(viewingThreadId, viewPerPageThread, numSkip));
        dispatch(goToPageThread(page))
    }

    selectViewPerPageThread(e) {
        console.log('inside select view')
        const { dispatch, viewingThreadId, viewPerPageThread } = this.props;
        let views = +e.target.id
        dispatch(getThreadsById(viewingThreadId, viewPerPageThread, 0));
        dispatch(viewingPerPageThread(views));
    }

    render() {
        const { viewPerPageThread, currentPageThread, totalCountThread } = this.props;
        let lastPage = (Math.ceil(totalCountThread / viewPerPageThread)-1);
        console.log('totalCountThread: ',totalCountThread)
        console.log('viewPerPageThread: ',viewPerPageThread)
        console.log('last page in render: ',lastPage)
        let firstEllipsis = currentPageThread > 3 ? 'page' : 'hide';
        let lastEllipsis = currentPageThread < (lastPage - 3) ? 'page' : 'hide'
        let twoLess = (currentPageThread - 2)
        let oneLess = (currentPageThread - 1)
        let oneMore = (currentPageThread + 1)
        let twoMore = (currentPageThread + 2)
        let twoLessBtn = twoLess >= 0 ? 'page' : 'hide';
        let oneLessBtn = oneLess >= 0 ? 'page' : 'hide';
        let oneMoreBtn = oneMore <= (lastPage) ? 'page' : 'hide';
        let twoMoreBtn = twoMore <= (lastPage) ? 'page' : 'hide';
        let hideFirst = currentPageThread <= 2 ? 'hide' : 'page';
        let hideLast = currentPageThread <= (lastPage - 3) ? 'page' : 'hide';

        return (
            <div className='pagination'>
                <div className='view-per-page'>
                    <h1>View Per Page</h1>
                    <input type='radio' name='page' defaultChecked id={10} onClick={this.selectViewPerPageThread}/>
                    <label htmlFor='10'>10</label>
                    <input type='radio' name='page' id={25} onClick={this.selectViewPerPageThread}/>
                    <label htmlFor='25'>25</label>
                    <input type='radio' name='page' id={50} onClick={this.selectViewPerPageThread}/>
                    <label htmlFor='50'>50</label>
                </div>
                <button className='prev-next btn' onClick={this.handleGoToPreviousThread}>Prev</button>
                <button className={hideFirst} onClick={this.handleGoToPageThread}>1</button>
                <button className={firstEllipsis} id={currentPageThread-3} onClick={this.handleGoToPageThread}>...</button>
                <button className={twoLessBtn} id={twoLess} onClick={this.handleGoToPageThread}>{twoLess+1}</button>
                <button className={oneLessBtn} id={oneLess} onClick={this.handleGoToPageThread}>{oneLess+1}</button>
                <button className='page current'>{currentPageThread+1}</button>
                <button className={oneMoreBtn} id={oneMore} onClick={this.handleGoToPageThread}>{oneMore+1}</button>
                <button className={twoMoreBtn} id={twoMore} onClick={this.handleGoToPageThread}>{twoMore+1}</button>
                <button className={lastEllipsis} id={currentPageThread+3} onClick={this.handleGoToPageThread}>...</button>
                <button className={hideLast} id={lastPage} onClick={this.handleGoToPageThread}>{lastPage+1}</button>
                <button className='prev-next btn' onClick={this.handleGoToNextThread}>Next</button>

            </div>
        )
    }
}

export default ThreadPagination;




