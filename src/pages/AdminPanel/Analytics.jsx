// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const Analytics = () => {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalScholarships: 0,
//     totalFees: 0,
//   });

//   const [chartData, setChartData] = useState([]);

//   // 🔁 Fetch overall stats
//   const fetchStats = async () => {
//     const res = await fetch(
//       "https://scholar-stream-server-mu.vercel.app/admin/analytics/stats"
//     );
//     const data = await res.json();
//     setStats(data);
//   };

//   // 📊 Fetch chart data (Applications per Category)
//   const fetchChartData = async () => {
//     const res = await fetch(
//       "https://scholar-stream-server-mu.vercel.app/admin/analytics/applications-by-category"
//     );
//     const data = await res.json();
//     setChartData(data);
//   };

//   useEffect(() => {
//     fetchStats();
//     fetchChartData();
//   }, []);

//   return (
//     <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
//       <h2 className="text-xl font-bold">Analytics</h2>

//       {/* 📊 STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="stat bg-base-200 rounded-xl">
//           <div className="stat-title">Total Users</div>
//           <div className="stat-value">{stats.totalUsers}</div>
//         </div>

//         <div className="stat bg-base-200 rounded-xl">
//           <div className="stat-title">Total Scholarships</div>
//           <div className="stat-value">{stats.totalScholarships}</div>
//         </div>

//         <div className="stat bg-base-200 rounded-xl">
//           <div className="stat-title">Total Fees Collected</div>
//           <div className="stat-value">${stats.totalFees}</div>
//         </div>
//       </div>

//       {/* 📈 BAR CHART */}
//       <div className="bg-base-200 rounded-xl p-6">
//         <h3 className="text-lg font-semibold mb-4">
//           Applications by Scholarship Category
//         </h3>

//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="category" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="applications" />
//           </BarChart>
//         </ResponsiveContainer>

//         {chartData.length === 0 && (
//           <p className="text-center text-gray-500 mt-4">No data available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Analytics;
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const Analytics = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalScholarships: 0,
    totalFees: 0,
  });

  const [chartData, setChartData] = useState([]);

  // Fetch stats and chart data
  const fetchStats = async () => {
    try {
      const res = await fetch(
        "https://scholar-stream-server-mu.vercel.app/admin/analytics/stats",
      );
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchChartData = async () => {
    try {
      const res = await fetch(
        "https://scholar-stream-server-mu.vercel.app/admin/analytics/applications-by-category",
      );
      const data = await res.json();
      setChartData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchChartData();
  }, []);

  // Professional bar colors (DaisyUI Primary/Secondary mix)
  const COLORS = ["#570df8", "#f000b8", "#37cdbe", "#3d4451"];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black flex items-center gap-2">
          <i className="fa-solid fa-chart-line text-primary"></i>
          Platform Insights
        </h2>
        <button
          onClick={() => {
            fetchStats();
            fetchChartData();
          }}
          className="btn btn-ghost btn-sm"
        >
          <i className="fa-solid fa-rotate"></i> Refresh
        </button>
      </div>

      {/* 📊 STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat bg-base-100 border border-base-300 rounded-2xl shadow-sm">
          <div className="stat-figure text-primary">
            <i className="fa-solid fa-users text-3xl opacity-20"></i>
          </div>
          <div className="stat-title font-bold">Total Users</div>
          <div className="stat-value text-primary">{stats.totalUsers}</div>
          <div className="stat-desc">Active in the last 30 days</div>
        </div>

        <div className="stat bg-base-100 border border-base-300 rounded-2xl shadow-sm">
          <div className="stat-figure text-secondary">
            <i className="fa-solid fa-graduation-cap text-3xl opacity-20"></i>
          </div>
          <div className="stat-title font-bold">Total Scholarships</div>
          <div className="stat-value text-secondary">
            {stats.totalScholarships}
          </div>
          <div className="stat-desc font-medium">Across all categories</div>
        </div>

        <div className="stat bg-base-100 border border-base-300 rounded-2xl shadow-sm">
          <div className="stat-figure text-success">
            <i className="fa-solid fa-sack-dollar text-3xl opacity-20"></i>
          </div>
          <div className="stat-title font-bold">Revenue Collected</div>
          <div className="stat-value text-success">${stats.totalFees}</div>
          <div className="stat-desc font-medium">Processing & Service fees</div>
        </div>
      </div>

      {/* 📈 BAR CHART */}
      <div className="bg-base-100 border border-base-300 rounded-3xl p-6 md:p-10 shadow-sm">
        <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
          <span className="w-2 h-6 bg-primary rounded-full"></span>
          Applications by Scholarship Category
        </h3>

        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="oklch(var(--bc) / 0.1)" // Dynamic stroke color based on theme
              />
              <XAxis
                dataKey="category"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "oklch(var(--bc))",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "oklch(var(--bc))", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "oklch(var(--bc) / 0.05)" }}
                contentStyle={{
                  backgroundColor: "oklch(var(--b1))",
                  borderColor: "oklch(var(--bc) / 0.2)",
                  borderRadius: "12px",
                  color: "oklch(var(--bc))",
                }}
              />
              <Bar dataKey="applications" radius={[8, 8, 0, 0]} barSize={50}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {chartData.length === 0 && (
          <div className="text-center py-10">
            <div className="loading loading-dots loading-md opacity-20"></div>
            <p className="text-sm opacity-50 mt-2 font-medium">
              Awaiting data stream...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
