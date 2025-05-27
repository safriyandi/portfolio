import React from 'react';

const ProjectBucin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center justify-center p-8 text-center text-white font-poppins">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Project Bucin 💖</h1>
      <p className="mb-8 max-w-xl text-lg drop-shadow-md">
        Ini adalah project spesial yang berisi permintaan maaf untuk sesorang yang kamu cintai.
      </p>
      
      <a 
        href="/project/hehe.html" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-white text-pink-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-pink-50 transition"
      >
        Buka Halaman Bucin 💌
      </a>

      {/* Kalau kamu mau embed music juga di sini: */}
      {/* <audio controls autoPlay loop className="mt-10 rounded-lg shadow-lg">
        <source src="/bucin/mangu.mp3" type="audio/mpeg" />
        Browsermu tidak mendukung audio.
      </audio> */}
    </div>
  );
};

export default ProjectBucin;


