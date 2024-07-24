import React from "react";
// import { constants } from "../../../constants";
// import { Typography } from "../../../components/ui";

const Companies: React.FC = () => {
  return (
    <>
      {/* <div className="flex flex-col lg:flex-row min-h-[75vh] pt-[80px]">
      <div className="p-[20px] xl:p-[100px] lg:w-1/2 bg-black text-white">
        <Typography as="h2" variant="lg" color="white">
          Trusted by developers.
        </Typography>
        <Typography as="p" variant="sm" className="text-gray-300">
          Our service is the preferred choice of leading companies, design
          teams, and renowned designers worldwide. Trust us to drive your
          success with high-quality solutions and innovative design.
        </Typography>
      </div>
      <div className="w-full lg:w-1/2 min-h-[75vh] bg-cover bg-center transition-all">
        <ul
          role="list"
          className="grid grid-cols-1 xl:grid-cols-2 mt-[40px] gap-[10px] w-full"
        >
          {constants.carouselLogos && constants.carouselLogos.length
            ? constants.carouselLogos.map((company, companyIdx) => (
                <li
                  key={`${company.alt}-${companyIdx}`}
                  className="mb-4 p-4 bg-[#3D3D3D] w-full h-full rounded flex items-center cursor-pointer"
                >
                  <img
                    src={company.image}
                    alt={company.alt}
                    height={48}
                    width={48}
                    className="w-12 h-12 mr-4 rounded-full object-cover"
                  />
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div> */}
    </>
  );
};

export default Companies;
