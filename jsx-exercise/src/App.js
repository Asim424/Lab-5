import './App.css';
import Controls from './Controls';
import UserList from './UserList';
import Footer from './Footer';
function App() {
  var date = new Date()
  var currentYear = date.getFullYear()

  var isLoggedIn = true
  return (
    <div>
      <h1>ENSF-381: Full Stack 
Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
        {/* In App.js, render the following content only when isLoggedIn is true:
  o Inside the conditional block, render one <section> containing <Controls />
  o Inside the conditional block, render one <section> containing the user list heading
  and <UserList />
  o Inside the conditional block, render <Footer /> */}
      {isLoggedIn ? (
        <>
          <section>
            <Controls />
          </section>
          <section>
            <h2>User List</h2>
            <UserList />
          </section>
          <Footer />
        </>
      ) : null}

    </div>
  );
}

export default App;