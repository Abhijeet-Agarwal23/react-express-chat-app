import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.scss';

export const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='join-outer-container'>
      <div className='join-inner-container'>
        <h1 className='heading'>Join</h1>
        <div>
          <input
            type='text'
            placeholder='Name'
            className='join-input'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Room'
            className='join-input mt-20'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        >
          <button type='submit' className='button mt-20'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
