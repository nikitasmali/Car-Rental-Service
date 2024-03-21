import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import { app, auth } from '../firebase'; // Import app and auth from firebase.js
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword from Firebase Authentication SDK

const Register = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const fullName = formData.get('fname');
    const email = formData.get('email');
    const phoneNumber = formData.get('phno');
    const password = formData.get('password');
    const agreeTerms = formData.get('check');

    // Check if terms are agreed
    if (!agreeTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    try {
      // Register the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Save additional user details to Firestore
      await app.firestore().collection('users').doc(userCredential.user.uid).set({
        fullName,
        email,
        phoneNumber,
      });

      alert("Registration successful!");
      // Optionally, you can redirect the user after successful registration
    } catch (error) {
      console.error("Error registering user: ", error);
      alert("An error occurred during registration. Please try again later.");
    }
  };

  return (
    <Helmet title="Register">
      <section>
        <div style={{ backgroundColor: "#f0f1f2" }}>
          <div className="container p-2">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-center">Registration Page</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="fullName">Enter Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter Name"
                          required
                          name="fname"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          required
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneNumber"
                          placeholder="Enter Phone No"
                          required
                          name="phno"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          required
                          name="password"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="agreeTerms"
                          required
                          name="check"
                        />
                        <label className="form-check-label" htmlFor="agreeTerms">
                          Agree Terms & Conditions
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Register;