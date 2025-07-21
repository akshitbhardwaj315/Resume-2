import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-foreground/70 max-w-lg mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-200">
          <Link to="/" className="btn-primary flex items-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-blue/20 rounded-full float"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-neon-purple/20 rounded-full float delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-neon-pink/20 rounded-full float delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-neon-green/20 rounded-full float delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
