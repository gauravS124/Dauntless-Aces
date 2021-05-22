import React,{useEffect,useState} from 'react'

const SupportModal = () => {
    const [support,setSupport]=useState({});
    useEffect(() => {
        getSupport();
      //eslint-disable-next-line
    }, {});

    const getSupport = async () =>{        
        
        const res = await fetch('/customerSupport');
        const data =await res.json();
       
        setSupport(data);
 
        
    }
    // const [timeSpent,setTimeSpent]=useState('');
    // const [bugResolved,setBugResolved]=useState('');   
    
    return (
        <div id='customer-support' className="modal" >
            <div className='modal-content'>
            <h4>Customer Support </h4>
            
            <h6> You can contact us at</h6>
            <h6>Mob  {support.contact}</h6>
            <h6>email  {support.email}</h6>
            <br>
            </br>
            <br>
            </br>

            <a  href="https://blissful-aryabhata-7f9a5b.netlify.app/" target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn"><i class="material-icons left">person</i>Need help</a>
           
            <br></br>


            </div>
         </div>
    )
}
export default SupportModal;
