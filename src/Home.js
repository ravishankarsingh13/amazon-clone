import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" 
            />

            <div className="home__row">
                <Product 
                    id="122355"
                    title="the hhhh"
                    price={11.22}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/5119qMYKkKL._AC_SY200_.jpg"
                />
                <Product 
                    id="122355"
                    title="the hhhh"
                    price={11.22}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/5119qMYKkKL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="122355"
                    title="the hhhh"
                    price={11.22}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/5119qMYKkKL._AC_SY200_.jpg"
                />
                <Product 
                    id="122355"
                    title="the hhhh"
                    price={11.22}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/5119qMYKkKL._AC_SY200_.jpg"
                />
                <Product 
                    id="122355"
                    title="the hhhh"
                    price={11.22}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/5119qMYKkKL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                        id="122355"
                        title="the hhhh"
                        price={11.22}
                        rating={5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/5119qMYKkKL._AC_SY200_.jpg"
                />
            </div>
        </div>
    );
}

export default Home
