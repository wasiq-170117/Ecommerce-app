import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutUs.jpg"
            alt="contactus"
            style={{ width: "100vh" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="aboutUsHeading">
            About Us
          </h1>
          <p className="text-justify mt-2" style={{fontWeight: "200"}}>
          Welcome to our ecommerce app! We are dedicated to providing you with an easy 
          and convenient shopping experience, right at your fingertips. Our app offers
          a wide variety of products, from fashion and beauty to home essentials and 
          electronics. We strive to ensure that our customers are satisfied with their 
          purchases, offering a seamless checkout process, secure payment options, and 
          reliable shipping. Whether you're looking for the latest trends or practical 
          everyday items, we've got you covered. Thank you for choosing our ecommerce 
          app for all your shopping needs!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;