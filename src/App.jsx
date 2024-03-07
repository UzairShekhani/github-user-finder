import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Dark from './Dark';

function App() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const onChangeHandler = (e) => {
    const value = e.target.value;
    
    setUserName(value);
    if (!value.trim()) {
      setData({});
      setShow(false);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      setData({});
      setShow(false);
      return;
    }
    fetch(`https://api.github.com/users/${userName}`)
      .then((result) => result.json())
      .then((value) => {
        setData(value);
        setShow(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData({});
        setShow(false);
      });
  };

  return (
    <>
      <div className="header">
        <h1 className="title">GitHub User Finder <br />by <span>uzairshekhani</span></h1>
        <div className="theme-panel">
          <h3 className="btn1"><Dark /></h3>
        </div>
      </div>
      <form className="form card" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Search GitHub username…" value={userName} onChange={onChangeHandler} />
        <button className="btn" type="submit">search</button>
      </form>
      <br />
      {Object.keys(data).length > 0 && (
        <motion.div className="user-info card"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <img src={data.avatar_url} alt="Avatar" className="avatar-desktop" />
          <div className="info">
            <div className="general">
              <img src={data.avatar_url} alt="Avatar" className="avatar-mobile" />
              <div className="personal">
                <div className="name-info">
                  <h2 className="name">{data.name}</h2>
                  <h3 className="login">{data.login}</h3>
                </div>
                <p className="join-date">Join Date: {new Date(data.created_at).toDateString()}</p>
              </div>
            </div>
            <p className="bio">{data.bio}</p>
            <div className="stats">
              <div className="stat">
                <h3 className="stat-title">Repos</h3>
                <h3 className="amount" id="repos">{data.public_repos}</h3>
              </div>
              <div className="stat">
                <h3 className="stat-title">Followers</h3>
                <h3 className="amount" id="followers">{data.followers}</h3>
              </div>
              <div className="stat">
                 <h3 className="stat-title">Following</h3>
                 <h3 className="amount" id="following">{data.following}</h3>
              </div>
            </div>
          </div>
         </motion.div>
      )}
     </>
  );
}

export default App;
