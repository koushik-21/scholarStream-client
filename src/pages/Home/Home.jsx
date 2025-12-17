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
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import axios from "axios"; // Ensure axios is installed
import student from "./student.png";

const Home = () => {
  const [topScholarships, setTopScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Top 6 Scholarships (Lowest Fees)
  useEffect(() => {
    const fetchTopScholarships = async () => {
      try {
        // Calling your backend API with sorting logic
        const response = await axios.get(
          "https://scholar-stream-server-mu.vercel.app/allScholarships?sort=feesAsc"
        );
        // Taking only the top 6 from the results
        setTopScholarships(response.data.scholarships.slice(0, 6));
      } catch (error) {
        console.error("Error fetching top scholarships:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopScholarships();
  }, []);

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="overflow-x-hidden font-sans">
      {/* 1. Banner / Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Unlock Your Future with <br />
            <span className="text-yellow-300">ScholarStream</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-10 text-blue-50 opacity-90"
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
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors shadow-2xl"
            >
              Search Scholarship
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-32">
        {/* 2. Top Scholarships Section (Dynamic) */}
        <section id="scholarships">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Top Scholarships
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">
              Explore opportunities with the most affordable application fees
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {topScholarships.map((s) => (
                <motion.div
                  key={s._id}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col"
                >
                  <img
                    src={
                      s.universityImage ||
                      "https://via.placeholder.com/400x200?text=University"
                    }
                    alt={s.universityName}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                        {s.scholarshipCategory}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">
                        {s.universityCountry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                      {s.scholarshipName}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 font-medium">
                      {s.universityName}
                    </p>

                    <div className="mt-auto space-y-3">
                      <div className="flex justify-between items-center text-sm border-t pt-4">
                        <span className="text-gray-500">Application Fee:</span>
                        <span className="font-bold text-green-600">
                          ${s.applicationFees}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Subject:</span>
                        <span className="font-semibold text-gray-700">
                          {s.subjectCategory}
                        </span>
                      </div>

                      <Link
                        to={`/scholarship/${s._id}`}
                        className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors mt-4"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="text-center mt-16">
            <Link
              to="/allScholarships"
              className="text-blue-600 font-bold hover:underline text-lg"
            >
              See All Scholarships &rarr;
            </Link>
          </div>
        </section>

        {/* 3. Success Stories Section */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 text-gray-800"
          >
            Success Stories
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full"
          />

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={student}
                    alt="student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="italic text-gray-600 mb-6 leading-relaxed">
                  "The application process was seamless. I secured a 100%
                  tuition waiver thanks to the resources provided by
                  ScholarStream!"
                </p>
                <h4 className="font-bold text-gray-800 text-lg">
                  Alex Johnson
                </h4>
                <p className="text-blue-500 text-sm font-medium">
                  MIT Scholar '24
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. FAQ Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-100 p-10 md:p-16 rounded-[3rem]"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Common Questions
            </h2>
            <p className="text-gray-500">
              Everything you need to know about the platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How do I apply for a scholarship?",
                a: "Simply browse our listings, click on 'View Details', and follow the direct application link provided for each institution.",
              },
              {
                q: "Are these scholarships verified?",
                a: "Yes, our team manually verifies every posting to ensure they are from legitimate educational institutions and organizations.",
              },
              {
                q: "Can I save scholarships for later?",
                a: "Absolutely! Once you create an account, you can bookmark your favorite opportunities to apply when you're ready.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
              >
                <h3 className="font-bold text-gray-800 text-lg flex items-center">
                  <span className="mr-3 text-blue-500">Q.</span> {faq.q}
                </h3>
                <p className="text-gray-600 mt-3 ml-7 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
