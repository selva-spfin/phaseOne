import { Tab } from "@headlessui/react";
import FAQ from "./faq";
import Blog from "./blog";
import Calculator from "./calculator";
import { exploreItems } from "../constants/menus";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MyTabs() {
  return (
    <div className=" px-2 py-14 sm:px-0">
      <Tab.Group selectedIndex={1}>
        <Tab.List className="flex items-center max-w-max justify-around  space-x-6 rounded-xl bg-gray-300 p-5 transition-all duration-500  ">
          {exploreItems.map((items) => (
            <Tab
              se
              className={({ selected }) =>
                classNames(
                  "rounded p-2 text-lg font-medium leading-5 ",

                  selected
                    ? "bg-[#EF2670] text-white shadow  focus:ring-2 focus:ring-[#2B75BC] focus:ring-offset-2  focus:outline-none   "
                    : "text-white hover:bg-[#2B75BC] ",
                )
              }
            >
              {items.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full mt-2">
          <Tab.Panel>
            <Calculator />
          </Tab.Panel>
          <Tab.Panel>
            <FAQ />
          </Tab.Panel>
          <Tab.Panel>
            <Blog />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MyTabs;
