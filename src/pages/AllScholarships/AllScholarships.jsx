import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Loader from "../../components/Loader/Loader";

const AllScholarships = () => {
  const initialData = useLoaderData();
  const navigate = useNavigate();

  const [scholarships, setScholarships] = useState(initialData.scholarships);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [page, setPage] = useState(initialData.page);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  // Fetch updated data when filters/search/sort/page changes
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await fetch(
  //       `https://scholar-stream-server-mu.vercel.app/allScholarships?page=${page}&search=${search}&category=${category}&country=${country}&sort=${sort}`
  //     );
  //     const data = await res.json();
  //     setScholarships(data.scholarships);
  //     setTotalPages(data.totalPages);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [page, search, category, country, sort]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://scholar-stream-server-mu.vercel.app/allScholarships?page=${page}&search=${search}&category=${category}&country=${country}&sort=${sort}`
        );

        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setScholarships(data.scholarships);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, search, category, country, sort]);
  if (loading) return <Loader />;
  return (
    <div className="px-2 md:px-4 py-8">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold text-gray-700">
          All Scholarships:
        </h2>

        {/* Search Input With Icon */}
        <div className="relative mt-3 md:mt-0">
          <i className="fa-brands fa-searchengin absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>

          <input
            type="text"
            placeholder="Search scholarships/universities/degrees"
            className="border w-96 pl-10 pr-3 py-2 rounded"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        {/* Category filter */}
        <select
          className="border px-3 py-2 rounded"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Filter by Category ⬇️</option>
          <option value="Full Fund">Full Fund </option>
          <option value="Partial">Partial</option>
          <option value="Self-fund">Self-fund</option>
        </select>

        {/* Country filter */}
        <select
          className="border px-3 py-2 rounded"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Filter by Country ⬇️</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="Australia">Australia</option>
          <option value="Italy">Italy</option>
          <option value="France">France</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Sweden">Sweden</option>
          <option value="Finland">Finland</option>
          <option value="China">China</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Singapore">Singapore</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
        </select>

        {/* Sort */}
        <select
          className="border px-3 py-2 rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By ⬇️</option>
          <option value="feesAsc">Application Fees: Low → High</option>
          <option value="feesDesc">Application Fees: High → Low</option>
          {/* <option value="newest">Newest First</option> */}
        </select>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((item) => (
          <div
            key={item._id}
            className="border border-gray-600 rounded-xl shadow p-4 bg-white"
          >
            <img
              src={item.universityImage}
              className="w-full h-40 object-cover rounded"
              alt=""
            />

            <h3 className="text-lg font-bold mt-2">{item.scholarshipName}</h3>

            <p className="text-sm text-gray-600">
              {item.universityName} — {item.universityCountry}
            </p>

            <p className="text-xs">
              <span className="font-semibold">Category:</span>{" "}
              {item.scholarshipCategory}
            </p>

            <p className="text-xs">
              <span className="font-semibold">Degree:</span> {item.degree}
            </p>

            <p className="text-sm mt-2">
              <span className="font-semibold">Application Fees:</span>{" "}
              {item.applicationFees} USD
            </p>

            <p className="text-sm">
              <span className="font-semibold">Deadline:</span>{" "}
              {item.applicationDeadline}
            </p>

            {/* VIEW DETAILS BUTTON */}
            <button
              onClick={() => navigate(`/scholarship/${item._id}`)}
              className="mt-3 w-full   py-2 rounded
              font-extrabold tracking-wide  text-white
              font-[Poppins] bg-gradient-to-r from-blue-600 to-cyan-400 "
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-3">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded"
        >
          Prev
        </button>

        <span className="px-4 py-2 font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllScholarships;
