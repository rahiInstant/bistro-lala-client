const Paralax = ({title, subTitle}) => {
  return (
    <div className="h-[700px] flex justify-center items-center w-full mt-20 bg-fixed bg-[url('/home/chef-service.jpg')] bg-no-repeat bg-center bg-cover p-20">
      <div className="h-[330px] w-[80%] mx-auto bg-[#00000057] text-white flex items-center justify-center flex-col p-24 gap-3">
        <h1 className="text-[45px] font-semibold uppercase">{title}</h1>
        <p className="text-center">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Paralax;
