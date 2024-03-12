import FAQ from "../pages/faq";
import Blog from "../pages/blog";
import Calculator from "../pages/calculator";
import { exploreItems } from "../constants/menus";
import { useState } from "react";

function Explore() {
  const [selected, setSelected] = useState(1);

  const renderItem = (key) => {
    switch (key) {
      case 1:
        return <Calculator />;
      case 2:
        return <FAQ />;
      case 3:
        return <Blog />;
      default:
        return null;
    }
  };
  return (
    <div id="explore" className=" px-2 py-14 sm:px-0">
      <div className=" flex  cursor-pointer justify-around text-xl font-medium uppercase ">
        {exploreItems?.map((el) => (
          <span
            className={`${selected === el.id ? "text-[#EF2670] underline  underline-offset-4 " : ""}`}
            onClick={() => setSelected(el.id)}
          >
            {el.name}
          </span>
        ))}
      </div>
      {renderItem(selected)}
    </div>
  );
}

export default Explore;
