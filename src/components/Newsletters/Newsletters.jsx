import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../Navbar/Navbar';
import moment from 'moment';
import openSocket from 'socket.io-client';
import { getNewsletters, isLoading, getFirst, getLast, updatePageInView, activeNewsNav, jumpToDate } from './NewslettersActions';
import { Waypoint } from 'react-waypoint';

class Newsletters extends Component {
  constructor(props) {
    super(props);
    this.socket           = this.socket          .bind(this);
    this.loadMore         = this.loadMore        .bind(this);
    this.listener         = this.listener        .bind(this);
    this.handleJumpToDate = this.handleJumpToDate.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.listener()
    dispatch(getFirst())
    setTimeout(() => {
      dispatch(getLast())
    }, 1000);
    dispatch(getNewsletters(10, 0));
    this.socket()
  }

  listener() {
      this.refs.myscroll.addEventListener("scroll", () => {
       if (
         this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
         this.refs.myscroll.scrollHeight
       ) {
         this.loadMore()
       }
     });
  }

  loadMore() {
    const { dispatch, scrollingPage, months } = this.props;
    let newPage = scrollingPage + 1
    let lastPage = months && months.length -1
    console.log('last page in load more: ',lastPage)
    console.log('scrollingPage: ',scrollingPage)
    if (lastPage === scrollingPage) return
    else {
      dispatch(isLoading(true, newPage))
      setTimeout(() => {
        let skip = newPage * 10
        dispatch(getNewsletters(10, skip))
      }, 2000);
    }
  }

  handleJumpToDate(e) {
    const { dispatch, months } = this.props;
    let newPage = e.target.id;
    console.log('newPage: ',newPage)
    let limit = newPage * 10
    dispatch(activeNewsNav(newPage, months[newPage]))
    dispatch(jumpToDate(limit))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listener, false);
  }

  socket() {
    var socket = openSocket();
    socket.on('newMessage', function (msg) {
      console.log('msg: ', msg)
      const { dispatch } = this.props;
      dispatch(submitNewsletter(msg))
    });
  }

  render() {
    const { news, months, currentPageNews, isLoading, dispatch } = this.props;
    let lastPage = months && months.length -1
    console.log('lastPage: ',lastPage)
    let firstEllipsis = currentPageNews > 3 ? 'newsPage' : 'hide';
        let lastEllipsis = currentPageNews < (lastPage - 3) ? 'newsPage' : 'hide'
        let twoLess = (currentPageNews - 2)
        let oneLess = (currentPageNews - 1)
        let oneMore = (currentPageNews + 1)
        let twoMore = (currentPageNews + 2)
        let twoLessBtn = twoLess >= 0 ? 'newsPage' : 'hide';
        let oneLessBtn = oneLess >= 0 ? 'newsPage' : 'hide';
        let oneMoreBtn = oneMore <= (lastPage) ? 'newsPage' : 'hide';
        let twoMoreBtn = twoMore <= (lastPage) ? 'newsPage' : 'hide';
        let hideFirst = currentPageNews <= 2 ? 'hide' : 'newsPage';
        let hideLast = currentPageNews <= (lastPage - 3) ? 'newsPage' : 'hide';
        let displayWhileLoading = isLoading ? 'loading-message': 'hide';

      

    return (
      <div>
        <Navbar />
        <div className='newsletter-container'>
          <div className='banner-opacity-newsletter'>
            <h1 className='news-title'>Stay up to date with the latest news from Civilization Players League</h1>

            {/* this navbar for the newsletter could possibly be made into its own component. */}
            <div className='news-nav' id='news-nav'>
              <Link to={`/Newsletters#${months[0]}`}>
                <button className={hideFirst} onClick={this.handleJumpToDate}>{months && months[0]}</button>
              </Link>
              <Link to={`/Newsletters#${months[currentPageNews - 3]}`}>
                <button className={firstEllipsis} id={currentPageNews - 3} onClick={this.handleJumpToDate}>...</button>
              </Link>
              <Link to={`/Newsletters#${months[currentPageNews - 2]}`}>
                <button className={twoLessBtn} id={twoLess} onClick={this.handleJumpToDate}>{months && months[currentPageNews - 2]}</button>
              </Link>
              <Link to={`/Newsletters#${months[currentPageNews - 1]}`}>
                <button className={oneLessBtn} id={oneLess} onClick={this.handleJumpToDate}>{months && months[currentPageNews - 1]}</button>
              </Link>
              <Link to={`/Newsletters#${months[currentPageNews]}`}>
                <button className='newsPage currentNews'>{months && months[currentPageNews]}</button>
              </Link>
              <Link to={`/Newsletters#${months[currentPageNews + 1]}`}>
                <button className={oneMoreBtn} id={oneMore} onClick={this.handleJumpToDate}>{months && months[currentPageNews + 1]}</button>
              </Link>
              <Link to={`/Newsletters#${months[currentPageNews + 2]}`}>
                <button className={twoMoreBtn} id={twoMore} onClick={this.handleJumpToDate}>{months && months[currentPageNews + 2]}</button>
              </Link>
              <Link to={`/Newsletters#${months[currentPageNews + 3]}`}>
                <button className={lastEllipsis} id={currentPageNews + 3} onClick={this.handleJumpToDate}>...</button>
              </Link>
              <Link to={`/Newsletters#${months[lastPage]}`}>
                <button className={hideLast} id={lastPage} onClick={this.handleJumpToDate}>{months && months[lastPage]}</button>
              </Link>
            </div>

            <div className='news-posts' id='news-posts' ref="myscroll">
              {news && news.map((post, i) => {
                let lines = post.lines
                let month = moment(Number(post.date)).format('MMMM YYYY')
                console.log('month, ', month);
                return (
                  <div className='one-post' id={month}>
                    <Waypoint onEnter={() => dispatch(updatePageInView(month))} />
                    <div className='news-date'>{moment(Number(post.date)).format('lll')}</div>
                    {lines.map(line => {
                      return (<p className='line'>{line}</p>)
                    })}
                  </div>
                )
              })}
              <div className={displayWhileLoading}>
                <h1>Loading...</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsletters;
