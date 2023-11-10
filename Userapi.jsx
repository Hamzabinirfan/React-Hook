import React, { useState, useEffect } from 'react';

const Userapi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub users:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 
  return (
    <div>
      <h1>GitHub Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Userapi;
