import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const res = await fetch(`${backendUrl}/api/hello`);
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
