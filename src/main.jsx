import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/Applied Jobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';
import JobContext from './Context/JobContext';
import AllJobs from './Components/AllJobs/AllJobs';
import Exchange from './Components/Exchange/Exchange';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('jobs.json')
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/jobDetails",
        element:<JobDetails></JobDetails>
      },
      {
        path:"/alljobs",
        element:<AllJobs></AllJobs>
      },
      {
        path:"/exchange",
        element:<Exchange></Exchange>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobContext>
      <RouterProvider router={router} />
    </JobContext>
  </React.StrictMode>,
)
