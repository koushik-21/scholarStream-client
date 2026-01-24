// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router";
// import student from "./student.png";
// const Home = () => {
//   // Animation Variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   const staggerContainer = {
//     animate: { transition: { staggerChildren: 0.2 } },
//   };

//   return (
//     <div className="overflow-x-hidden font-sans">
//       {/* 1. Banner / Hero Section */}
//       <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-4">
//         <motion.div
//           className="max-w-4xl mx-auto text-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1
//             className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Unlock Your Future with <br />
//             <span className="text-yellow-300">ScholarStream</span>
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-2xl mb-10 text-blue-50 opacity-90"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Discover thousands of opportunities to fund your education. Your
//             journey to academic excellence starts here.
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors shadow-2xl"
//           >
//             <Link to="/allScholarships">Search Scholarship</Link>
//           </motion.button>
//         </motion.div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 py-2 space-y-32">
//         {/* Placeholder: Top Scholarships (Logic to be added later) */}
//         {/* <section id="scholarships"> ... </section> */}
//         {/* 2. Success Stories Section */}
//         <motion.section
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-center"
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-4xl font-bold mb-4 text-gray-800"
//           >
//             Success Stories
//           </motion.h2>
//           <motion.div
//             variants={fadeInUp}
//             className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full"
//           />

//           <div className="grid md:grid-cols-3 gap-10">
//             {[1, 2, 3].map((item) => (
//               <motion.div
//                 key={item}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg
//                 hover:shadow-2xl transition-all"
//               >
//                 <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
//                   {/* <span className="text-blue-600 text-2xl font-bold">
//                     S{item}
//                   </span> */}
//                   <img src={student} alt="" className="rounded-4xl" />
//                 </div>
//                 <p className="italic text-gray-600 mb-6 leading-relaxed">
//                   "The application process was seamless. I secured a 100%
//                   tuition waiver thanks to the resources provided by
//                   ScholarStream!"
//                 </p>
//                 <h4 className="font-bold text-gray-800 text-lg">
//                   Alex Johnson
//                 </h4>
//                 <p className="text-blue-500 text-sm font-medium">
//                   MIT Scholar '24
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* 3. FAQ Section */}
//         <motion.section
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, amount: 0.3 }}
//           className="bg-gray-100 p-10 md:p-16 rounded-[3rem]"
//         >
//           <motion.div variants={fadeInUp} className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Common Questions
//             </h2>
//             <p className="text-gray-500">
//               Everything you need to know about the platform
//             </p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto space-y-6">
//             {[
//               {
//                 q: "How do I apply for a scholarship?",
//                 a: "Simply browse our listings, click on 'View Details', and follow the direct application link provided for each institution.",
//               },
//               {
//                 q: "Are these scholarships verified?",
//                 a: "Yes, our team manually verifies every posting to ensure they are from legitimate educational institutions and organizations.",
//               },
//               {
//                 q: "Can I save scholarships for later?",
//                 a: "Absolutely! Once you create an account, you can bookmark your favorite opportunities to apply when you're ready.",
//               },
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
//               >
//                 <h3 className="font-bold text-gray-800 text-lg flex items-center">
//                   <span className="mr-3 text-blue-500">Q.</span> {faq.q}
//                 </h3>
//                 <p className="text-gray-600 mt-3 ml-7 leading-relaxed">
//                   {faq.a}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router";
// import axios from "axios"; // Ensure axios is installed
// import student from "./student.png";

// const Home = () => {
//   const [topScholarships, setTopScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch Top 6 Scholarships (Lowest Fees)
//   useEffect(() => {
//     const fetchTopScholarships = async () => {
//       try {
//         // Calling your backend API with sorting logic
//         const response = await axios.get(
//           "https://scholar-stream-server-mu.vercel.app/allScholarships?sort=feesAsc"
//         );
//         // Taking only the top 6 from the results
//         setTopScholarships(response.data.scholarships.slice(0, 6));
//       } catch (error) {
//         console.error("Error fetching top scholarships:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTopScholarships();
//   }, []);

//   // Animation Variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   const staggerContainer = {
//     animate: { transition: { staggerChildren: 0.2 } },
//   };

//   return (
//     <div className="overflow-x-hidden font-sans">
//       {/* 1. Banner / Hero Section */}
//       <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-4">
//         <motion.div
//           className="max-w-4xl mx-auto text-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1
//             className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Unlock Your Future with <br />
//             <span className="text-yellow-300">ScholarStream</span>
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-2xl mb-10 text-blue-50 opacity-90"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Discover thousands of opportunities to fund your education. Your
//             journey to academic excellence starts here.
//           </motion.p>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block"
//           >
//             <Link
//               to="/allScholarships"
//               className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors shadow-2xl"
//             >
//               Search Scholarship
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 py-16 space-y-32">
//         {/* 2. Top Scholarships Section (Dynamic) */}
//         <section id="scholarships">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Top Scholarships
//             </h2>
//             <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
//             <p className="text-gray-500 mt-4">
//               Explore opportunities with the most affordable application fees
//             </p>
//           </motion.div>

