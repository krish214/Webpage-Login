import React, { Component } from "react";
import './login.css';
import gicon from "./assets/search.png";
import wlogo from "./assets/wraptronlogo.png";


class Login extends Component {
	render() {
		return (
             /* <!--background image--> */
            <div class="bg-img">
               {/* login dialog box */}
                <div class='d-box row'>
                    {/* login form */}
                    <div class='l-form col-7'>
                       <div class="">
                        <span class='row txt center'>Login</span>
                        <span class='row txt center'>
                        Hello, and welcome back!
                        </span>
                        </div>
                        
                        
                        <button class='row full-width btn'>
                        <img src={gicon} class="g-icon" alt="googlesignin"/>
                        Sign with google
                        </button>
                        <hr class='divider'/>
                        

                       <form>
                        <label class='row full-width form-input txt style'>EMAIL OR PHONE NUMBER</label>
                        <input class='row full-width form-control bg-placeholder'  type='email' name='email' placeholder='enter the email'/>

                        <label class='row form-input txt style'>PASSWORD</label>
                        <input class='row full-width form-control bg-placeholder' type='password' name='password' placeholder='enter the password'/>

                            <button class='row full-width btn btn-login'>Login</button>
                            
                        
                       </form>

                    </div>
                    <div class="vl col-1"></div>

                    
                    {/* logo */}
                    <div class='logo col-4'>
                    <img src={wlogo} class="logo" alt="googlesignin"/>
                    </div>
                </div>
                



            </div>
		
		);