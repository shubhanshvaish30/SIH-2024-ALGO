import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

import FreelancerDashboard from "./components/FreelancerComponents/FreelancerDashboard";
import FreelancerServices from "./components/FreelancerComponents/FreelancerServices";
import FreelancerCreateService from "./components/FreelancerComponents/FreelancerCreateService";
import FreelancerManageServices from "./components/FreelancerComponents/FreelancerManageServices";
import FreelancerUpdateService from "./components/FreelancerComponents/FreelancerUpdateService";
import FreelancerClient from "./components/FreelancerComponents/FreelancerClient";
import ServiceDetails from "./components/ServiceDetails";

import ClientDashboard from "./components/ClientComponents/ClientDashboard";
import ClientFreelancers from "./components/ClientComponents/ClientFreelancers";
import ClientOrders from "./components/ClientComponents/ClientOrders";
import ClientServices from "./components/ClientComponents/ClientServices";
import ClientCreateService from "./components/ClientComponents/ClientCreateService";
import FreelancerApplied from "./components/FreelancerComponents/FreelancerApplied.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/freelancer/:id">
            <Route index element={<FreelancerDashboard />} />

            <Route path="/dashboard/freelancer/:id/services">
              <Route index element={<FreelancerServices />} />
              <Route
                path="/dashboard/freelancer/:id/services/create"
                element={<FreelancerCreateService />}
              />
              <Route
                path="/dashboard/freelancer/:id/services/manage"
                element={<FreelancerManageServices />}
              />
              <Route
                path="/dashboard/freelancer/:id/services/update/:serviceId"
                element={<FreelancerUpdateService />}
              />
            </Route>
              <Route
                path="/dashboard/freelancer/:id/servicesby/show/:serviceId"
                element={<ServiceDetails type="1" />}
              />
              <Route
                path="/dashboard/freelancer/:id/services/show/:serviceId"
                element={<ServiceDetails type="1" />}
              />
            <Route
              path="/dashboard/freelancer/:id/jobs"
              element={<FreelancerClient/>}
            />
            <Route
              path="/dashboard/freelancer/:id/applied"
              element={<FreelancerApplied/>}
            />
            <Route
              path="/dashboard/freelancer/:id/order/show/:serviceId"
              element={<ServiceDetails type="3" />}
            />
            <Route
              path="/dashboard/freelancer/:id/profile"
              element={<Profile type="1" />}
            />
          </Route>
          
          <Route path="/dashboard/client/:id">
            <Route index element={<ClientDashboard />} />
            <Route path="/dashboard/client/:id/servicesby">
              <Route index element={<ClientServices />} />
              <Route
                path="/dashboard/client/:id/servicesby/create"
                element={<ClientCreateService/>}
              />
              <Route
                path="/dashboard/client/:id/servicesby"
                element={<ClientServices type="2"/>}
              />
            </Route>
            <Route
              path="/dashboard/client/:id/freelancers"
              element={<ClientFreelancers />}
            />
            <Route
              path="/dashboard/client/:id/freelancers"
              element={<ClientFreelancers type="2"/>}
            />
            <Route
              path="/dashboard/client/:id/servicesby/show/:serviceId"
              element={<ServiceDetails type="2" />}
            />
            <Route
              path="/dashboard/client/:id/orders"
              element={<ClientOrders />}
            />
            <Route
              path="/dashboard/client/:id/order/show/:serviceId"
              element={<ServiceDetails type="3" />}
            />
            <Route
              path="/dashboard/client/:id/profile"
              element={<Profile type="2" />}
            />
          </Route> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
