import React from 'react'

class CreateUserForm extends React.Component {
    render() {
        return (
            <div>
                <section className="createUser">
                    <div className="container">
                        <h2>Create new account</h2>
                    </div>
                    <div className="forms">
                        <form>
                            <input type="text" placeholder="First Name" className="fname" />
                            <span></span>
                            <input type="text" placeholder="Last Name" className="lname" />
                        </form>
                        <form>
                            <br></br>
                            <input type="text" placeholder="Email" className="form" />
                            <br></br>
                            <input type="text" placeholder="Password" className="form" />
                            <br></br>
                            <input type="text" placeholder="Repeat password" className="form" />
                        </form>
                    </div>
                    <div className="buttons">
                        <a href="#">Confirm</a>
                    </div>
                </section>



            </div>
        )
    }
}

export default CreateUserForm;