import React,{useState,useEffect} from 'react'

const Bugs = () => {

    const [bugs,setBugs]= useState([]);
    const [loading,setLoading]= useState(false);

    useEffect(() => {
        getBugs();
      //eslint-disable-next-line
    }, [])

    const getBugs = async () =>{

        setLoading(true);
        
        const res = await fetch('https://servermock-app.herokuapp.com/bugs');
        const data =await res.json();
       
        setBugs(data);
        setLoading(false);
        
    }

    if(loading){
        console.log(bugs);
        return <h4>Loading ..........</h4>
    }


    return (
        
            // <ul className="collection with-header">
            //     <li className="collection-header">
            //         <h4 className='center'>Bugs Reported</h4>
            //     </li>
            //     {!loading && bugs.length === 0 ? (<p>Nothing to show</p>) : (
            //         bugs.map(bug => <li> {bug.description} </li>)
            //     )}
            // </ul>
            <div>
                <h4>Welcome to Konnex ticket booking portal</h4>
                <br></br>

                <br></br>
                <br></br>

                  <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='Author'
                         /> 
                        <label htmlFor='author' className='active'> 
                            Your name
                        </label>
                       
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        /> 
                        <label htmlFor='author' className='active'> 
                            Source
                        </label>
                       
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        /> 
                        <label htmlFor='author' className='active'> 
                            Destination
                        </label>
                       
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        /> 
                        <label htmlFor='author' className='active'> 
                            Date
                        </label>
                       
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        /> 
                        <label htmlFor='author' className='active'> 
                            People
                        </label>
                       
                    </div>
                </div>

                <a  href=""  class="waves-effect waves-light btn">Book Tickets</a>

                
            </div>

    )
}

export default Bugs;
