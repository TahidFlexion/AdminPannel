import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dashbord from './Component/Dashbord';
import SaleInvoice2 from './Component/Sales/SaleInvoice2';
import SalesInvoice from './Component/Sales/SalesInvoice';
import SalesOutstanding from './Component/Sales/SalesOutstanding';
import Header from './Header/Header';
import Add_Party from './Pages/Add_Party';
import DashbordHome from './Pages/DashbordHome';
import Login from './Pages/Login';
import SearchParty from './Pages/SearchParty';
import Purchaseinvoice from './Component/Purchase/Purchaseinvoice';
import PurchaseOutstanding from './Component/Purchase/Purchaseoutstanding';
import Challans from './Component/Inventory/Challans';
import AddChallans from './Component/Inventory/AddChallans';
import ShowDesign from './Component/Inventory/ShowDesign';
import AddDesign from './Component/Inventory/AddDesign';
import AssignDesign from './Component/Inventory/AssignDesign';
import Addjob from './Component/JobWorker/Addjob';
import JobInovice from './Component/JobWorker/JobInovice';
import JobReport from './Component/JobWorker/jobReport';
import JobChallans from './Component/JobWorker/JobChallans';
import AddjobChallan from './Component/JobWorker/AddjobChallan';
import WorkerReport from './Component/Worker/WorkerReport';
import AddWorker from './Component/Worker/AddWorker';
import Purchaseinvoice2 from './Component/Purchase/Purchaseinvoice2';
import { useEffect, useState } from 'react';
import Example from './Example';

function App() {
  const [menushow, setMenushow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLogin(true);
    }
  }, []);

  function handleLogin() {
    setIsLogin(true); 
    localStorage.setItem('isLoggedIn', true);
    navigate("/");
  }

  return (
    <>
      {isLogin ? (
        <>
          <Header menushow={menushow} setMenushow={setMenushow} />
          <div className='container-fluid bg-light ' style={{ backgroundColor: "" }}>
            <div className='row' >
              <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-0 col-0 my-lg-5' style={{ backgroundColor: "" }}>
                <Dashbord menushow={menushow} setMenushow={setMenushow} />
              </div>
              <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12  my-lg-5 my-md-5 my-sm-5 my-5 pt-5 '>
                <Routes>
                  <Route path='/' element={<DashbordHome />} />
                  <Route path='/SalesInvoice' element={<SalesInvoice />} />
                  <Route path='/SalesInvoice2' element={<SaleInvoice2 />} />
                  <Route path='/SalesOutstanding' element={<SalesOutstanding />} />
                  <Route path='/SearchParty' element={<SearchParty />} />
                  <Route path='/Add_Party' element={<Add_Party />} />
                  <Route path='/purchaseinvoice' element={<Purchaseinvoice />} />
                  <Route path='/purchase2' element={<Purchaseinvoice2 />} />
                  <Route path='/purchaseoutstanding' element={<PurchaseOutstanding />} />
                  <Route path='/Challans' element={<Challans />} />
                  <Route path='/AddChallans' element={<AddChallans />} />
                  <Route path='/ShowDesign' element={<ShowDesign />} />
                  <Route path='/AddDesign' element={<AddDesign />} />
                  <Route path='/AssignDesign' element={<AssignDesign />} />
                  <Route path='/Addjob' element={<Addjob />} />
                  <Route path='/Jobinvoice' element={<JobInovice />} />
                  <Route path='/jobreport' element={<JobReport />} />
                  <Route path='/jobChallans' element={<JobChallans />} />
                  <Route path='/AddjobChallan' element={<AddjobChallan />} />
                  <Route path='/WorkerReport' element={<WorkerReport />} />
                  <Route path='/AddWorker' element={<AddWorker />} />
                  <Route path='/new' element={<Example />} />
                </Routes>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login hanldeSubmit={handleLogin} />
             )}
    </>
  );
}

export default App;
