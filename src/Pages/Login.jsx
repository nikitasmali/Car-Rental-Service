import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

const Login = () => {
  return(
    <Helmet title="Login" >
        <section>
        <div className="container">
        <div className="row mt-2">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Login</h3>
                
                
                <form action="LoginServlet" method="post">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                      name="password"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Login</button><br />
                    <Link to="/register">Create Account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
    </Helmet>
  );
};

export default Login;