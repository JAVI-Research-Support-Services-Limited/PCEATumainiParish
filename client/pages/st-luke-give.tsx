import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GoalData } from '@/types/transparency';

const GOALS: GoalData[] = [
  {
    id: '1',
    title: 'Mission & Ministry Fund',
    current: 45600,
    goal: 65000,
    status: 'On Track',
    icon: 'account_balance'
  },
  {
    id: '2',
    title: 'Building Development',
    current: 125000,
    goal: 300000,
    status: 'In Progress',
    icon: 'construction'
  },
  {
    id: '3',
    title: 'Community Outreach',
    current: 18200,
    goal: 25000,
    status: 'Active',
    icon: 'volunteer_activism'
  }
];

export default function StLukeGive() {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    givingType: 'Tithe',
    amount: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setFormData({ ...formData, amount: '', phone: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-end">
            <Button asChild className="font-sans ml-auto">
              <Link to="/st-luke">Back to Church</Link>
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Intro Section */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-sans font-bold border border-gray-200">
            <span className="material-icons text-sm">analytics</span>
            2024 ST LUKE CHURCH TRANSPARENCY
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 tracking-tight">
            Building Community in Faith
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg font-sans leading-relaxed">
            Discover how our St Luke community is actively engaging and contributing towards our shared mission and development goals this year.
          </p>
        </section>

        {/* Goal Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOALS.map(goal => {
            const percentage = Math.round((goal.current / goal.goal) * 100);
            const remaining = goal.goal - goal.current;

            return (
              <div key={goal.id} className="bg-white p-7 rounded-xl shadow-sm border border-gray-200 relative group hover:shadow-md transition-all">
                <span className="absolute top-6 right-6 px-2 py-1 bg-gray-50 text-gray-700 text-[10px] font-sans font-bold tracking-wider rounded border border-gray-100 uppercase">
                  {goal.status}
                </span>

                <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-700 flex items-center justify-center mb-5 border border-gray-100">
                  <span className="material-icons text-xl">{goal.icon}</span>
                </div>

                <h3 className="font-sans font-bold text-gray-900 text-base mb-2">{goal.title}</h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-sans font-extrabold text-gray-900">KES {goal.current.toLocaleString()}</span>
                  <span className="text-sm font-sans font-semibold text-gray-500">of {Math.round(goal.goal/1000)}k goal</span>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex justify-between text-[11px] font-sans font-bold text-gray-500 pt-1 uppercase tracking-wide">
                  <span>{percentage}% Funded</span>
                  <span>KES {remaining.toLocaleString()} Remaining</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Main Dashboard Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Stats Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-display text-gray-900">St Luke Church Performance</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                    <span className="material-icons text-gray-700">group</span>
                  </div>
                  <span className="text-sm font-sans font-bold text-gray-600 uppercase tracking-wider">Contributors</span>
                </div>
                <div className="text-3xl font-sans font-extrabold text-gray-900 mb-1">450</div>
                <div className="text-xs font-sans font-semibold text-green-600">12% vs last month</div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                    <span className="material-icons text-gray-700">calendar_today</span>
                  </div>
                  <span className="text-sm font-sans font-bold text-gray-600 uppercase tracking-wider">Last Sunday</span>
                </div>
                <div className="text-3xl font-sans font-extrabold text-gray-900 mb-1">KES 85,200</div>
                <div className="text-xs font-sans font-semibold text-gray-500">Tithe & Offering</div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                    <span className="material-icons text-gray-700">trending_up</span>
                  </div>
                  <span className="text-sm font-sans font-bold text-gray-600 uppercase tracking-wider">Weekly Avg</span>
                </div>
                <div className="text-3xl font-sans font-extrabold text-gray-900 mb-1">KES 78,500</div>
                <div className="text-xs font-sans font-semibold text-gray-500">This Quarter</div>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-6">
              <h3 className="text-xl font-display text-gray-900 mb-6">Make a Contribution</h3>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <span className="material-icons text-xl">check_circle</span>
                    <span className="font-sans font-bold text-sm">Donation Successful!</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-sans font-bold text-gray-900 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-bold text-gray-900 mb-2">District Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Bethany"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.district}
                    onChange={(e) => updateField('district', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-bold text-gray-900 mb-2">Giving Type</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-sm font-bold focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.givingType}
                    onChange={(e) => updateField('givingType', e.target.value)}
                  >
                    <option>Tithe</option>
                    <option>Offering</option>
                    <option>Thanksgiving</option>
                    <option>Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-sans font-bold text-gray-900 mb-2">Amount (KES)</label>
                  <input
                    required
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-sm font-bold focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.amount}
                    onChange={(e) => updateField('amount', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-bold text-gray-900 mb-2">M-Pesa Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+254..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-sm font-bold focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                  <p className="mt-2 text-xs text-gray-500 font-sans italic">
                    A secure STK push will be triggered to your phone.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-lg font-sans font-bold text-base shadow-lg transition-all ${
                    isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-icons">favorite</span>
                      <span>Give Now</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-sans font-bold uppercase tracking-widest pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="material-icons text-sm">lock</span>
                    <span>Secure</span>
                  </div>
                  <span>|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-icons text-sm">receipt</span>
                    <span>Receipt</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Scripture Quote */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-12 rounded-2xl border border-primary/20 text-center">
          <span className="material-icons text-5xl text-primary/30 mb-6 block">format_quote</span>
          <blockquote className="text-2xl md:text-3xl font-display text-gray-900 leading-relaxed mb-6 italic">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </blockquote>
          <cite className="text-base font-sans font-bold text-gray-600 uppercase tracking-wider">2 Corinthians 9:7</cite>
        </section>
      </main>
    </div>
  );
}
