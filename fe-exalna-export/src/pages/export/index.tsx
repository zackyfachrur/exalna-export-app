import ProductData from "@json/ProductMock.json";
import { useState } from "react";
import Notifications from "@components/ui/Notifications";

const categories = [
  "Food",
  "Computer",
  "Computer Accesories",
  "SmartPhone",
  "Headphone",
];

const Export = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredData = ProductData.filter(
    (item) =>
      item.import &&
      (selectedCategory === "" || item.productCategory === selectedCategory)
  );

  return (
    <section className="ml-[10vw] mt-24 mr-[10vw] mb-24">
      <div className="flex justify-between items-center">
        <div className="mb-8">
          <h1 className="text-5xl font-semibold">Export</h1>
          <p className="text-lg">Find The Item That You Want!</p>
        </div>
        <div className="flex px-4 py-2 rounded-2xl gap-2 bg-white w-[500px]">
          <i className="ri-search-line"></i>
          <input
            type="search"
            placeholder="Search available product.."
            className="outline-none w-full"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-3 mb-10 w-[400px]">
          <h2 className="text-xl font-bold">Categories</h2>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ""}
              onChange={() => setSelectedCategory("")}
              className="accent-red-500 w-4 h-4"
            />
            <span className="font-medium">All Categories</span>
          </label>

          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="accent-red-500 w-4 h-4"
              />
              <span className="font-medium">{category}</span>
            </label>
          ))}
        </div>

        <ul className="grid grid-cols-3 gap-4 w-full">
          {filteredData
            .filter((product) => product.export === true)
            .map((product, index) => (
              <li
                key={index}
                className="bg-white rounded-xl p-4 shadow-md flex flex-col h-[340px]"
              >
                <img
                  src={product.thumbnailURL}
                  alt={product.productName}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold mt-2">
                    {product.productName.length > 12
                      ? product.productName.slice(0, 12) + "..."
                      : product.productName}
                  </h2>
                  <p className="text-sm text-gray-700 font-semibold mt-1">
                    <i className="ri-building-4-line"></i> {product.companyName}
                  </p>
                </div>
                <p className="text-base font-medium text-gray-500">
                  {product.productCategory}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">@{product.userName}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">
                      <span className="font-medium">
                        <i className="ri-price-tag-line"></i> ${product.cost}/kg
                      </span>
                    </p>
                    <p className="text-sm">
                      <i className="ri-funds-line"></i>{" "}
                      <span className="font-medium">{product.quantity}</span>
                    </p>
                  </div>
                </div>

                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 px-4 rounded-md font-semibold transition"
                  onClick={() => Notifications("Already send a request!")}
                >
                  Request
                </button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Export;
