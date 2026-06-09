import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            🚀 Product Analyzer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Trouvez votre prochain produit digital gagnant
          </p>
          <button
            onClick={() => navigate('/auth')}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            Commencer Gratuitement
          </button>

          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-orange-500">1000+</p>
              <p className="text-gray-400">Utilisateurs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">50M+</p>
              <p className="text-gray-400">Data Points</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">98%</p>
              <p className="text-gray-400">Accurate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
