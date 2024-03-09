import './Freinds.css'
import Friends from './Friends'
export default function Freind ({friend}){

    const {name, username, phone, email} = friend;
    return(
        <div className='singleBox'>
            <h3>Name: {name} </h3>
            <h4>User name: {username} </h4>
            <h5>Phone: {phone} </h5>
            <p>Email: {email} </p>
        </div>
    )   
}