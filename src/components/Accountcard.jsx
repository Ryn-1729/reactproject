import React from 'react';

const AccountCard = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-semibold mb-4">Account Settings</h2>

      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">📷</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm">MIKASA AMANE</h3>
          <p className="text-sm text-gray-600">MIKASA@Gmail.Com</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mt-4 leading-snug">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam.
      </p>
    </div>
  );
};

export default AccountCard;
