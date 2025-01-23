import React, { useState } from 'react';

function PersonalHistory() {
  const [basicInfo, setBasicInfo] = useState({
    diet: '',
    appetite: '',
    bowelBladder: '',
    sleep: ''
  });

  const [adverseHabits, setAdverseHabits] = useState({
    smoking: false,
    pan: false,
    arecaNut: false,
    tobacco: false,
    alcohol: false
  });

  const [oralHygiene, setOralHygiene] = useState('');

  const handleBasicInfoChange = (field: keyof typeof basicInfo, value: string) => {
    setBasicInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleHabitToggle = (habit: keyof typeof adverseHabits) => {
    setAdverseHabits(prev => ({ ...prev, [habit]: !prev[habit] }));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Personal History</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            
            <div className="space-y-4">
              {Object.entries({
                diet: 'Diet',
                appetite: 'Appetite',
                bowelBladder: 'Bowel/Bladder',
                sleep: 'Sleep'
              }).map(([key, label]) => (
                <div key={key} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <textarea
                    value={basicInfo[key as keyof typeof basicInfo]}
                    onChange={(e) => handleBasicInfoChange(key as keyof typeof basicInfo, e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                    rows={2}
                    placeholder={`Enter ${label.toLowerCase()} details`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Oral Hygiene Habits</h3>
            <textarea
              value={oralHygiene}
              onChange={(e) => setOralHygiene(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
              rows={4}
              placeholder="Enter oral hygiene habits details"
            />
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Adverse Habits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(adverseHabits).map(([habit, value]) => (
                <div key={habit} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700">
                    {habit.charAt(0).toUpperCase() + habit.slice(1)}
                  </span>
                  <button
                    onClick={() => handleHabitToggle(habit as keyof typeof adverseHabits)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      value ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        value ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalHistory;