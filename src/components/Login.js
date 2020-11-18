import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { signIn } from "../actions/index";

const clientId =
    "228831500419-1pdt6pga3o2tu5c25ueio3mekuc0avbs.apps.googleusercontent.com";

function Login(props) {
    const onSuccess = (response) => {
        console.log(response.profileObj);
        props.signIn(response.profileObj);
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

const mapStateToProps = (state) => {
    return { signIn: state.signIn, user: state.user };
};

export default connect(mapStateToProps, { signIn })(Login);
