import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead backgroundChart" id="page-top">
       <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Koa Capital</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">
            Proprietary Trading Firm
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About</h2>
            <p className="text-white-50">
              Koa Capital LLC is a proprietary trading firm focused on quantitatively trading cryptocurrencies for superior risk-adjusted and tax-advantaged returns, founded by
              <br />

              <a href="https://www.linkedin.com/in/eric-crosson">
                Eric Crosson
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
