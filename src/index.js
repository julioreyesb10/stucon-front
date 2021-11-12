import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';
//CSS
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { LoginButton } from './login';
import { LogoutButton } from './logout';
//Objects
const firstJob ={
  title: 'FrontEnd developer',
  company:  "Google",
  img: "https://i.blogs.es/6f44dd/google-2015-1/450_1000.jpg"
};

const secondJob = {
  title: 'BackEnd Developer',
  company:  "Intel",
  img: "https://pbs.twimg.com/profile_images/1410620195895484416/RrhbE0Pg_400x400.jpg"
}
//render
function JobList(){
  return(
    <section className='joblist'>
      
      <Job
        img={firstJob.img}
        title={firstJob.title}
        company={firstJob.company}
      />
      <Job
        img = {secondJob.img}
        title = {secondJob.title}
        company = {secondJob.company}
      />
    
      </section>
  );
}

//function
const Job = (props) => {
  return(
  <article className='job'>
    
    <img src={props.img}alt = ''/>
    <h1>{props.title}</h1>
    <h4>{props.company}</h4>
    <p></p>
  </article>
  );
};

ReactDom.render(
  <React.StrictMode>
 
       <JobList/>
       <App/>

  </React.StrictMode>,
  
  document.getElementById('root')
);