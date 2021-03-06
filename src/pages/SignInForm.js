import React, { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();
    }

       render() {
        return (
        <div className="FormCenter">
          <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
              </div>
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
