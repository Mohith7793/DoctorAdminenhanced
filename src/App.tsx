import React, { useState } from 'react';
import { ClipboardList, Activity, Settings as Lungs, Thermometer, Brain, Heart, FileText, UserCircle } from 'lucide-react';
import ChiefComplaint from './components/ChiefComplaint';
import MedicalHistory from './components/MedicalHistory';
import SystemReview from './components/SystemReview';
import PersonalHistory from './components/PersonalHistory';
import LabInvestigations from './components/LabInvestigations';
import TreatmentPlan from './components/TreatmentPlan';

function App() {
  const [activeTab, setActiveTab] = useState('complaint');

  // Mock doctor data - in a real app, this would come from an API or context
  const doctor = {
    id: "DR123",
    name: "Dr. Sarah Johnson",
    department: "Dental Surgery",
    specialization: "Orthodontics"
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'complaint':
        return <ChiefComplaint />;
      case 'history':
        return <MedicalHistory />;
      case 'review':
        return <SystemReview />;
      case 'personal':
        return <PersonalHistory />;
      case 'lab':
        return <LabInvestigations />;
      case 'treatment':
        return <TreatmentPlan />;
      default:
        return <ChiefComplaint />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Activity className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">DoctorAdmin</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-right text-white">
                <p className="text-sm opacity-90">Welcome back,</p>
                <p className="font-semibold">{doctor.name}</p>
              </div>
              <UserCircle className="h-8 w-8 text-white ml-3" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="text-gray-600">Doctor ID:</div>
              <div className="font-semibold text-gray-900">{doctor.id}</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-gray-600">Department:</div>
              <div className="font-semibold text-gray-900">{doctor.department}</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-gray-600">Specialization:</div>
              <div className="font-semibold text-gray-900">{doctor.specialization}</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6 overflow-x-auto p-2">
          <button
            onClick={() => setActiveTab('complaint')}
            className={`px-4 py-2 flex items-center space-x-2 rounded-lg transition-all duration-200 ${
              activeTab === 'complaint'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
            }`}
          >
            <ClipboardList className="h-5 w-5" />
            <span>Chief Complaint</span>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 flex items-center space-x-2 rounded-lg transition-all duration-200 ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50'
            }`}
          >
            <FileText className="h-5 w-5" />
            <span>Medical History</span>
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`px-4 py-2 flex items-center space-x-2 rounded-lg transition-all duration-200 ${
              activeTab === 'review'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50'
            }`}
          >
            <Heart className="h-5 w-5" />
            <span>System Review</span>
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-4 py-2 flex items-center space-x-2 rounded-lg transition-all duration-200 ${
              activeTab === 'personal'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50'
            }`}
          >
            <Brain className="h-5 w-5" />
            <span>Personal History</span>
          </button>
          <button
            onClick={() => setActiveTab('lab')}
            className={`px-4 py-2 flex items-center space-x-2 rounded-lg transition-all duration-200 ${
              activeTab === 'lab'
                ? 'bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50'
            }`}
          >
            <Thermometer className="h-5 w-5" />
            <span>Lab Investigations</span>
          </button>
          <button
            onClick={() => setActiveTab('treatment')}
            className={`px-4 py-2 flex items-center space-x-2 rounded-lg transition-all duration-200 ${
              activeTab === 'treatment'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50'
            }`}
          >
            <Lungs className="h-5 w-5" />
            <span>Treatment Plan</span>
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 backdrop-blur-sm bg-white/80">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;