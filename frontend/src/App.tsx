import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const res = await fetch('http://127.0.0.1:8080/api/hello');
    const data = await res.json();
    setMessage(data.msg);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Rust Backend Test</h1>
      <button onClick={fetchMessage}>جلب الرسالة من الباك إند</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
