import { useEffect, useState } from "react";
import { getHealth } from "../services/api";

function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    getHealth().then(data => setStatus(data.status));
  }, []);

  return (
    <div>
      <h1>Ethical Hacking Dashboard</h1>
      <p>API status: {status}</p>
    </div>
  );
}

export default Home;
