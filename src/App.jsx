import React, { useEffect, useState } from "react";
import "./index.css";
import UserCard from "./components/UserCard";
import { Spin } from "antd";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setUserData(data);
      setError(null);
    } catch (error) {
      console.log("error fething data:", error);
      setError("failed to fetch user data");
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <Spin size="loading" tip="loading ..." />
      ) : error ? (
        <Alert message={error} type="error" showIcon />
      ) : (
        userData.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
};
export default App;
