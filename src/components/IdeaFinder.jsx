import React, { useState } from 'react';

export default function IdeaFinder({ user }) {
  const [niche, setNiche] = useState('marketing');
  const [language, setLanguage] = useState('fr');
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const findIdeas = async () => {
    setLoading(true);
    
    const testIdeas = [
      {
        id: 1,
        trend_name: `${niche} Templates`,
        volume: 485,
        sentiment: 'positive',
        budget_range: '29-49',
      },
      {
        id: 2,
        trend_name: `How to Start with ${niche}`,
        volume: 287,
        sentiment: 'positive',
        budget_range: '49-99',
      },
      {
        id: 3,
        trend_name: `${niche} for Beginners`,
        volume: 156,
        sentiment: 'mixed',
        budget_range: '19-39',
      },
    ];

    setIdeas(testIdeas);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">💡 Find Product Ideas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-300 mb-2">Niche</label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full bg-slate-700 text-white rounded p-2 border border-slate-600"
            >
              <option value="marketing">Marketing Digital</option>
              <option value="education">Formation en ligne</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-slate-700 text-white rounded p-2 border border-slate-600"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <button
          onClick={findIdeas}
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-all"
        >
          {loading ? 'Searching...' : '🔍 Find Ideas'}
        </button>
      </div>

      {ideas.length > 0 && (
        <div className="space-y-4">
          {ideas.map((idea, idx) => (
            <div key={idea.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white">{idx + 1}. {idea.trend_name}</h3>
              <p className="text-gray-400 text-sm">Volume: {idea.volume} mentions</p>
              <div className="mt-4 flex gap-4">
                <div>
                  <span className="text-gray-400 text-sm">Sentiment:</span>
                  <p className="text-white">{idea.sentiment === 'positive' ? '😊 Positive' : '😐 Mixed'}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Budget:</span>
                  <p className="text-white">{idea.budget_range}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
