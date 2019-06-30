import moment from 'moment';

const initialState = {
   news: [],
   years: [],
   isLoading: false,
   scrollingPage: 0,
   firstMonth: '',
   lastMonth: '',
   currentPageNews: 0
}

export default function NewslettersReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case 'GET_NEWSLETTERS_FULFILLED': {
            console.log('payload: ',payload)
            if (state.news.length !== 0) {
                var newNews = state.news;
                console.log(1)
            } else {
                var newNews = []
                console.log(2)
            }
            console.log('first newNews: ',newNews)
            payload.forEach(post => {
                newNews.push(post)
            })
            console.log('newNews: ',newNews)
            let years = [];
            payload.forEach(item => {
               let date = moment(Number(item.date)).format('YYYY')
                years.push(date)
            });
            return {
                ...state,
                news: newNews,
                years: [...new Set(years)],
                isLoading: false
            }
        }
        case 'TOGGLE_LOADING': {
            return {
                ...state,
                ...payload
            }
        }

        case 'GET_FIRST_FULFILLED': {
            console.log('payload first: ',payload)
                                                                                                                     
            

               
            return {
                ...state,
               firstMonth: payload[0]
            }
        }

        case 'GET_LAST_FULFILLED': {
            console.log('firstMonth in get last: ',state.firstMonth.date)
            console.log('last date payload: ',payload[0].date)
                                                                                                                     
            let firstDate = moment(Number(state.firstMonth.date));
            //let lastDate = moment(Number(1533495600000))
            let lastDate = moment(Number(payload[0].date))
console.log('first date: ', moment(firstDate).format('MMMM YYYY'))
console.log('last date: ', moment(lastDate).format('MMMM YYYY'))
            var getDates = (startDate, endDate) => {
                var dates = [],
                    currentDate = startDate,
                    addDays = function(days) {
                      var date = new Date(this.valueOf());
                      date.setMonth(date.getMonth() + days);
                      return date;
                    };
                while (currentDate <= endDate) {
                  dates.push(moment(currentDate).format('MMMM YYYY'));
                  currentDate = addDays.call(currentDate, 1);
                }
                return dates;
              };
              var dates = getDates(new Date(firstDate), new Date(lastDate)); 

               
            return {
                ...state,
                lastMonth: payload[0],
                months: dates
            }
        }

   
        default: {
            return state
          }
    }
}
