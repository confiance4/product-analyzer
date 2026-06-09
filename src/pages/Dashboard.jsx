import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import IdeaFinder from '../components/IdeaFinder';
import Header from '../components/Header';

export default function Dashboard({ user }) {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: '🏠 Home', icon: '🏠' },
    { id: 'finder', label: '💡 Idea Finder', icon: '💡' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Header user={user} />

      <div className="flex h-screen pt-20">
        <div className="w-64 bg-slate-950 border-r border-slate-700 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {activeTab === 'home' && (
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-white">Welcome to Product Analyzer</h1>
                <p className="text-gray-300 text-lg">Find your next winning product idea</p>
              </div>
            )}

            {activeTab === 'finder' && <IdeaFinder user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}
