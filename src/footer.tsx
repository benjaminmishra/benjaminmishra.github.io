import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Benjamin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
