import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);        // veri saklama
  const [loading, setLoading] = useState(true);  // yükleniyor durumu
  const [error, setError] = useState(null);      // hata durumu

  useEffect(() => {
    // Component mount olur olmaz çalışacak
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Sunucu hatası');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // boş bağımlılık → sadece bir kez

  if (loading) return <p>Yükleniyor...</p>;
  if (error)   return <p style={{ color: 'red' }}>Hata: {error}</p>;

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name} ({u.email})</li>
      ))}
    </ul>
  );
};

export default UserList;
