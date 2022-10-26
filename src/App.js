import apiAxios from './services/apiAxios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    apiAxios.get('/user').then(resp => {
      setUser(resp);
    });
  }, []);
  return (
    <div className='container p-3'>
      <h1 className='text-center bg-black text-white text-[150px]'>Hello world</h1>
      <ol>
        {user &&
          user.map(item => (
            <li key={item.id} className='font-semibold'>
              {item.username}
            </li>
          ))}
      </ol>
      <button
        className='border border-black p-2'
        onClick={() => {
          apiAxios.post('/user', { username: 'testing' }).then(resp => {
            setUser([...user, resp]);
          });
        }}>
        Add new user
      </button>
    </div>
  );
}

export default App;
