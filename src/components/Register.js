import React from 'react'
import { Link } from 'react-router-dom';

function register() {
  return (
 <>
 <div class="container" >

<div class="card1 o-hidden border-0 shadow-lg " style={{marginTop:"5rem"}}>
    <div class="card-body p-0" >
        <div class="row" >
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="user">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address"/>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Password"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Repeat Password"/>
                            </div>
                        </div>
                        <Link to="/user" class="btn btn-primary btn-user btn-block">
                            Register Account
                        </Link>
                        <hr/>
                        <Link to="/user" class="btn btn-google btn-user btn-block">
                            <i class="fab fa-google fa-fw"></i> Register with Google
                        </Link>

                    </form>
                    <br/>
                    <div class="text-center">
                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="text-center">
                        <Link to="/" class="small" >Already have an account? Login!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
 
 </>
  )
}

export default register