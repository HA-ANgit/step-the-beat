import React from 'react'

const CreateUserPage = () => {
    return (
        <div>
            <section className="createUser">

                <div className="container">
                    <h1 className={"font-weight-800"}>Create New User</h1>
                </div>

                <div className="form-box">
                    <form>
                    <label htmlFor="username" className="uname">
                            <p>User Name:</p>
                            <input id="uname" type="text" placeholder="Type in your username" className={"input"}/>
                        </label>
                        <label htmlFor="epost" className="form-input">
                            <p>E-mail:</p>
                            <input id="epost" type="text" placeholder="Type in prefered email" className={"input"}/>
                        </label>
                        <label htmlFor="password" className="form-input">
                            <p>Password:</p>
                            <input id="password" type="password" placeholder="Type in a password" className={"input"}/>
                        </label>
                        <label htmlFor="password" className="form-input">
                            <p>Repeat password:</p>
                            <input id="password" type="password" placeholder="Repeat your password" className={"input"}/>
                         </label>
                    </form>
                </div>
                 <div>
                    <button href="#">Confirm</button>
                </div>
            </section>
        </div>
    );
};

export default CreateUserPage;