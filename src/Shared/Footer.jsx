const Footer = () => {
  return (
    <div className="mt-28 w-full text-white">
      <div className="flex w-full">
        <div className="px-12 py-8 font-medium h-[400px] w-1/2 bg-[#1F2937] flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-[32px] ">CONTACT US</h1>
          <p className="text-xl leading-[36px]">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br /> 
            Sat - Sun: 10:00 - 23:00 <br />
          </p>
        </div>
        <div className="px-12 py-8 font-medium h-[400px] w-1/2 bg-[#111827] flex flex-col justify-center items-center text-center">
            <div>
                <h1 className="text-[32px]">Follow US</h1>
                <p className="text-xl mt-6">Join us on social media</p>
                <div>
                    
                </div>
            </div>
        </div>
      </div>
      <div className="w-full py-3 px-5 bg-[#151515] text-center">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
