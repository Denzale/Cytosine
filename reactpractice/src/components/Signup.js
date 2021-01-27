function Signup() {
    return (


        <div class="container">
            <div class="col-lg-8">
                <div class="shadow  bg-white rounded ">
                    <div class="row">
                        <div class="col-md-8">

                            <form class="login ">
                                <div class="form-group">
                                    <label for="exampleInputusername1">Username</label>
                                    <input type="username" class="form-control shadow form-style" id="username-input"
                                        name="username" placeholder="Username" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control shadow form-style" id="password-input"
                                        name="password" placeholder="Password" />
                                </div>

                                <button type="submit" class="btn btn-primary log-btn shadow">SignUp</button>


                            </form>


                        </div>
                    </div>
                </div>

            </div>







        </div>






    );
}

export default Signup;