
import React from "react";

const Section = ({ icon, title, children, bg }) => (
  <section className={bg ? "bg-light py-5" : "py-5"}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-2 text-center mb-4 mb-md-0">
          <i className={`fa-${icon} fa-5x text-danger`} />
        </div>
        <div className="col">
          <h2 className="fw-bold">{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Contact us</h2>
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <p>Contact us and we will get back to you within 24 hours.</p>
          <p><i className="fa-solid fa-location-dot me-2"></i>Company Name</p>
          <p><i className="fa-solid fa-phone me-2"></i>+256 778 800 900</p>
          <p><i className="fa-solid fa-envelope me-2"></i>company@gmail.com</p>
        </div>
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input type="email" className="form-control" placeholder="email address" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="comment"></textarea>
            </div>
            <button type="submit" className="btn btn-danger w-100">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return (
    <>
      {/* Hero */}
      <header className="hero text-white text-center py-5">
        <h1 className="display-4">Company</h1>
        <p className="lead">We specialise in something ...</p>
      </header>

      {/* Sections */}
      <Section icon="solid fa-building" title="About the Company">{lorem}</Section>
      <Section icon="solid fa-globe-americas" title="Our Values" bg>{lorem}</Section>
      <Section icon="solid fa-landmark" title="Our Mission">{lorem}</Section>

      {/* Contact */}
      <Contact />
    </>
  );
}

export default App;
