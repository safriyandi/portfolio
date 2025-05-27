import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Selamat Datang di Portofolio Yandi</h1>
      <p className="text-lg mb-8 max-w-xl">
        Ini adalah halaman utama. Kamu bisa eksplor project-project yang pernah saya buat.
      </p>
      <Link
        to="/project-bucin"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Lihat Project Bucin 💖
      </Link>
    </div>
  );
};

export default Home;
