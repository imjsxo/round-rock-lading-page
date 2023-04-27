import React from 'react';
import './App.css';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import TestymoniCard from './component/TestymoniCard';

function App() {
  return (
    <>
      <div className="homepage-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="home-wrapper-1 d-flex align-items-center justify-content-center">
              <div className="col-4 d-flex flex-column align-items-center text-white">
                <img src="images/logo.svg" alt="" />
                <h2>What is Lorem Ipsum</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className='services d-flex justify-content-between'>
                  <div>
                    <img src="images/services.png" alt="" />
                    <p>Services one</p>
                  </div>
                  <div>
                    <img src="images/services.png" alt="" />
                    <p>Services one</p>
                  </div>
                  <div>
                    <img src="images/services.png" alt="" />
                    <p>Services one</p>
                  </div>
                </div>
                <button className='bg-blue'>Help Me</button>
              </div>
            </div>
            <div className="home-wrapper-2 d-flex align-items-center">
              <div className="col-6 text-white">
                <div className='text-content bg-blue'>
                  <h2>What is Lorem Ipsum</h2>
                  <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <div>
                    <p><BsFillCheckCircleFill />Lorem Ipsum is simply dummy text of the printing</p>
                    <p><BsFillCheckCircleFill />Lorem Ipsum is simply dummy text of the printing</p>
                    <p><BsFillCheckCircleFill />Lorem Ipsum is simply dummy text of the printing</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className='image-float'>
                  <img src="images/image-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="home-wrapper-3">
              <div className="layer d-flex align-items-center justify-content-center">
                <div className="col-6 text-white">
                  <h2>Services</h2>
                  <div className='d-flex justify-content-between'>
                    <div className='service-group'>
                      <img src="images/services.png" alt="" />
                      <h6 className='color-blue'>Lorem Ipsum</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className='service-group'>
                      <img src="images/services.png" alt="" />
                      <h6 className='color-blue'>Lorem Ipsum</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className='service-group'>
                      <img src="images/services.png" alt="" />
                      <h6 className='color-blue'>Lorem Ipsum</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                    <div className='service-group'>
                      <img src="images/services.png" alt="" />
                      <h6 className='color-blue'>Lorem Ipsum</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </div>
                  </div>
                  <button className='bg-blue'>Help Me</button>
                </div>
              </div>
            </div>
            <div className="home-wrapper-4 d-flex align-items-center justify-content-center ">
              <div className="col-10 flex-column">
                <div className="title text-white">
                  <h2>Testymonials</h2>
                </div>
                <div className='d-flex flex-wrap justify-content-center'>
                  <div className='col-5 mb-3'>
                    <TestymoniCard />
                  </div>
                  <div className='col-5 mb-3'>
                    <TestymoniCard />
                  </div>
                  <div className='col-5 mb-3'>
                    <TestymoniCard />
                  </div>
                  <div className='col-5 mb-3'>
                    <TestymoniCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-wrapper-5 d-flex align-items-center flex-column">
              <div className="title">
                <h2 className='color-blue'>Contact Us</h2>
              </div>
              <div className="col-3 square b-radius-40"></div>
              <div className="col-3 square b-radius-40"></div>
              <div className="col-3 square b-radius-40"></div>
              <div className="col-2 square b-radius-40 bg-blue"></div>
            </div>
            <div className="home-wrapper-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
