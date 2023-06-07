import React, { useEffect, useState } from "react";
import "./swimmers.scss";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import SearchSwimmer from "../../components/searchSwimmer/SearchSwimmer";
import SingleSwimmer from "../../components/singleSwimmer/SingleSwimmer";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const Swimmers = () => {
  const [swimmers, setSwimmers] = useState([]);

  useEffect(() => {
    fetchSwimmers();
  }, []);

  const fetchSwimmers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/swimmers/"
      );
      setSwimmers(response.data);
    } catch (error) {
      console.log("Error fetching swimmers:", error);
    }
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <SearchSwimmer />
      <div className="list">
        {swimmers.map((swimmer) => (
          <SingleSwimmer key={swimmer._id} item={swimmer}/>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Swimmers;
