
import React from 'react';
import './RenewableEnergy.css'
import { Link } from 'react-router-dom';

const RenewableEnergyProviders = () => {
  // Sample list of renewable energy providers
  const energyProviders = [
    { id: 1, name: 'Brookfield Renewable', description: 'Renewable Power for a Cleaner, Brighter Tomorrow', link: 'https://brookfieldrenewableus.com/' },
    { id: 2, name: 'Siemens Gamesa Renewable Energy', description: 'Sustainable energy for a better future.', link: 'https://www.siemensgamesa.com/en-int' },
    { id: 3, name: 'Vestas Wind Systems', description: 'Harnessing solar power for clean living.', link: 'https://www.vestas.com/en' },
    // Add more providers as needed
  ];

  return (
    <div>
        <nav className="navbar">
      <div className="nav-left">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-energy-logo-design-template-a8af84d86dfc8201bf5b2ca64a1d9976_screen.jpg?ts=1687720685" alt="Logo" className="logo" />
      </div>
      <div className="nav-right">
        <ul className="nav-list">
        <Link to={"/"}><li className="nav-item">Home</li></Link>

        
          <Link to={"/calculater"}> <li className="nav-item">Energy Calculater</li></Link>
          
          <Link to={"/energy"}>
          <li className="nav-item">Green Energy Provider</li></Link>
          <Link to={"/donation"}><li className="nav-item">Donation</li></Link>
        </ul>
       
      </div>
    </nav>
    <div className="renewable-energy-providers">
        

      <h2>Renewable Energy Providers</h2>
      {energyProviders.map((provider) => (
        <div key={provider.id} className="provider-card">
          <h3 className="provider-name">
            {provider.link ? (
              <a href={provider.link} target="_blank" rel="noopener noreferrer">
                {provider.name}
              </a>
            ) : (
              provider.name
            )}
          </h3>
          <p className="provider-description">{provider.description}</p>
          {provider.link && (
            <a href={provider.link} className="provider-link" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default RenewableEnergyProviders;
