
const SectionHeader = ({title,subTitle,color="#151515"}) => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <p className="text-xl italic text-[#D99904]">---{subTitle}---</p>
            <h1 className={`px-16 text-[40px] text-[${color}] mt-4 py-5 border-y-2 border-[#E8E8E8] uppercase md:max-w-[800px] text-center`}>{title}</h1>
        </div>
    );
};

export default SectionHeader;