//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//           ) : (
//             <motion.div
//               variants={staggerContainer}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {topScholarships.map((s) => (
//                 <motion.div
//                   key={s._id}
//                   variants={fadeInUp}
//                   whileHover={{ y: -10 }}
//                   className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col"
//                 >
//                   <img
//                     src={
//                       s.universityImage ||
//                       "https://via.placeholder.com/400x200?text=University"
//                     }
//                     alt={s.universityName}
//                     className="h-48 w-full object-cover"
//                   />
//                   <div className="p-6 flex-grow flex flex-col">
//                     <div className="flex justify-between items-start mb-3">
//                       <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
//                         {s.scholarshipCategory}
//                       </span>
//                       <span className="text-gray-500 text-sm font-medium">
//                         {s.universityCountry}
//                       </span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
//                       {s.scholarshipName}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-4 font-medium">
//                       {s.universityName}
//                     </p>

//                     <div className="mt-auto space-y-3">
//                       <div className="flex justify-between items-center text-sm border-t pt-4">
//                         <span className="text-gray-500">Application Fee:</span>
//                         <span className="font-bold text-green-600">
//                           ${s.applicationFees}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-gray-500">Subject:</span>
//                         <span className="font-semibold text-gray-700">
//                           {s.subjectCategory}
//                         </span>
//                       </div>

//                       <Link
//                         to={`/scholarship/${s._id}`}
//                         className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors mt-4"
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}

//           <div className="text-center mt-16">
//             <Link
//               to="/allScholarships"
//               className="text-blue-600 font-bold hover:underline text-lg"
//             >
//               See All Scholarships &rarr;
//             </Link>
//           </div>
//         </section>

//         {/* 3. Success Stories Section */}
//         <motion.section
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-center"
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-4xl font-bold mb-4 text-gray-800"
//           >
//             Success Stories
//           </motion.h2>
//           <motion.div
//             variants={fadeInUp}
//             className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full"
//           />

//           <div className="grid md:grid-cols-3 gap-10">
//             {[1, 2, 3].map((item) => (
//               <motion.div
//                 key={item}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
//               >
//                 <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={student}
//                     alt="student"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <p className="italic text-gray-600 mb-6 leading-relaxed">
//                   "The application process was seamless. I secured a 100%
//                   tuition waiver thanks to the resources provided by
//                   ScholarStream!"
//                 </p>
//                 <h4 className="font-bold text-gray-800 text-lg">
//                   Alex Johnson
//                 </h4>
//                 <p className="text-blue-500 text-sm font-medium">
//                   MIT Scholar '24
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* 4. FAQ Section */}
//         <motion.section
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, amount: 0.3 }}
//           className="bg-gray-100 p-10 md:p-16 rounded-[3rem]"
//         >
//           <motion.div variants={fadeInUp} className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Common Questions
//             </h2>
//             <p className="text-gray-500">
//               Everything you need to know about the platform
//             </p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto space-y-6">
//             {[
//               {
//                 q: "How do I apply for a scholarship?",
//                 a: "Simply browse our listings, click on 'View Details', and follow the direct application link provided for each institution.",
//               },
//               {
//                 q: "Are these scholarships verified?",
//                 a: "Yes, our team manually verifies every posting to ensure they are from legitimate educational institutions and organizations.",
//               },
//               {
//                 q: "Can I save scholarships for later?",
//                 a: "Absolutely! Once you create an account, you can bookmark your favorite opportunities to apply when you're ready.",
//               },
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
//               >
//                 <h3 className="font-bold text-gray-800 text-lg flex items-center">
//                   <span className="mr-3 text-blue-500">Q.</span> {faq.q}
//                 </h3>
//                 <p className="text-gray-600 mt-3 ml-7 leading-relaxed">
//                   {faq.a}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> latest update - 24th Jan 26
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import axios from "axios";
import student from "./student.png";

