import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./css/BlogDetail.css"
import { Center, flexbox } from "@chakra-ui/react";
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



      <div className="card">
        <img
          src={`http://127.0.0.1:8000${detailListing.photo}`}
          alt=""
          style={{
            width: "700px",
            marginTop: "19px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
          className="mb-6 shadow-md rounded-lg bg-slate-50 sm:w-[17rem] sm:mb-0 xl:mb-6"
          width="1216"
          height="640"
        />
        <p>{detailListing.detail_desc}.</p>
        <p className="card-footer">{detailListing.author_name}.</p>
      </div>
    </>
  );
};


export default ListingDetail;

