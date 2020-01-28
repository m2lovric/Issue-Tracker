"use strict";

console.log('App is running..');

var App = function App() {
    return React.createElement(
        "main",
        null,
        React.createElement(
            "p",
            null,
            "Issue Tracker"
        ),
        React.createElement(UserLogin, null)
    );
};

var UserLogin = function UserLogin() {
    return React.createElement(
        "section",
        { className: "userForm" },
        React.createElement(
            "form",
            { action: "" },
            React.createElement(
                "label",
                { htmlFor: "username" },
                "Username"
            ),
            React.createElement("input", { type: "text", name: "username" }),
            React.createElement(
                "label",
                { htmlFor: "password" },
                "Password"
            ),
            React.createElement("input", { type: "password", name: "password", id: "" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Log In"
            )
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