const Home = () => {
  const [topScholarships, setTopScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopScholarships = async () => {
      try {
        const response = await axios.get(
          "https://scholar-stream-server-mu.vercel.app/allScholarships?sort=feesAsc",
        );
        setTopScholarships(response.data.scholarships.slice(0, 6));
      } catch (error) {
        console.error("Error fetching top scholarships:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopScholarships();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="overflow-x-hidden font-sans bg-base-100 text-base-content transition-colors duration-300">
      {/* 1. Banner / Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 md:py-24 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Unlock Your Future with <br />
            <span className="text-yellow-300">ScholarStream</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl mb-10 text-blue-50 opacity-90 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover thousands of opportunities to fund your education. Your
            journey to academic excellence starts here.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/allScholarships"
              className="bg-white text-blue-700 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:bg-blue-50 transition-colors shadow-2xl"
            >
              Search Scholarship
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-20">
        {/* 2. STATS BAR (Mini-Section) */}
        <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-base-100 p-8 rounded-3xl shadow-2xl border border-base-200">
            {[
              { label: "Active Scholarships", val: "12K+" },
              { label: "Universities", val: "450+" },
              { label: "Students Funded", val: "85K" },
              { label: "Success Rate", val: "94%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center border-r last:border-0 border-base-300"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.val}
                </h2>
                <p className="text-xs uppercase opacity-60 font-bold tracking-tighter">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Top Scholarships Section */}
        <section id="scholarships">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Scholarships
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="opacity-70 mt-4 text-sm md:text-base">
              Explore opportunities with the most affordable application fees
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <span className="loading loading-spinner loading-lg text-blue-500"></span>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {topScholarships.map((s) => (
                <motion.div
                  key={s._id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-base-200 border border-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
                >
                  <img
                    src={
                      s.universityImage || "https://via.placeholder.com/400x200"
                    }
                    alt={s.universityName}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 md:p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-blue-500/10 text-blue-500 text-xs font-bold px-2 py-1 rounded">
                        {s.scholarshipCategory}
                      </span>
                      <span className="opacity-60 text-sm">
                        {s.universityCountry}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-1">
                      {s.scholarshipName}
                    </h3>
                    <p className="opacity-70 text-sm mb-4">
                      {s.universityName}
                    </p>

                    <div className="mt-auto space-y-3 pt-4 border-t border-base-300">
                      <div className="flex justify-between items-center text-sm">
                        <span className="opacity-60">App Fee:</span>
                        <span className="font-bold text-success">
                          ${s.applicationFees}
                        </span>
                      </div>
                      <Link
                        to={`/scholarship/${s._id}`}
                        className="btn btn-primary btn-block rounded-xl font-bold"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/allScholarships"
              className="link link-primary font-bold text-lg no-underline hover:underline"
            >
              See All Scholarships &rarr;
            </Link>
          </div>
        </section>
        {/* 3. FEATURES SECTION */}
        <section
          id="features"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: "fa-bolt",
              title: "Fast Application",
              desc: "Apply to multiple universities in under 10 minutes.",
            },
            {
              icon: "fa-shield-check",
              title: "Verified Listings",
              desc: "Every scholarship is hand-verified by our academic team.",
            },
            {
              icon: "fa-earth-americas",
              title: "Global Access",
              desc: "Financial aid opportunities from over 50 countries.",
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6">
                <i className={`fa-solid ${feat.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="opacity-70 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </section>
        {/* 5. CATEGORIES BROWSER */}
        <section className="bg-base-200 rounded-3xl m-0 p-12 text-center">
          <h2 className="text-3xl font-bold mb-10">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Full Tuition",
              "Research Based",
              "Medical",
              "Engineering",
              "Arts & Humanity",
              "Sports",
            ].map((cat) => (
              <button
                key={cat}
                className="btn btn-outline btn-primary rounded-full"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
        {/* 3. PARTNERS / HIGHLIGHTS */}
        <section className="py-10 border-y border-base-200 ">
          <p className="text-center opacity-40 uppercase tracking-[0.3em] text-xs font-bold mb-8">
            Trusted by Top Universities
          </p>

          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:grayscale-0 transition-all">
            <i className="fa-brands fa-google text-4xl"></i>
            <i className="fa-brands fa-microsoft text-4xl"></i>
            <i className="fa-brands fa-apple text-4xl"></i>
            <i className="fa-brands fa-aws text-4xl"></i>
          </div>
        </section>

        {/* 4. Success Stories Section */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-blue-500 mx-auto mb-12 md:mb-16 rounded-full"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 bg-base-200 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-20 h-20 bg-blue-500/10 rounded-full mx-auto mb-6 overflow-hidden">
                  <img
                    src={student}
                    alt="student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="italic opacity-80 mb-6 text-sm md:text-base">
                  "The application process was seamless. I secured a 100%
                  tuition waiver thanks to the resources provided by
                  ScholarStream!"
                </p>
                <h4 className="font-bold text-lg">Alex Johnson</h4>
                <p className="text-blue-500 text-sm font-medium">
                  MIT Scholar '24
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* 5. FAQ Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-base-200 p-6 md:p-16 rounded-3xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="opacity-60">
              Everything you need to know about the platform
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do I apply?",
                a: "Simply browse our listings and follow the direct application link provided.",
              },
              {
                q: "Are these verified?",
                a: "Yes, our team manually verifies every posting for legitimacy.",
              },
              {
                q: "Can I save them?",
                a: "Absolutely! Create an account to bookmark your favorite opportunities.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-base-100 p-5 rounded-xl shadow-sm border-l-4 border-blue-500"
              >
                <h3 className="font-bold text-base md:text-lg flex items-start">
                  <span className="mr-3 text-blue-500">Q.</span> {faq.q}
                </h3>
                <p className="opacity-70 mt-2 ml-7 text-sm md:text-base">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* 9. NEWSLETTER CTA */}
        <section className="bg-primary rounded-[3rem] p-10 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">Never miss a deadline.</h2>
            <p className="opacity-80">
              Get the latest scholarship alerts directly in your inbox every
              week.
            </p>
          </div>
          <div className="join w-full max-w-sm">
            <input
              className="input input-bordered join-item w-full text-base-content"
              placeholder="email@example.com"
            />
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </section>
        {/* 10. CALL TO ACTION (Final) */}
        <section className="py-0 text-center">
          <h2 className="text-5xl font-black mb-8">
            Ready to start your journey?
          </h2>
          <Link
            to="/register"
            className="btn btn-primary btn-wide btn-lg rounded-full"
          >
            Create Free Account
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router";
// import axios from "axios";
// import student from "./student.png";

// // Import your custom components or keep them inline as shown below
// const Home = () => {
//   const [topScholarships, setTopScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Slides for the Hero Section
//   const slides = [
//     {
//       title: "Unlock Your Future",
//       highlight: "ScholarStream",
//       desc: "Discover thousands of opportunities to fund your education.",
//       bg: "from-blue-700 to-indigo-600",
//     },
//     {
//       title: "Global Reach",
//       highlight: "World Universities",
//       desc: "Apply to prestigious institutions across Europe, USA, and Asia.",
//       bg: "from-indigo-700 to-purple-600",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const fetchTopScholarships = async () => {
//       try {
//         const response = await axios.get(
//           "https://scholar-stream-server-mu.vercel.app/allScholarships?sort=feesAsc",
//         );
//         setTopScholarships(response.data.scholarships.slice(0, 6));
//       } catch (error) {
//         console.error("Error fetching top scholarships:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTopScholarships();
//   }, []);

//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   return (
//     <div className="overflow-x-hidden font-sans bg-base-100 text-base-content transition-colors duration-300">
//       {/* 1. HERO SECTION (60-70vh Height) */}
//       <section
//         className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden
//       py-40 mb-20 pt-20"
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg}`}
//           />
//         </AnimatePresence>

//         <div className="relative z-10 text-center text-white px-4 max-w-5xl">
//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-4xl md:text-7xl font-black mb-6 leading-tight"
//           >
//             {slides[currentSlide].title} <br />
//             <span className="text-yellow-300 drop-shadow-lg">
//               {slides[currentSlide].highlight}
//             </span>
//           </motion.h1>
//           <motion.p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
//             {slides[currentSlide].desc}
//           </motion.p>
//           <div className="flex gap-4 justify-center pt-0">
//             <Link
//               to="/allScholarships"
//               className="btn btn-primary rounded-full px-8 btn-lg shadow-xl border-none"
//             >
//               Explore Now
//             </Link>
//             <a
//               href="#features"
//               className="btn btn-outline border-white text-white rounded-full px-8 btn-lg hover:bg-white hover:text-blue-600"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Scroll Indicator Animation */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-50 flex flex-col items-center"
//         >
//           <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
//           <i className="fa-solid fa-chevron-down"></i>
//         </motion.div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">

//         {/* 4. TOP SCHOLARSHIPS (Your Existing Logic) */}
//         {/* <section id="scholarships">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-black mb-4 italic">Editor's Choice</h2>
//             <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
//           </div>
//           {/* ... mapping logic from your original code ... */}
//         {/* (Kept your scholarship grid here) */}
//         {/* </section> */}

//         {/* 6. TESTIMONIALS (Updated Style) */}
//         {/* <section>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold">What Scholars Say</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Repeat Testimonial Card */}
//       </div>
//       {/* </section> */}

//       {/* 8. FAQ SECTION (Your existing logic) */}
//       <section>{/* FAQ content */}</section>

//     </div>
//   );
// };

// export default Home;
