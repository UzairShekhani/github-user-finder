import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dark from './Dark'



function App() {
  const [userName, setUserName] = useState("")
  const [data, setData] = useState({})



  const onChangeHandler = (e)=>{
    setUserName(e.target.value)
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    fetch(`https://api.github.com/users/${userName}`)
    .then((result)=>{
      return result.json()
    }).then((value)=>{
      // console.log(value);
      setData(value)
    })
  }

  return (
    <>
      
    <div class="header">
      <h1 class="title">GitHub User Finder <br />by <span>uzairshekhani</span></h1>
      <div class="theme-panel">
        <h3 class="btn1"><Dark/></h3>
        
        <svg id="sun" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="nonzero">
            <path
              d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
          </g>
        </svg>
      </div>
    </div>
    <form class="form card" onSubmit={onSubmitHandler}>
      <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
          fill="#0079ff" />
      </svg>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="Search GitHub username…" value={userName} onChange={onChangeHandler} />
      <button class="btn" type="submit">search</button>
    </form>
    <br />
    <div class="error"></div>
    
    {/* display data */}

    <div>
    <div class="user-info card">
      <img src="" alt="" class="avatar-desktop" />
      <div class="info">
        <div class="general">
          <img src={data.avatar_url} class="avatar-mobile" />
          <div class="personal">
            <div class="name-info">
              <h2 class="name">{data.name}</h2>
              <h3 class="login"></h3>
            </div>
            <p class="join-date"></p>
          </div>
        </div>
        <p class="bio"></p>
        <div class="stats">
       
        
          <div class="stat">
            <h3 class="stat-title">repos</h3>
            <h3 class="amount" id="repos">{data.public_repos}</h3>
          </div>
          <div class="stat">
            <h3 class="stat-title">followers</h3>
            <h3 class="amount" id="followers">{data.followers}</h3>
          </div>
          <div class="stat">
            <h3 class="stat-title">following</h3>
            <h3 class="amount" id="following">{data.following}</h3>
          </div>
        </div>
      </div>
    </div>
    

    </div>
    </>
  )
}


export default App
