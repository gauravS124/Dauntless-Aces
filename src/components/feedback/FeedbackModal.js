import React,{useState} from 'react'

const FeedbackModal = () => {
    const [author,setAuthor]=useState('');
    const [description,setDescription]=useState('');
    const [rating,setRating]=useState('');
   

    const onSubmit = () =>{
        console.log(author,description)
        const newFeedback={
            author,
            description,
            rating
        }

        addFeedback(newFeedback)

    }

    const addFeedback = async (feedback) =>{
        const response = await fetch('https://servermock-app.herokuapp.com/feedback', {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(feedback) // body data type must match "Content-Type" header
          });
          console.log( response.json());

    }
    
    return (
        <div id='add-feedback-modal' className="modal" >
            <div className='modal-content'>
                <h4>Add Feedback </h4>
                <a  href="https://quizzical-lumiere-82bb5a.netlify.app/" target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn"><i class="material-icons left">person</i>See feedbacks</a>

                <br></br>
                <div className='row'>
                    <div className='input-field'>
                        <input 
                        type='text'
                        name='Author'
                        value={author}
                        onChange={e=> setAuthor(e.target.value)}
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
                        name='description'
                        value={description}
                        onChange={e=> setDescription(e.target.value)}
                        /> 
                        <label htmlFor='description' className='active'> 
                            Feedback description
                        </label>
                    </div>
                </div>


                <div className='row'>
                    <div className='input-field'>
                        <select 
                        name='rating'
                        value={rating}
                        className='browser-default'
                        onChange={e=> setRating(e.target.value)}
                        > 
                        <option value='' disabled> select rating</option>

                        <option value='1' > 1 </option>
                        <option value='2' > 2 </option>
                        <option value='3' > 3 </option>
                        <option value='4' > 4 </option>
                        <option value='5' > 5 </option>

                        </select>
                       
                    </div>
                </div>



   
            </div>
            <div className='modal-footer'>
            <a href='#asd' onClick={onSubmit} className="modal-close waves-effect waves-light blue btn"> Submit</a>
            </div>
            
            
        </div>
    )
}
export default FeedbackModal;
