import React from "react";
import { useNavigate } from "react-router";

const PublicPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-white text-2xl font-bold hover:text-gray-200 transition-all duration-300">
            SocialApp
          </h1>
          <div className="space-x-4 flex items-center">
            <button
              onClick={handleLogin}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="bg-gray-50 text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/Bn9GjqMy/file-MQsz5-ACcdg-D8-KFzkspf-Hg-T.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h2 className="text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
            Welcome to SocialApp
          </h2>
          <p className="text-lg animate__animated animate__fadeIn animate__delay-1s">
            SocialApp connects you with friends and the world around you. Share
            your moments, connect, and discover amazing people and places!
          </p>
          <div className="mt-6 space-x-4">
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="bg-gray-50 text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Signup
            </button>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section
        id="main"
        className="py-16 bg-white transition-all duration-500 ease-in-out"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 animate__animated animate__fadeInUp">
            Your Social World Awaits
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Get started by exploring the community and discovering new
            connections. Share your life with the world!
          </p>
          <div className="flex justify-center gap-8">
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="bg-gray-50 text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Signup
            </button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        className="py-16 bg-blue-50 transition-all duration-500 ease-in-out"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 animate__animated animate__fadeInUp">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-4">Instant Messaging</h3>
              <p className="text-gray-700">
                Chat with friends, family, and the community. Instant messaging
                with real-time notifications.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-4">Photo & Video Sharing</h3>
              <p className="text-gray-700">
                Share your moments with photos and videos. Connect visually with
                your network!
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-4">Events & Groups</h3>
              <p className="text-gray-700">
                Join groups, attend events, and make your social experience even
                more meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gray-100 text-center transition-all duration-500 ease-in-out"
      >
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 animate__animated animate__fadeInUp">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Have any questions or need support? Reach out to us anytime!
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Email Support
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Call Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2024 SocialApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PublicPage;
