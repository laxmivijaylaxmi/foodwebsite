// import React, { useState } from "react";
// import "./ExploreMenu.css";
// import { menu_list } from "../../MenuItem";

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <div className="explore-menu-container mt-32">
//       <h1
//         style={{ fontSize: "30px" }}
//         className="font-bold text-gray-200 px-4 text-center sm:text-xl md:text-4xl"
//       >
//         A variety of dishes crafted to delight your taste buds!
//       </h1>
//       <div className="explore-menu-list mt-9  gap-3">
//         {menu_list.map((item, i) => (
//           <div
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? "All" : item.menu_name
//               )
//             }
//             key={i}
//             className="menu-item flex flex-col items-center  transition-transform duration-500 ease-in-out transform hover:scale-105"
//           >
//             <img
//               src={item.menu_image}
//               alt={item.menu_name}
//               className={category === item.menu_name ? "active" : ""}
//             />
//             <p className="menu-name mt-2 text-lg font-medium text-gray-400">
//               {item.menu_name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreMenu;




import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../MenuItem";
import FoodDisplay from "../FoodDisplay/FoodDisplay"; // Import the FoodDisplay component

const ExploreMenu = () => {
  const [category, setCategory] = useState("All"); // Default category is All

  return (
    <div className="explore-menu-container mt-16" id="explore-menu">
      <h1
        style={{ fontSize: "30px" }}
        className="font-bold text-gray-200 px-4 text-center sm:text-xl md:text-4xl"
      >
        A variety of dishes crafted to delight your taste buds!
      </h1>
      <div className="explore-menu-list mt-9 gap-3">
        {menu_list.map((item, i) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={i}
            className="menu-item flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? "active" : ""}
            />
            <p className="menu-name mt-2 text-lg font-medium text-gray-400">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      {/* Pass selected category to FoodDisplay */}
      <FoodDisplay category={category} />
    </div>
  );
};

export default ExploreMenu;
