import { useState } from "react";
import SectionHeader from "../../component/SectionHeader";
import { set, useForm } from "react-hook-form";
const AddItem = () => {
  const [filename, setFilename] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("from add item >>> ", filename);
  return (
    <div className=" mb-20  ">
      <SectionHeader subTitle="What's new?" title="ADD AN ITEM" />
      <div className="p-10 rounded-xl bg-[#F3F3F3] mt-10 max-w-[800px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <label
            htmlFor="recipe-name"
            className="text-xl font-semibold text-[#444444] block mb-3"
          >
            Recipe Name*
          </label>
          <input
            id="recipe-name"
            className="w-full p-4 outline-none bg-[#FFFFFF]  rounded-md text-lg"
            {...register("Recipe name", { required: true })}
            placeholder="Input Recipe Name"
          />
          {/* Category and Price */}
          <div className="flex items-center w-full gap-3 mt-5">
            <div className="w-full">
              <label
                htmlFor=""
                className="text-xl font-semibold text-[#444444] block mb-3"
              >
                Category
              </label>
              <select
                name=""
                id=""
                {...register("category", { required: true })}
                className="w-full p-4 outline-none bg-[#FFFFFF]  rounded-md text-lg"
              >
                <option value="popular">popular</option>
                <option value="salad">salad</option>
                <option value="drinks">drinks</option>
                <option value="dessert">dessert</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="recipe-name"
                className="text-xl font-semibold text-[#444444] block mb-3"
              >
                Price*
              </label>
              <input
                id="recipe-name"
                className="w-full p-4 outline-none bg-[#FFFFFF]  rounded-md text-lg"
                {...register("Price", { required: true })}
                placeholder="Input Recipe price"
              />
            </div>
          </div>
          {/* Comment Box */}
          <label
            htmlFor="recipe-name"
            className="text-xl font-semibold text-[#444444] block my-3"
          >
            Recipe Details*
          </label>
          <textarea
            className="w-full p-4 rounded-md"
            {...register("details")}
          ></textarea>
          <div
            style={{
              backgroundImage: `url(${
                filename ? URL.createObjectURL(filename) : ""
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className={`mt-4  w-36 h-36 rounded-full text-4xl font-bold bg-slate-300 flex justify-center items-center`}
          >
            {filename ? "" : "+"}
          </div>
          <div className="w-fit flex items-center justify-center gap-2 mt-4">
            <label htmlFor="file" className="">
              <div className="px-3 py-1 cursor-pointer bg-gray-600 text-white  text-lg font-medium ">
                Upload Photo
              </div>
            </label>
            <div>{filename ? filename.name : "no file chosen."}</div>
          </div>

          <input
            {...register("file", {
              required: true,
              onChange: (e) => {
                if (e.target.files[0]) {
                  setFilename(e.target.files[0]);
                }
              },
            })}
            type="file"
            id="file"
            className="hidden"
            accept="image/jpeg, image/png"
            multiple
          />
          {/* <button type="submit"  className="bg-[#835D23] px-2 py-3 text-[#fff] text-xl font-bold mt-3">ADD ITEM</button> */}
          <input
            type="submit"
            className="bg-[#835D23] px-2 py-3 text-[#fff] text-xl font-bold mt-6 cursor-pointer block"
            value="ADD ITEM"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
