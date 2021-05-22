import React,{useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const WidgetBtn = () => {
    useEffect(() => {
    
        M.AutoInit();
        
      });
    return (
        <div className= "fixed-action-btn">

            <a href="#r" className="btn-floating btn-large blue darken-2 modal-trigger">
                <i className="large material-icons">face</i>
            </a>
            <ul>
                <li>
                    <a href="#report-bug-modal" data-position="top" data-tooltip="Report Bug" className="btn-floating btn tooltipped modal-trigger red"><i className=" large material-icons">bug_report</i></a>
                </li>
                <li><a href="#add-feedback-modal" data-position="top" data-tooltip="Add Feedback" className="btn-floating tooltipped  yellow modal-trigger darken-1"><i className=" large material-icons">chat</i></a></li>
                <li><a href="#publish-notification-modal" data-position="top" data-tooltip="Add Announcement" className="btn-floating tooltipped  modal-trigger green"><i className="large material-icons"> notifications </i></a></li>
                <li><a href="#customer-support" data-position="top" data-tooltip="Customer Support" className="btn-floating tooltipped  modal-trigger pink"><i className=" large material-icons">contact_phone</i></a></li>
                {/* <li><a href="https://blissful-aryabhata-7f9a5b.netlify.app/" target="_blank" rel="noopener noreferrer" data-position="top" data-tooltip="Chat bot" className="btn-floating tooltipped  modal-trigger pink"><i className=" large material-icons">comment</i></a></li> */}
                <li><a href="#view-performance" data-position="top" data-tooltip="Monitor Performance" className="btn-floating tooltipped  modal-trigger pink"><i className=" large material-icons">fitness_center</i></a></li>

                <li><a href="#a" data-position="top" data-tooltip="Search" className="btn-floating tooltipped  modal-trigger blue"><i className=" large material-icons">search</i></a></li>

            </ul>
            
        </div>
    )
}

export default WidgetBtn;
