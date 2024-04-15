import React from 'react';
import aboutImg from '../image/aboutImg.png';
import '../style/Home.css';


const Home = () =>{
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="header-content">
                <div className="overlay">
                  <div className="header-content-item">
                    <h1>Find Spaces in no time</h1>
                    <span className="line" />
                    <p className="paragraphone">Your Favorite Place <br /> to find Parking space for your car</p>
                    <a href="#" className="link">View Parking Map <span />
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            
            </div>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className="curved-shape d-flex justify-content-center align-items-center ">
          <div className="row g-0 bg-transparent  ">
            <div className="col-md-4">
              <img src={aboutImg} className="img-fluid" alt="Image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mt-5">About Us</h5>
                <p className="card-text mt-5">With a vision to transform how we see space management & parking,
                  LoPark envisions to Bring Innovative Parking Solution, tailored to suit Kadoorie University
                  Our parking systems are custom made with advanced effortless mechanisms to cater all types of vehicles, heavy or light.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};
export default Home;