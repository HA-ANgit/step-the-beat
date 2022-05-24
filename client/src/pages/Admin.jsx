import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Admin = () => { //TODO - Skapa en route security för ADMIN

    const [accountList, setAccoutList] = useState([]);
    const [uname, setAccountName] = useState('');

    useEffect(()=> {
        Axios.get("http://localhost:3001/api/read").then((response)=>{
            console.log("response.data: " + response.data)

            setAccoutList(response.data)
            console.log("accountList: " + accountList)
        });
    }, []);

    const updateAccount = (id) => {
        Axios.put("http://localhost:3001/api/update", {id: id, uname: uname}).then((response)=>{
            console.log(response.data);
            console.log("id.data: " + id + " uname: " + uname);

            setAccountName(response.data)
        });
    };

    const deleteAccount = (id) => {
        Axios.delete(`http://localhost:3001/api/delete/${id}`)
        console.log("id.data: " + id);
    };

    const findUser = (id)=> {
        Axios.get(`http://localhost:3001/api/read/${id}`)
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
                        return <div key={key} className="account"><h5>{"User: " + value.uname + " | Email: " + value.email + " | ID: " + value._id}</h5>
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