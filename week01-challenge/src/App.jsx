import React from 'react';
import './style.css';
import Hgroup from './components/Hgroup';
import Nav from './components/Nav';
import Header from './components/Header';


const response = {
  series: 'Lorem ipsum, dolor sit amet.',
  title: 'Calgary',
  mainNav: [
    {
      text : 'one',
      url: '#'
    },
    {
      text : 'two',
      url: '#'
    },
    {
      text : 'three',
      url: '#'
    },
    {
      text : 'four',
      url: '#'
    },
    {
      text : 'five',
      url: '#'
    }
  ],
  subNav: [],
  mainImage: '',
  footerText: '',
};

function App() {
  return (
    <>
      <Header>
        <Hgroup series={response.series} title={response.title}></Hgroup>
        <Nav links = {response.mainNav}></Nav>
        <ul>
          <li>
            <a href='#'>Lorem, ipsum dolor.</a>
          </li>
          <li>
            <a href='#'>Minima, quas qui!</a>
          </li>
          <li>
            <a href='#'>Dolore, earum ipsum.</a>
          </li>
        </ul>
      </Header>
      <main>
        <img
          src='https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </main>
      <footer>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          blanditiis quo suscipit dolor impedit sint numquam, libero nesciunt
          corrupti omnis.
        </blockquote>
      </footer>
    </>
  );
}

export default App;
