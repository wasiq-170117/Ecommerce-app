import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
const PagenotFound = () => {
  return (
    <Layout title={"404 - Page not Found"}>
        <div className="jumbotron">
          <h1 className="display-4">404</h1>
          <p className="lead">Oops! Page not Found</p>
          <Link to="/" className="goBackLink">
            Go Back
          </Link>
        </div>

    </Layout>
  )
}

export default PagenotFound