import React, { useState, setState } from "react";

//components
import FeatureItem from "../components/featureItem";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

//assets
import feature1 from '../assets/icon-chat.png'
import feature2 from '../assets/icon-money.png'
import feature3 from '../assets/icon-security.png'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="first-section-home d-flex align-items-center justify-space-end">
                <div className="bg-white p-4 m-4">
                    <div className="font-weight-bold mb-2 font-24">
                        No fees.
                        <br/>
                        No minimum deposit.
                        <br/>
                        High interest rates.
                    </div>
                    <div className="font-19">
                        Open a savings account with Argent Bank today!
                    </div>
                </div>
            </div>
            <div className="d-flex ctn-features">
                <FeatureItem icon={feature1} desc="You are our #1 priority" title="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
                <FeatureItem icon={feature2} desc="More savings means higher rates" title="The more you save with us, the higher your interest rate will be!"/>
                <FeatureItem icon={feature3} desc="Security you can trust" title="We use top of the line encryption to make sure your data and money is always safe."/>
            </div>
            <Footer/>
        </div>
    )
  }
  
export default Home;