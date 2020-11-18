import React from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

const clientId =
    "228831500419-1pdt6pga3o2tu5c25ueio3mekuc0avbs.apps.googleusercontent.com";

function Login() {
    const onSuccess = () => {
        console.log("user has logged out");
    };
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onSuccess={onSuccess}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}
export default connect(null, { signIn, signOut })(Login);
