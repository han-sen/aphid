import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

const clientId =
    "228831500419-1pdt6pga3o2tu5c25ueio3mekuc0avbs.apps.googleusercontent.com";

function Login() {
    const onSuccess = (response) => {
        console.log(response.profileObj);
    };
    const onFailure = (response) => {
        console.log(response.profileObj);
    };
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}
export default connect(null, { signIn, signOut })(Login);
