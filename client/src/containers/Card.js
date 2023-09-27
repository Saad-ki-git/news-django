import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Fixed typo in PropTypes


function Card(props) {
  return (
    <>
  {/* //  <div className=""> */}
    {/* //  <div className="grid grid-cols-1 x.l:grid-cols-3 gap-y-10 gap-x-6 items-start p-8"> */}
      {/* First Feature */}
      
      <div className="mb-6 mt-10 shadow-md rounded-lg bg-slate-50">
      <div className="flex flex-wrap w-full sm:flex-row xl:flex-col ml-[-60px] sm:ml-0 items-star">
        <div style={{marginLeft:"100px"}} className="order-1 sm:ml-2 xl:ml-0">
          <h3 className="mb-1 text-gray-1000 font-semibold dark:text-slate-200">
            <span className="mb-1 block text-sm leading-6 text-gray-800">{props.author_name}</span>
            {props.title}
          </h3>
          <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
            <p>{props.desc}.</p>
          </div>
          <Link
            className="group bg-gray-200 text-gray-900 hover:bg-gray-300 inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6 mb-6"
            to={`${props.slug}`}
            >
          
            Learn more
            <span className="sr-only">, Completely unstyled, fully accessible UI components</span>
            <svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </Link>
        </div>
      </div>
      </div>
    {/* </div>
   </div> */}
   </>
  );
}

Card.propTypes = {
  // Define your propTypes here
  title: PropTypes.string.isRequired,
  author_name: PropTypes.string.isRequired,
};

export default Card;
