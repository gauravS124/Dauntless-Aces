import React,{useState} from 'react'

const NotificationModal = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
   

    const onSubmit = () =>{
        const newNotification={
            title,
            description         
        }

        addNotification(newNotification)

    }

    const addNotification = async (notification) =>{
        const response = await fetch('https://servermock-app.herokuapp.com/notification', {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(notification) // body data type must match "Content-Type" header
          });
          console.log( response.json());

    }
   
    
    return (
        <div id='publish-notification-modal' className="modal" >
            <div className='modal-content'>
                <h4> Add Announcement</h4>
                <a  href="https://jolly-bose-35fad9.netlify.app/" target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn"><i class="material-icons left">person</i>Notification List</a>

                <br></br>
                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='title'
                        value={title}
                        onChange={e=> setTitle(e.target.value)}
                        /> 
                        <label htmlFor='title' className='active'> 
                            Title
                        </label>
                       
                    </div>
                </div>


                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='description'
                        value={description}
                        onChange={e=> setDescription(e.target.value)}
                        /> 
                        <label htmlFor='description' className='active'> 
                            Description
                        </label>
                    </div>
                </div>

  
            </div>
            <div className='modal-footer'>
            <a href='#asd' onClick={onSubmit} className="modal-close waves-effect waves-light blue btn"> Submit</a>
            </div>
            
            
        </div>
    )
}
export default NotificationModal;
