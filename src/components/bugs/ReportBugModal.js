import React,{useState} from 'react'

const ReportBugModal = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [author,setAuthor]=useState('');
    const [email,setEmail]=useState('');

    const onSubmit = () =>{

        const newBug={
            title,
            description,
            author,
            email
        }

        addBug(newBug)

    }

    const addBug = async (bug) =>{
        const response = await fetch('https://servermock-app.herokuapp.com/bugs', {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(bug) // body data type must match "Content-Type" header
          });
          console.log( response.json());

    }
    return (
        <div id='report-bug-modal' className="modal" >
            <div className='modal-content'>
                <h4> Report a bug</h4>
                <a  href="https://boring-jennings-b1b947.netlify.app/" target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn"><i class="material-icons left">bug_report</i>See bugs reported</a>

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
                            Bug Title
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
                            Bug description
                        </label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='author'
                        value={author}
                        onChange={e=> setAuthor(e.target.value)}
                        /> 
                        <label htmlFor='author' className='active'> 
                            Bug author
                        </label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='email'
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        /> 
                        <label htmlFor='email' className='active'> 
                            Bug email
                        </label>
                    </div>
                </div>               
            </div>
            <div className='modal-footer'>
            <a href='#a' onClick={onSubmit} className="modal-close waves-effect waves-light blue btn"> Submit</a>
            </div>
            
            
        </div>
    )
}
export default ReportBugModal;
