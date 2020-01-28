console.log('App is running..');

const App = () => {
    return(
        <main>
            <p>Issue Tracker</p>
            <UserLogin />
        </main>
    );
}

const UserLogin = () => {
    return(
        <section className="userForm">
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id=""/>
                <button type="submit">Log In</button>
            </form>
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));