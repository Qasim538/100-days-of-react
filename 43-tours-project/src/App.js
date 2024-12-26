import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }
      const tours = await response.json();
      setTours(tours);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>Error: {error}</p>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} />
    </main>
  );
}

export default App;
