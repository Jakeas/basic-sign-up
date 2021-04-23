import React, { useState } from 'react'


function Facebook() {
const [values, setValues] = useState([])

  const changeHandler = (e) => {
      setValues(e.target.value)
  }
  // const valueChange = (e) => {
  //     setValues({
  //       selectedOption: e.target.value
  //     })  
  // }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log()
  }

  return (
    <div className="App">
      <h1>Facebook: Create an account</h1>
      <h2>It's quick and easy.</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="firstName" 
          placeholder="First name"
          value={values.firstName}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="lastName" 
          placeholder="Last name"
          value={values.lastName}
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email" 
          placeholder="Email address"
          value={values.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password" 
          placeholder="Password"
          value={values.password}
          onChange={changeHandler}
        />
        <h3>Birthday</h3>
        <input type="date"/>
        <h4>By clicking sign-up you become ours. Forever.</h4>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Facebook