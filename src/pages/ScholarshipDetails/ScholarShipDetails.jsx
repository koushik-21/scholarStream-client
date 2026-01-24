// import React from "react";
// import { Link, useLoaderData } from "react-router";
// import ScholarShipReview from "./ScholarShipReview";

// const ScholarShipDetails = () => {
//   const data = useLoaderData();

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       {/* scholarship-details */}
//       <div
//         className="flex flex-col md:flex-row border border-gray-500 rounded-2xl
//                    p-4 md:p-4 mt-10 my-5 gap-4 md:gap-10"
//       >
//         <div>
//           <img
//             src={data.universityImage}
//             className="w-full h-60 object-cover rounded border border-gray-300"
//             alt=""
//           />
//         </div>
//         <div>
//           <h1 className="text-xl md:text-2xl font-bold mt-4">
//             {data.scholarshipName}
//           </h1>

//           <p className="text-gray-700 mt-2">
//             <strong>University:</strong> {data.universityName} -- world ranking
//             : {data.universityWorldRank}
//           </p>

//           <p className="text-gray-700">
//             <strong>Location:</strong> {data.universityCity},{" "}
//             {data.universityCountry}
//           </p>

//           <p className="mt-2">
//             <strong>Category:</strong> {data.scholarshipCategory}
//           </p>
//           <p className="mt-2">
//             <strong>Subject:</strong> {data.subjectCategory}
//           </p>

//           <p>
//             <strong>Degree:</strong> {data.degree}
//           </p>

//           <p className="mt-2">
//             <strong>Application Fees:</strong> {data.applicationFees} USD
//           </p>

//           <p className="mt-2">
//             <strong>Deadline:</strong> {data.applicationDeadline}
//           </p>
//         </div>
//       </div>
//       {/* apply btn */}
//       <div className=" flex justify-center">
//         <Link
//           className="border bg-gray-200 btn m-2 font-semibold"
//           state={{ scholarship: data }}
//           to="/payment"
//         >
//           Apply for Scholarship
//         </Link>
//       </div>
//       {/* review-section */}
//       <div className="border border-gray-500 rounded-2xl mt-5 p-4 md:p-4">
//         <p className="text-2xl text-center py-2">
//           <i className="fa-regular fa-star"></i> Reviews{" "}
//           <i className="fa-regular fa-star"></i>
//         </p>
//         <ScholarShipReview scholarshipId={data._id} />
//       </div>
//     </div>
//   );
// };

// export default ScholarShipDetails;
import React from "react";
import { Link, useLoaderData } from "react-router";
import ScholarShipReview from "./ScholarShipReview";

const ScholarShipDetails = () => {
  const data = useLoaderData();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto bg-base-100 text-base-content min-h-screen transition-colors duration-300">
      {/* 1. Scholarship Details Card */}
      <div className="card lg:card-side bg-base-200 shadow-xl border border-base-300 overflow-hidden mt-6">
        {/* University Image Section */}
        <figure className="lg:w-1/2">
          <img
            src={data.universityImage}
            className="w-full h-72 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
            alt={data.universityName}
          />
        </figure>

        {/* Info Content Section */}
        <div className="card-body lg:w-1/2 p-6 md:p-10">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl md:text-3xl font-black leading-tight">
              {data.scholarshipName}
            </h1>
            <div className="badge badge-primary font-bold px-4 py-3 shrink-0">
              #{data.universityWorldRank} Rank
            </div>
          </div>

          <div className="divider my-2 opacity-50"></div>

          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-university text-primary w-5"></i>
              <span className="font-bold">University:</span>{" "}
              {data.universityName}
            </p>

            <p className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-error w-5"></i>
              <span className="font-bold">Location:</span> {data.universityCity}
              , {data.universityCountry}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-base-300 p-3 rounded-xl">
                <p className="text-xs uppercase opacity-60 font-bold">
                  Category
                </p>
                <p className="font-semibold">{data.scholarshipCategory}</p>
              </div>
              <div className="bg-base-300 p-3 rounded-xl">
                <p className="text-xs uppercase opacity-60 font-bold">Degree</p>
                <p className="font-semibold">{data.degree}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-base-300">
              <p className="text-lg">
                <span className="font-bold">Application Fees:</span>
                <span className="text-success font-black ml-2">
                  ${data.applicationFees} USD
                </span>
              </p>
              <p className="mt-1">
                <span className="font-bold">Deadline:</span>
                <span className="text-error font-medium ml-2">
                  {data.applicationDeadline}
                </span>
              </p>
            </div>
          </div>

          {/* 2. Apply Action Button */}
          <div className="card-actions justify-center lg:justify-start mt-8">
            <Link
              className="btn btn-lg btn-primary w-full md:w-auto px-10 shadow-lg shadow-primary/20 
                         font-bold tracking-wide transition-all hover:-translate-y-1"
              state={{ scholarship: data }}
              to="/payment"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Apply for Scholarship
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Review Section */}
      <div className="bg-base-200 rounded-3xl mt-12 p-6 md:p-10 border border-base-300 shadow-inner">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-black flex items-center gap-4">
            <i className="fa-solid fa-star text-yellow-400"></i>
            User Reviews
            <i className="fa-solid fa-star text-yellow-400"></i>
          </h2>
          <div className="w-16 h-1 bg-primary mt-2 rounded-full"></div>
        </div>

        <div className="bg-base-100 rounded-2xl p-4 md:p-6 shadow-sm border border-base-300">
          <ScholarShipReview scholarshipId={data._id} />
        </div>
      </div>
    </div>
  );
};

export default ScholarShipDetails;
