import React from "react";
// import axios from "axios";
import "./Categories.css";
import ProCategory from "./CategoryData.json";
// const baseURL = "https://dummyjson.com/products";
function Categories() {
  //  const [category, setCategory] = useState(ProCategory);

  // useEffect(() => {
  //   // fetch data
  //   axios.get(baseURL).then((response) => {
  //     console.log(setCategory(response.data.products));
  //   });
  // }, []);

  return (
    <div>
      <div className=" mx-auto w-full overflow-hidden relative">
        <div className="w-full h-full absolute">
          <div
            className="w-1/4 h-full absolute z-50 left-0"
            style={{
              background:
                "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div
            className="w-1/4 h-full absolute z-50 right-0"
            style={{
              background:
                "linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>
        <div
          className="carousel-items flex items-center justify-center"
          style={{
            width: "fit-content",
            animation: "carouselAnim 380s infinite alternate linear",
          }}
        >
          {/* {categ()} */}
          {ProCategory.products.map((e, index) => {
            return (
              <>
                <div>
                  {" "}
                  <div
                    key={index}
                    className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
                    style={{ width: "270px" }}
                  >
                    <img
                      className="h-16 w-16 rounded-full shadow-2xl"
                      src={e.thumbnail}
                      alt="Img"
                    />

                    <button className="btn  btn-primary mt-4 mb-2  rounded-full px-10 py-1 font-semibold  focus:outline-none">
                      {e.brand}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
