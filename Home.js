// components/Home.js
import React from 'react';
import './nav.css'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
       <nav className="navbar">
        <div className="nav-left">
          
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-energy-logo-design-template-a8af84d86dfc8201bf5b2ca64a1d9976_screen.jpg?ts=1687720685" alt="Logo" className="logo" />
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <Link to={"/"}><li className="nav-item">Home</li></Link>
            <Link to={"/calculater"}><li className="nav-item">Energy Calculator</li></Link>
            <Link to={"/energy"}><li className="nav-item">Green Energy Provider</li></Link>
            <Link to={"/donation"}><li className="nav-item">Donation</li></Link>
          </ul>
          <Link to={"/register"}><button className="button">Sign Up</button></Link>
          <Link to={"/login"}><button className="button">Login</button></Link>
        </div>
      </nav>

    <div className='header'>
        <h1 className='headder-h'>Affordable and Clean Energy</h1>
        <p className='headder-p'>Affordable and Clean Energy is one of the 17 Sustainable Development Goals (SDGs) established by the United Nations in 2015. It aims to ensure universal access to reliable, affordable, and modern energy services while promoting the use of renewable energy sources and enhancing energy efficiency.</p>
    
    </div>
<div className='d-flex'>

    <div className='head2'>
    
        <h1>What is Affordable and Clean Energy?</h1>
        <p>Affordable and Clean Energy focuses on addressing the global energy challenge by providing access to reliable, sustainable, and affordable energy for all. It recognizes the importance of energy in powering economic development, improving living standards, and mitigating climate change. This SDG seeks to accelerate the transition to clean energy sources and enhance energy efficiency to ensure a sustainable and resilient energy future.</p>
<p>
Access to affordable and clean energy is crucial for eradicating poverty, improving health and education, promoting economic growth, and combating climate change. By expanding renewable energy sources and adopting energy-efficient technologies, this SDG aims to create a more sustainable and equitable energy system that benefits both present and future generations.</p>
    </div>
    <div>
        
    <div className='carddiv'>
            <div className="card card2">
              <div className="card-body text-left">
                <h5 className="card-title">Affordable and Clean Energy</h5>
                
                <hr/>
                <p className="card-text">
                  Affordable and Clean Energy refers to the provision of energy services that are accessible, affordable, reliable, and environmentally sustainable. It involves ensuring universal access to electricity and modern energy sources, while reducing reliance on fossil fuels and transitioning to renewable energy alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div>
        <h1>Affordable and Clean Energy Initiatives</h1>
    </div>

    <div className='d-flex p-5 bottom-main'>
        <div className='bottomdiv'> 
            <img src='https://cdn-icons-png.flaticon.com/512/4472/4472550.png' width={"120px"}/>
            <h3>Renewable Energy Expansion</h3>
            <br/>
            <p>Promoting adopting and deploying renewable energy sources such as solar, wind, hydropower, and geothermal energy. It involves supporting renewable energy infrastructure development, facilitating investment in clean energy projects, and implementing policies that incentivize the use of renewables.</p>
        </div>
        <div className='bottomdiv'>
        <img src='https://cdn-icons-png.flaticon.com/512/1208/1208147.png' width={"120px"}/>
        <h3>Energy Access for All</h3>
        <br/>
        <p>provide universal access to modern and affordable energy services, particularly in underserved areas. It involves improving access to electricity, clean cooking solutions, and productive energy sources for marginalized communities, thereby enabling economic opportunities, improving health outcomes, and enhancing quality of life.</p>
        </div>
        <div className='bottomdiv'>
        <img src='https://cdn-icons-png.flaticon.com/512/2474/2474450.png' width={"120px"}/>
        <h3>Energy Efficiency Measures</h3><br/>
        <p>Microfinance initiatives have been widely implemented to provide small loans and financial services to individuals, particularly women and marginalized groups, who lack access to traditional banking systems. By facilitating financial inclusion, these initiatives aim to empower individuals to start small businesses, generate income, and lift themselves out of poverty.</p>
        </div>

    </div>


    <div className='cnt'>
        <h1>How to Help Affordable and Clean Energy Initiatives</h1>
        <div className='d-flex'>
            <div className='lastcnt'>
                <img src='https://cdn-icons-png.flaticon.com/512/5256/5256373.png' width={"120px"}/>
                <h3>Support Healthcare Organizations</h3>
                <p>Healthcare organizations play a vital role in providing essential medical services, conducting research, and promoting public health initiatives. By donating funds or volunteering your time and skills, you can directly support these organizations in their efforts to improve healthcare access and quality.</p>
            </div>
            <div className='lastcnt'>
            <img src='https://cdn-icons-png.flaticon.com/512/3039/3039788.png' width={"120px"}/>
            <h3>Take Care of Your Own Health</h3>
            <p>One of the most impactful ways to promote good health and well-being is by taking care of your own health. Adopting healthy lifestyle habits, such as maintaining a balanced diet, engaging in regular physical activity, getting enough sleep, and managing stress, can significantly improve your overall well-being.</p>
            </div>
            <div className='lastcnt'>
            <img src='https://cdn-icons-png.flaticon.com/512/3197/3197967.png' width={"120px"}/>
            <h3>Educate Others</h3>
            <p>Education and raising awareness are essential in promoting good health and well-being. By sharing accurate and reliable information about health-related topics, you can help others make informed decisions about their well-being. This may involve promoting healthy lifestyle habits, discussing the importance of preventive healthcare measures, or addressing specific health issues that affect your community. </p>
            </div>

        </div>


    </div>



    </div>
  );
};

export default Home;
