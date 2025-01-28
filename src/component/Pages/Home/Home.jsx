import React, { useState } from "react";
import Header from "../../Header/Header";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import OurCustomerSay from "../../OurCustomerSay/OurCustomerSay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="mt-16 ">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <OurCustomerSay />
    </div>
  );
};

export default Home;
