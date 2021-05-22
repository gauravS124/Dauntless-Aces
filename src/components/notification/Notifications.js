import React,{useState,useEffect} from 'react'

const Notifications = () => {

    const [notifications,setNotifications]= useState([]);
    const [loading,setLoading]= useState(false);

    useEffect(() => {
        getNotifications();
      //eslint-disable-next-line
    }, [])

    const getNotifications = async () =>{

        setLoading(true);
        
        const res = await fetch('/notification');
        const data =await res.json();
       
        setNotifications(data);
        setLoading(false);
        
    }

    if(loading){
        console.log(notifications);
        return <h4>Loading ..........</h4>
    }

    return (
        
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className='center'>Notification </h4>
                </li>
                {!loading && notifications.length === 0 ? (<p>Nothing to show</p>) : (
                    notifications.map(notification => <li> {notification.description} </li>)
                )}
            </ul>
            

    )
}

export default Notifications;
