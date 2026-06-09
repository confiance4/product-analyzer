import React from 'react';
import { supabase } from '../services/supabaseClient';

export default function Header({ user }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950 border-b border-slate-700 z-50">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-orange-500">🚀 Product Analyzer</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
