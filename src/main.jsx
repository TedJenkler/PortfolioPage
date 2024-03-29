import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "../src/errorpage.jsx";
import Contact from './Contact.jsx'
import PIndex from "./portfolioindex.jsx"
import ECommerceinner from './portfolio-projects/ECommerceinner.jsx'
import HuddleTailwindinner from './portfolio-projects/HuddleTailwindinner.jsx'
import MultiPageSiteinner from './portfolio-projects/MultiPageSiteinner.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/portfolio',
        element: <PIndex />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "portfolio/ecommerce",
        element: <ECommerceinner />,
      },
      {
        path: "portfolio/huddletailwind",
        element: <HuddleTailwindinner />,
      },
      {
        path: "portfolio/multipagesite",
        element: <MultiPageSiteinner />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
