import React, { useEffect, useState } from "react";


const items = ["home", "portfolio", "about", "contact", "some"];

function NewsletterNav() {
//     const { months } = this.props;
//   const [itemInView, setItemInView] = useState(months && months[0]);

//   useEffect(() => {
//     const divsToObserve = document.querySelectorAll(".div-item");

//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.intersectionRatio > 0) {
//           setItemInView(entry.target.id);
//         }
//       });
//     });

//     divsToObserve.forEach(div => observer.observe(div));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           {months.map(month => (
//             <li
//               key={`menu-${month}`}
//               className={itemInView === month ? "active" : null}
//             >
//               <a href={`#${month}`}>{month}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <main>
//       <div className='news-nav' id='news-nav'>
//               <button className={hideFirst} onClick={this.getNewsletters}>{months && months[currentPageNews]}</button>
//               <button className={firstEllipsis} id={currentPageNews - 3} onClick={this.getNewsletters}>...</button>
//               <button className={twoLessBtn} id={twoLess} onClick={this.getNewsletters}>{months && months[currentPageNews -2]}</button>
//               <button className={oneLessBtn} id={oneLess} onClick={this.getNewsletters}>{months && months[currentPageNews -1]}</button>
//               <button className='page current'>{months && months[currentPageNews]}</button>
//               <button className={oneMoreBtn} id={oneMore} onClick={this.getNewsletters}>{months && months[currentPageNews +1]}</button>
//               <button className={twoMoreBtn} id={twoMore} onClick={this.getNewsletters}>{months && months[currentPageNews +2]}</button>
//               <button className={lastEllipsis} id={currentPageNews + 3} onClick={this.getNewsletters}>...</button>
//               <button className={hideLast} id={lastPage} onClick={this.getNewsletters}>{months && months[lastPage]}</button>
//             </div>
//       </main>
//     </div>
//   );
}

export default NewsletterNav;
