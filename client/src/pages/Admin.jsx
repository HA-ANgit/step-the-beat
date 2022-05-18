import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Admin = () => {

    const [accountList, setAccoutList] = useState([]);
    const [uname, setAccountName] = useState('');

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=>{
            setAccoutList(response.data)
        });
    }, []);

    const updateAccount = (id) => {
        Axios.put("http://localhost:3001/update", {id: id, uname: uname}).then((response)=>{
            console.log(response.data);
            setAccountName(response.data)
        });

    };

    const deleteAccount = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    };

    const findUser = (id)=> {
        Axios.get(`http://localhost:3001/read/_id:${id}`)
        .then(({data}) => {
          console.log("DATA ==> ", data)
        })
        .catch(error => console.log("ERROR API GET ==> ", error))
      }

    return (
        <div className='container'>
            <header className="App-header">
                <h2>Admin Dashboard</h2>
            </header>
            <main className='container'>
            <h4>User Data: </h4>
                <div className='container'>
                    <input onChange={(e) => {findUser(e.target.value)}} type="text" placeholder="Search by username..."/>
                    <button style={ {   padding: 1 }} type="submit">Search User</button>
                    <br/><br/>
                </div>
                <div className='admin-container'>
                    {accountList.map((value, key) => {
                        return <div key={key} className="account"><h5>{"User ID: " + value._id + " - User Name: " + value.uname + " - Email: " + value.email}</h5>
                        <input type="text" placeholder='New Username...' onChange={(e) => {setAccountName(e.target.value)}} />
                        <button onClick={() => updateAccount(value._id)} style={ {   padding: 1 }}>UPDATE USERNAME</button>
                        <button>RESET PASSWORD</button>
                        <button onClick={() => deleteAccount(value._id)} style={ { color : 'red' } }>DELETE ACCOUNT</button>
                        </div>
                    })}
                </div>
                <div className='container'>
                    <Link to='/'>Go Back</Link>
                </div>
            </main>
        </div>
    )
};
export default Admin;