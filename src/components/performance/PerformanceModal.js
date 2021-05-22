import React,{useEffect,useState} from 'react'

const PerformanceModal = () => {
    const [performance,setPerformance]=useState({});
    useEffect(() => {
        getPerformance();
      //eslint-disable-next-line
    }, {});

    const getPerformance = async () =>{        
        
        const res = await fetch('/performance');
        const data =await res.json();
       
        setPerformance(data);
 
        
    }
    // const [timeSpent,setTimeSpent]=useState('');
    // const [bugResolved,setBugResolved]=useState('');   
    
    return (
        <div id='view-performance' className="modal" >
            <div className='modal-content'>
            <h4>View Performance </h4>
            
            <h6> Our Rating {performance.rating}</h6>
            <h6>Spent Rating  {performance.timeSpent}</h6>
            <h6>Bugs Resolved  {performance.bugResolved}</h6>

            </div>
         </div>
    )
}
export default PerformanceModal;
