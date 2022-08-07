import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import { Link } from 'react-router-dom';
function BlogItems({ blogs}) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
         <div className="col">
          <div className="card h-100">
        {blogs.items.map((blog) => (
          <div key={blog.id}>
            <img src={baseUrl + blog.image} alt={blog.name} />
            <Link to={`/menu/${blog.id}`}>
            <div className="card-body">
              <h5 className="card-title">{blog.name}</h5>
              <p className="card-text">{blog.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
            </Link>
          </div>
        ))}
        </div>
        </div>
      </div>
    );
}
export default function Blog({blogs}) {
    return(
       <>
     <div className="container">
        <div className="row pt-5 ">
          <div className="d-flex justify-content-center align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item text-uppercase fw-bold">
                <a className="anchor" href="/">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item active  text-uppercase fw-bold"
                aria-current="page"
              >
                Blog
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="fs-1 fw-bold "> Blog</div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <BlogItems items={blogs} />
        </div>
      </div>
       </> 
    );
}