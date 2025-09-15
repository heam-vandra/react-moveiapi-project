import React from "react";

function ProfileCard({ name, bio, isOnline }) {
  return (
    <div className="border rounded-lg p-4 shadow w-64 text-center">
      <video
        src="/videos/01.mp4"
        alt="avatar"
        className="w-500 h-12 mx-auto rounded-full "
      />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{bio}</p>

      {/* 👇 Conditional Rendering */}
      {isOnline ? (
        <p className="text-green-500 font-semibold mt-2">🟢 Online</p>
      ) : (
        <p className="text-red-500 font-semibold mt-2">🔴 Offline</p>
      )}
    </div>
  );
}

export default ProfileCard;
