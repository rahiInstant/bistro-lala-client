import { useState } from "react";
import SectionHeader from "../../component/SectionHeader";
import { set, useForm } from "react-hook-form";
const AddItem = () => {
  const [filename, setFilename] = useState('no file chosen.')
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
function handleFileUpload(e) {
  console.log('file upload')
  const file = e.target.files[0]
  if(file) {
    setFilename(file.name)
  } else {
    setFilename('no file chosen.')
  }
}

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
          <label htmlFor="file">
            <div className="px-3 py-1 cursor-pointer bg-gray-600 text-white mt-4 text-lg font-medium w-fit">Upload Photo</div>
            <p >{filename}</p>
          </label>
          <input  {...register('file')} type="file" name="" id="file" className="hidden"/>
          {/* <button type="submit"  className="bg-[#835D23] px-2 py-3 text-[#fff] text-xl font-bold mt-3">ADD ITEM</button> */}
          <input
            type="submit"
            className="bg-[#835D23] px-2 py-3 text-[#fff] text-xl font-bold mt-3 cursor-pointer block"
            value="ADD ITEM"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
