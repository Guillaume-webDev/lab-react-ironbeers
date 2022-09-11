import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import React from "react";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <h1>All Beers</h1>

      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} className="img" alt="beer" />
          <h3>{beer.name}</h3>
          <h3>{beer.tagline}</h3>
          <h3>{beer.contributed_by}</h3>
          <Link to="/beers/:beerId"> See Details:</Link>
        </div>
      ))}
    </div>
  );
}
export default AllBeers;
