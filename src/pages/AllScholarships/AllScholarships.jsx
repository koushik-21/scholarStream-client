// import React, { useState, useEffect } from "react";
// import { useLoaderData, useNavigate } from "react-router";
// import Loader from "../../components/Loader/Loader";

// const AllScholarships = () => {
//   const initialData = useLoaderData();
//   const navigate = useNavigate();

//   const [scholarships, setScholarships] = useState(initialData.scholarships);
//   const [totalPages, setTotalPages] = useState(initialData.totalPages);
//   const [page, setPage] = useState(initialData.page);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [country, setCountry] = useState("");
//   const [sort, setSort] = useState("");
//   const [loading, setLoading] = useState(false);
//   // Fetch updated data when filters/search/sort/page changes
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     setLoading(true);
//   //     const res = await fetch(
//   //       `https://scholar-stream-server-mu.vercel.app/allScholarships?page=${page}&search=${search}&category=${category}&country=${country}&sort=${sort}`
//   //     );
//   //     const data = await res.json();
//   //     setScholarships(data.scholarships);
//   //     setTotalPages(data.totalPages);
//   //     setLoading(false);
//   //   };

//   //   fetchData();
//   // }, [page, search, category, country, sort]);
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://scholar-stream-server-mu.vercel.app/allScholarships?page=${page}&search=${search}&category=${category}&country=${country}&sort=${sort}`
//         );

//         if (!res.ok) throw new Error("Failed to fetch data");

//         const data = await res.json();
//         setScholarships(data.scholarships);
//         setTotalPages(data.totalPages);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page, search, category, country, sort]);
//   if (loading) return <Loader />;
//   return (
//     <div className="px-2 md:px-4 py-8">
//       {/* Header + Search */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-5">
//         <h2 className="text-2xl font-semibold text-gray-700">
//           All Scholarships:
//         </h2>

//         {/* Search Input With Icon */}
//         <div className="relative mt-3 md:mt-0">
//           <i className="fa-brands fa-searchengin absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>

//           <input
//             type="text"
//             placeholder="Search scholarships/universities/degrees"
//             className="border w-96 pl-10 pr-3 py-2 rounded"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>
//       </div>

//       {/* FILTERS */}
//       <div className="flex flex-col md:flex-row gap-3 mb-6">
//         {/* Category filter */}
//         <select
//           className="border px-3 py-2 rounded"
//           value={category}
//           onChange={(e) => {
//             setCategory(e.target.value);
//             setPage(1);
//           }}
//         >
//           <option value="">Filter by Category ⬇️</option>
//           <option value="Full Fund">Full Fund </option>
//           <option value="Partial">Partial</option>
//           <option value="Self-fund">Self-fund</option>
//         </select>

//         {/* Country filter */}
//         <select
//           className="border px-3 py-2 rounded"
//           value={country}
//           onChange={(e) => {
//             setCountry(e.target.value);
//             setPage(1);
//           }}
//         >
//           <option value="">Filter by Country ⬇️</option>
//           <option value="USA">USA</option>
//           <option value="Canada">Canada</option>
//           <option value="UK">UK</option>
//           <option value="Germany">Germany</option>
//           <option value="Australia">Australia</option>
//           <option value="Italy">Italy</option>
//           <option value="France">France</option>
//           <option value="Netherlands">Netherlands</option>
//           <option value="Sweden">Sweden</option>
//           <option value="Finland">Finland</option>
//           <option value="China">China</option>
//           <option value="Malaysia">Malaysia</option>
//           <option value="Singapore">Singapore</option>
//           <option value="Bangladesh">Bangladesh</option>
//           <option value="India">India</option>
//         </select>

//         {/* Sort */}
//         <select
//           className="border px-3 py-2 rounded"
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="">Sort By ⬇️</option>
//           <option value="feesAsc">Application Fees: Low → High</option>
//           <option value="feesDesc">Application Fees: High → Low</option>
//           {/* <option value="newest">Newest First</option> */}
//         </select>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {scholarships.map((item) => (
//           <div
//             key={item._id}
//             className="border border-gray-600 rounded-xl shadow p-4 bg-white"
//           >
//             <img
//               src={item.universityImage}
//               className="w-full h-40 object-cover rounded"
//               alt=""
//             />

//             <h3 className="text-lg font-bold mt-2">{item.scholarshipName}</h3>

//             <p className="text-sm text-gray-600">
//               {item.universityName} — {item.universityCountry}
//             </p>

//             <p className="text-xs">
//               <span className="font-semibold">Category:</span>{" "}
//               {item.scholarshipCategory}
//             </p>

//             <p className="text-xs">
//               <span className="font-semibold">Degree:</span> {item.degree}
//             </p>

