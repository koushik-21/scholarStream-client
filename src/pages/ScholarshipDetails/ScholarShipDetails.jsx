import React from "react";
import { Link, useLoaderData } from "react-router";

const ScholarShipDetails = () => {
  const data = useLoaderData();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* scholarship-details */}
      <div
        className="flex flex-col md:flex-row border border-gray-500 rounded-2xl
                   p-4 md:p-4 mt-10 my-5 gap-4 md:gap-10"
      >
        <div>
          <img
            src={data.universityImage}
            className="w-full h-60 object-cover rounded border border-gray-300"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold mt-4">
            {data.scholarshipName}
          </h1>

          <p className="text-gray-700 mt-2">
            <strong>University:</strong> {data.universityName} -- world ranking
            : {data.universityWorldRank}
          </p>

          <p className="text-gray-700">
            <strong>Location:</strong> {data.universityCity},{" "}
            {data.universityCountry}
          </p>

          <p className="mt-2">
            <strong>Category:</strong> {data.scholarshipCategory}
          </p>
          <p className="mt-2">
            <strong>Subject:</strong> {data.subjectCategory}
          </p>

          <p>
            <strong>Degree:</strong> {data.degree}
          </p>

          <p className="mt-2">
            <strong>Application Fees:</strong> {data.applicationFees} USD
          </p>

          <p className="mt-2">
            <strong>Deadline:</strong> {data.applicationDeadline}
          </p>
        </div>
      </div>
      {/* apply btn */}
      <div className=" flex justify-center">
        <Link
          className="border bg-gray-200 btn m-2 font-semibold"
          state={{ scholarship: data }}
          to="/payment"
        >
          Apply for Scholarship
        </Link>
      </div>
      {/* review-section */}
      <div className="border border-gray-500 rounded-2xl mt-5 p-4 md:p-4">
        <p className="text-2xl text-center py-2">
          <i className="fa-regular fa-star"></i> Reviews{" "}
          <i className="fa-regular fa-star"></i>
        </p>
        <p className="text-center font-semibold py-2">No reviews to show.</p>
      </div>
    </div>
  );
};

export default ScholarShipDetails;
