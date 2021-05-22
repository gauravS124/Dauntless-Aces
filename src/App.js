import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import React,{Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar'
import Bug from './components/bugs/Bugs'
import Notification from './components/notification/Notifications'
import WidgetBtn from './components/layout/WidgetBtn'
import ReportBugModal from './components/bugs/ReportBugModal'
import NotificationModal from './components/notification/NotificationModal'
import FeedbackModal from './components/feedback/FeedbackModal'
import PerformanceModal from './components/performance/PerformanceModal'
import SupportModal  from './components/support/SupportModal'


const App = () => {
  useEffect(() => {
    
    M.AutoInit();
    
  });
  return (
    <div className="App">
     <Fragment>
       <Navbar />
       <div className="container">
         < WidgetBtn />
         <ReportBugModal />
         <NotificationModal />
         <FeedbackModal />
         <PerformanceModal />
         <SupportModal />
          <Bug />
          {/* <Notification /> */}

       </div>
      
     </Fragment>
    </div>
  );
}

export default App;
