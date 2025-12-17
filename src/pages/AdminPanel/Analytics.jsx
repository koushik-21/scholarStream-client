import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalScholarships: 0,
    totalFees: 0,
  });

  const [chartData, setChartData] = useState([]);

  // 🔁 Fetch overall stats
  const fetchStats = async () => {
    const res = await fetch(
      "https://scholar-stream-server-mu.vercel.app/admin/analytics/stats"
    );
    const data = await res.json();
    setStats(data);
  };

  // 📊 Fetch chart data (Applications per Category)
  const fetchChartData = async () => {
    const res = await fetch(
      "https://scholar-stream-server-mu.vercel.app/admin/analytics/applications-by-category"
    );
    const data = await res.json();
    setChartData(data);
  };

  useEffect(() => {
    fetchStats();
    fetchChartData();
  }, []);

  return (
    <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
      <h2 className="text-xl font-bold">Analytics</h2>

      {/* 📊 STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stat bg-base-200 rounded-xl">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{stats.totalUsers}</div>
        </div>

        <div className="stat bg-base-200 rounded-xl">
          <div className="stat-title">Total Scholarships</div>
          <div className="stat-value">{stats.totalScholarships}</div>
        </div>

        <div className="stat bg-base-200 rounded-xl">
          <div className="stat-title">Total Fees Collected</div>
          <div className="stat-value">${stats.totalFees}</div>
        </div>
      </div>

      {/* 📈 BAR CHART */}
      <div className="bg-base-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">
          Applications by Scholarship Category
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="applications" />
          </BarChart>
        </ResponsiveContainer>

        {chartData.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No data available</p>
        )}
      </div>
    </div>
  );
};

export default Analytics;