//             <p className="text-sm mt-2">
//               <span className="font-semibold">Application Fees:</span>{" "}
//               {item.applicationFees} USD
//             </p>

//             <p className="text-sm">
//               <span className="font-semibold">Deadline:</span>{" "}
//               {item.applicationDeadline}
//             </p>

//             {/* VIEW DETAILS BUTTON */}
//             <button
//               onClick={() => navigate(`/scholarship/${item._id}`)}
//               className="mt-3 w-full   py-2 rounded
//               font-extrabold tracking-wide  text-white
//               font-[Poppins] bg-gradient-to-r from-blue-600 to-cyan-400 "
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-8 gap-3">
//         <button
//           disabled={page <= 1}
//           onClick={() => setPage(page - 1)}
//           className="px-4 py-2 border rounded"
//         >
//           Prev
//         </button>

//         <span className="px-4 py-2 font-semibold">
//           Page {page} of {totalPages}
//         </span>

//         <button
//           disabled={page >= totalPages}
//           onClick={() => setPage(page + 1)}
//           className="px-4 py-2 border rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllScholarships;
import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Loader from "../../components/Loader/Loader";

const AllScholarships = () => {
  const initialData = useLoaderData();
  const navigate = useNavigate();

  const [scholarships, setScholarships] = useState(
    initialData.scholarships || [],
  );
  const [totalPages, setTotalPages] = useState(initialData.totalPages || 1);
  const [page, setPage] = useState(initialData.page || 1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://scholar-stream-server-mu.vercel.app/allScholarships?page=${page}&search=${search}&category=${category}&country=${country}&sort=${sort}`,
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

    // Optional: Add a small delay for search (debounce)
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [page, search, category, country, sort]);

  if (loading && page === 1 && !search) return <Loader />;

  return (
    <div className="px-4 md:px-8 py-8 bg-base-100 text-base-content min-h-screen transition-colors duration-300">
      {/* Header + Search */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Explore Scholarships
        </h2>

        {/* Search Input Container */}
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <i className="fa-brands fa-searchengin text-primary text-xl"></i>
          </span>
          <input
            type="text"
            placeholder="Search by university or name..."
            className="input input-bordered w-full pl-11 bg-base-200 focus:input-primary transition-all"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* FILTERS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text font-medium">Category</span>
          </label>
          <select
            className="select select-bordered bg-base-200"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Categories</option>
            <option value="Full Fund">Full Fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-fund</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text font-medium">Country</span>
          </label>
          <select
            className="select select-bordered bg-base-200"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Countries</option>
            {[
              "USA",
              "Canada",
              "UK",
              "Germany",
              "Australia",
              "Italy",
              "China",
              "Bangladesh",
            ].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text font-medium">Sort</span>
          </label>
          <select
            className="select select-bordered bg-base-200"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default Sorting</option>
            <option value="feesAsc">Fees: Low to High</option>
            <option value="feesDesc">Fees: High to Low</option>
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : scholarships.length > 0 ? (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {scholarships.map((item) => (
            <div
              key={item._id}
              className="card bg-base-200 border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <figure className="relative overflow-hidden h-48">
                <img
                  src={item.universityImage}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={item.universityName}
                />
                <div className="absolute top-2 right-2 badge badge-primary font-bold">
                  {item.scholarshipCategory}
                </div>
              </figure>

              <div className="card-body p-5">
                <h3 className="card-title text-lg line-clamp-1">
                  {item.scholarshipName}
                </h3>
                <p className="text-sm opacity-70 flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                  {item.universityName}, {item.universityCountry}
                </p>

                <div className="flex flex-wrap gap-2 my-2">
                  <div className="badge badge-outline badge-sm">
                    {item.degree}
                  </div>
                  <div className="badge badge-outline badge-sm">
                    Deadline: {item.applicationDeadline}
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center border-t border-base-300 pt-4">
                  <div>
                    <p className="text-xs opacity-50 uppercase font-bold">
                      App Fee
                    </p>
                    <p className="text-lg font-bold text-success">
                      ${item.applicationFees} USD
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/scholarship/${item._id}`)}
                    className="btn btn-primary btn-sm md:btn-md shadow-lg"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-base-200 rounded-2xl">
          <h3 className="text-2xl font-bold opacity-30 italic">
            No scholarships found matching your criteria.
          </h3>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-12 gap-2">
        <div className="join shadow-md">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="join-item btn btn-outline border-base-300 disabled:opacity-30"
          >
            «
          </button>
          <button className="join-item btn btn-outline border-base-300 no-animation">
            Page {page} of {totalPages}
          </button>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="join-item btn btn-outline border-base-300"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllScholarships;
