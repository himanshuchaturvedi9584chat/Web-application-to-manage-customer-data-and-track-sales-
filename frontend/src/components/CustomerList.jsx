import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("/api/customers").then((res) => setCustomers(res.data));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(c => <li key={c._id}>{c.name} - {c.email}</li>)}
      </ul>
    </div>
  );
}
