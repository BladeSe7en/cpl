import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/Navbar';
import glicko2 from 'glicko2';
import moment from 'moment';
import openSocket from 'socket.io-client';
import { getNewsletters, isLoading, getFirst, getLast } from './NewslettersActions';
import $ from "jquery";
import NewsletterNav from '../NewsletterNav/NewsletterNav';

class Newsletters extends Component {
  constructor(props) {
    super(props);
    this.socket        = this.socket       .bind(this);
    this.loadMore      = this.loadMore     .bind(this);
    this.listener      = this.listener     .bind(this);
    this.monthListener = this.monthListener.bind(this);
    this.newsletterNav = this.newsletterNav.bind(this);
  }

  componentDidMount() {
    const { dispatch, news } = this.props;
    console.log('this.refs: ', this.refs.myscroll)
    this.listener()
    this.monthListener();
    this.newsletterNav();
    dispatch(getFirst())
    setTimeout(() => {
      dispatch(getLast())
    }, 1000);
    dispatch(getNewsletters(10, 0));
    this.socket()
  }

  listener() {
      console.log('this.refs: ',this.refs)
      console.log('this.refs.myscroll.scrollTop: ',this.refs.myscroll.scrollTop)
      console.log('this.refs.myscroll.clientHeight: ',this.refs.myscroll.clientHeight)
      console.log('this.refs.myscroll.scrollHeight: ',this.refs.myscroll.scrollHeight)
      this.refs.myscroll.addEventListener("scroll", () => {
        console.log('hi')
       if (
         this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
         this.refs.myscroll.scrollHeight
       ) {
         this.loadMore()
       }
     });

  }

  monthListener() {
    const { months } = this.props;

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

  newsletterNav() {

    $(document).ready(function () {
      $(document).on("scroll", onScroll);

      $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
          $(this).removeClass('active-news');
        })
        $(this).addClass('active-news');

        var target = this.hash,
          menu = target;
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      });
    });

    function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      $('#news-nav button').each(function () {
        var currLink = $(this);
        console.log('currLink0: ', currLink)
        var refElement = $(currLink.attr("href"));
        console.log('------------------', refElement.position())
        console.log('refElement: ', refElement)
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#news-nav button').removeClass("active");
          currLink.addClass("active");
          console.log('currLink: ', currLink)
        }
        else {
          currLink.removeClass("active");
        }
      });
    }


  }

  render() {
    const { news, months, currentPageNews, isLoading } = this.props;
    let lastPage = months && months.length -1
    console.log('lastPage: ',lastPage)
    let firstEllipsis = currentPageNews > 3 ? 'page' : 'hide';
        let lastEllipsis = currentPageNews < (lastPage - 3) ? 'page' : 'hide'
        let twoLess = (currentPageNews - 2)
        let oneLess = (currentPageNews - 1)
        let oneMore = (currentPageNews + 1)
        let twoMore = (currentPageNews + 2)
        let twoLessBtn = twoLess >= 0 ? 'page' : 'hide';
        let oneLessBtn = oneLess >= 0 ? 'page' : 'hide';
        let oneMoreBtn = oneMore <= (lastPage) ? 'page' : 'hide';
        let twoMoreBtn = twoMore <= (lastPage) ? 'page' : 'hide';
        let hideFirst = currentPageNews <= 2 ? 'hide' : 'page';
        let hideLast = currentPageNews <= (lastPage - 3) ? 'page' : 'hide';
        let displayWhileLoading = isLoading ? 'loading-message': 'hide';

    return (
      <div>
        <Navbar />
        <div className='newsletter-container'>
          <div className='banner-opacity-newsletter'>
            <h1 className='news-title'>Stay up to date with the latest news from Civilization Players League</h1>

            <div className='news-nav' id='news-nav'>
              {/* <NewsletterNav
              /> */}
              <button className={hideFirst} onClick={this.getNewsletters}>{months && months[currentPageNews]}</button>
              <button className={firstEllipsis} id={currentPageNews - 3} onClick={this.getNewsletters}>...</button>
              <button className={twoLessBtn} id={twoLess} onClick={this.getNewsletters}>{months && months[currentPageNews -2]}</button>
              <button className={oneLessBtn} id={oneLess} onClick={this.getNewsletters}>{months && months[currentPageNews -1]}</button>
              <button className='page current'>{months && months[currentPageNews]}</button>
              <button className={oneMoreBtn} id={oneMore} onClick={this.getNewsletters}>{months && months[currentPageNews +1]}</button>
              <button className={twoMoreBtn} id={twoMore} onClick={this.getNewsletters}>{months && months[currentPageNews +2]}</button>
              <button className={lastEllipsis} id={currentPageNews + 3} onClick={this.getNewsletters}>...</button>
              <button className={hideLast} id={lastPage} onClick={this.getNewsletters}>{months && months[lastPage]}</button>
            </div>

            <div className='news-posts' ref="myscroll">
              {news.map((post, i) => {
                let lines = post.lines
                let month = moment(Number(post.date)).format('MMMMYYYY')
                return (
                  <div className='one-post' id={month}>
                    <a id={month}></a>
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
