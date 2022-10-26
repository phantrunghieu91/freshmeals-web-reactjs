import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get('https://peppermint-wary-ghoul.glitch.me/user').then(resp => {
      setUser(resp.data);
    });
  }, []);
  return (
    <div className='container p-3'>
      <h1 className='text-center bg-black text-white text-[150px]'>Hello world</h1>
      <ul>
        {user &&
          user.map(item => (
            <li key={item.id} className='font-semibold'>
              {item.username}
            </li>
          ))}
      </ul>
      <button
        className='border border-black p-2'
        onClick={() => {
          axios
            .post('https://peppermint-wary-ghoul.glitch.me/user', { username: 'newsuser' })
            .then(resp => {
              setUser([...user, resp.data]);
            });
        }}>
        Add new user
      </button>
    </div>
  );
}

export default App;
