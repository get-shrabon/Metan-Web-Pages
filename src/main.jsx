import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root/Root';
import Home from "../src/components/HomePage/Home"
import AboutPage from "../src/components/AboutPage/AboutPage"
import PrivacyPage from './components/PrivacyPolicyPage/PrivacyPage';
import TermsConditionPage from './components/TermsConditionPage/TermsConditionPage';
import FAQ from './components/FAQPage/FAQ';
import Features from './components/FeaturesPage/Features';
import Package from './components/PackagePage/Package';
import FAQPage from "../src/components/FAQPage/FAQ"
import Contact from './components/ContactPage/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/aboutUs",
        element:<AboutPage></AboutPage>
      },
      {
        path:"/privacyPolicy",
        element:<PrivacyPage></PrivacyPage>
      },
      {
        path:"/termsCondition",
        element:<TermsConditionPage></TermsConditionPage>
      },
      {
        path:"/faq",
        element:<FAQ/>
      },
      {
        path:"/features",
        element:<Features/>
      },
      {
        path:"/package",
        element:<Package/>
      },
      {
        path:"/faq",
        element:<FAQPage/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
