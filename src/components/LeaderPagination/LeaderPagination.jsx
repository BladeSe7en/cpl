import React, { Component } from 'react';
import { previousPageLeader, nextPageLeader, goToPageLeader, viewPerPageLeaderboard, getCountLeader } from './LeaderPaginationActions';
import { getData } from '../Leaderboard/LeaderboardActions';
class LeaderPagination extends Component {
    constructor(props) {
        super(props);

        this.handleGoToPreviousLeader = this.handleGoToPreviousLeader.bind(this);
        this.handleGoToNextLeader     = this.handleGoToNextLeader    .bind(this);
        this.handleGoToPageLeader     = this.handleGoToPageLeader    .bind(this);
        this.selectViewPerPageLeader  = this.selectViewPerPageLeader .bind(this);
    }

    componentDidMount() {
        const { dispatch } =this.props;
        dispatch(getCountLeader())
    }

    handleGoToPreviousLeader() {
        const { dispatch, currentPageLeader, viewPerPageLeader, sortBy, sortOrder } = this.props;
        if (currentPageLeader === 0) {
            return
        }
        let prevPage = (currentPageLeader - 1)
        let numSkip = (+viewPerPageLeader*prevPage)
        dispatch(getData(sortBy, sortOrder, viewPerPageLeader, numSkip));
        dispatch(previousPageLeader(prevPage))
    }

    handleGoToNextLeader() {
        const { dispatch, sortBy, sortOrder,currentPageLeader, viewPerPageLeader, totalCountLeader } = this.props;
        let lastPage = (Math.floor(totalCountLeader / viewPerPageLeader)-1);
        if (currentPageLeader === lastPage+1) {
            return
        }
        let next = (currentPageLeader + 1)
        let numSkip = (+viewPerPageLeader*next)
        dispatch(getData(sortBy, sortOrder, viewPerPageLeader, numSkip));
        dispatch(nextPageLeader(next))
    }

    handleGoToPageLeader(e) {
        const { dispatch, sortBy, sortOrder, viewPerPageLeader } = this.props;
        let page = +e.target.id;
        let numSkip = (+viewPerPageLeader*page)
        dispatch(getData(sortBy, sortOrder, viewPerPageLeader, numSkip));
        dispatch(goToPageLeader(page))
    }

    selectViewPerPageLeader(e) {
        const { dispatch, sortBy, sortOrder } = this.props;
        let views = +e.target.id
        dispatch(getData(sortBy, sortOrder, views, 0));
        dispatch(viewPerPageLeaderboard(views));
    }

    render() {
        const { viewPerPageLeader, currentPageLeader, totalCountLeader } = this.props;
        let lastPage = (Math.ceil(totalCountLeader / viewPerPageLeader)-1);
        console.log('totalCountLeader: ',totalCountLeader)
        console.log('viewPerPageLeader: ',viewPerPageLeader)
        console.log('lastPage: ',lastPage)
        let firstEllipsis = currentPageLeader > 3 ? 'page' : 'hide';
        let lastEllipsis = currentPageLeader < (lastPage - 3) ? 'page' : 'hide'
        let twoLess = (currentPageLeader - 2)
        let oneLess = (currentPageLeader - 1)
        let oneMore = (currentPageLeader + 1)
        let twoMore = (currentPageLeader + 2)
        let twoLessBtn = twoLess >= 0 ? 'page' : 'hide';
        let oneLessBtn = oneLess >= 0 ? 'page' : 'hide';
        let oneMoreBtn = oneMore <= (lastPage) ? 'page' : 'hide';
        let twoMoreBtn = twoMore <= (lastPage) ? 'page' : 'hide';
        let hideFirst = currentPageLeader <= 2 ? 'hide' : 'page';
        let hideLast = currentPageLeader <= (lastPage - 3) ? 'page' : 'hide';

        return (
            <div className='pagination'>
                <div className='view-per-page'>
                    <h1>View Per Page</h1>
                    <input type='radio' name='page' defaultChecked id={10} onClick={this.selectViewPerPageLeader}/>
                    <label htmlFor='10'>10</label>
                    <input type='radio' name='page' id={25} onClick={this.selectViewPerPageLeader}/>
                    <label htmlFor='25'>25</label>
                    <input type='radio' name='page' id={50} onClick={this.selectViewPerPageLeader}/>
                    <label htmlFor='50'>50</label>
                </div>
                <button className='prev-next btn' onClick={this.handleGoToPreviousLeader}>Prev</button>
                <button className={hideFirst} onClick={this.handleGoToPageLeader}>1</button>
                <button className={firstEllipsis} id={currentPageLeader-3} onClick={this.handleGoToPageLeader}>...</button>
                <button className={twoLessBtn} id={twoLess} onClick={this.handleGoToPageLeader}>{twoLess+1}</button>
                <button className={oneLessBtn} id={oneLess} onClick={this.handleGoToPageLeader}>{oneLess+1}</button>
                <button className='page current'>{currentPageLeader+1}</button>
                <button className={oneMoreBtn} id={oneMore} onClick={this.handleGoToPageLeader}>{oneMore+1}</button>
                <button className={twoMoreBtn} id={twoMore} onClick={this.handleGoToPageLeader}>{twoMore+1}</button>
                <button className={lastEllipsis} id={currentPageLeader+3} onClick={this.handleGoToPageLeader}>...</button>
                <button className={hideLast} id={lastPage} onClick={this.handleGoToPageLeader}>{lastPage+1}</button>
                <button className='prev-next btn' onClick={this.handleGoToNextLeader}>Next</button>

            </div>
        )
    }
}

export default LeaderPagination;
