import { useState, useEffect } from 'react';
import './styles.css';

const Quote = () => {
  const [data, setData] = useState([{ author: '', quote: '', category: '' }]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'gzO3VhbHDwzrcSjHefdhdw==HJjjOoRw21MM6Yc3';
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        setData(data[0]);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) return <div>Something went wrong!</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container-quotes">
      <div className="quote-text">
        <span>
          &quot;
          {data.quote}
          &quot;
        </span>
      </div>
      <div className="quote-author">
        <span>
          {' '}
          By
          {' '}
          {data.author}
        </span>
      </div>
    </div>
  );
};

export default Quote;
