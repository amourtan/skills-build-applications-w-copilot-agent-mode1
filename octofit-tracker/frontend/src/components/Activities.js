import React, { useEffect, useState } from 'react';

const getApiUrl = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  if (codespace) {
    return `https://${codespace}-8000.app.github.dev/api/activities/`;
  }
  return 'http://localhost:8000/api/activities/';
};


function Activities() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = getApiUrl();
    console.log('Fetching Activities from:', url);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Activities data:', results);
      });
  }, []);
  return (
    <div>
      <h2 className="mb-4 text-primary">Activities</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Duration (min)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.user}</td>
                  <td>{item.activity}</td>
                  <td>{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Activities;
