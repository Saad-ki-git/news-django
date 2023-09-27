import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/BlogDetail.css"
const ListingDetail = (props) => {
  // since we are getting only single value that's why did't using array instead using objects and no need to use map function to display
  const [detailListing, setDetailListing] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    console.log("Slug:", slug);
    if (!slug) {
      console.log("Slug is undefined, skipping API request.");
      return;
    }

    // Make API request to fetch listing details
    axios
      .get(`http://127.0.0.1:8000/api/listing/${slug}`)
      .then((res) => {
        setDetailListing(res.data);
        console.log("Response of the data: ", res.data);
      })
      .catch((err) => {
        console.error("Error fetching listing:", err);
      });
  }, [slug]);


  return (
    <>
      <div className="max-w-500 min-h-500 h-auto flex flex-col justify-center items-center max-w-800 h-400 p-10   rounded-lg   overflow-y-auto overflow-x-auto backdrop-blur-md">
      {/* <img
          src={detailListing.photo}
          alt=""
          style={{width:"700px",marginTop:"19px",marginLeft:"100px"}}
          className="mb-6 shadow-md rounded-lg bg-slate-50 sm:w-[17rem] sm:mb-0 xl:mb-6 "
          width="1216"
          height="640"
        /> */}
        <strong>{detailListing.title}</strong>
        <p>{detailListing.text}.</p>
        <p>{detailListing.is_published}</p>
        
      </div>
    </>
  );
};


export default ListingDetail;
