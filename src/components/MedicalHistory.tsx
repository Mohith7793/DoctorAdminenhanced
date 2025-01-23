import React from 'react';

function MedicalHistory() {
  const questions = [
    'Are you seeing a family doctor for any illness now?',
    'Were you hospitalized during last five years for any major illness?',
    'Are you taking medications for any health problem?',
    'Are you allergic to any drugs, medicines, foods?'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Past Medical Health Questionnaire</h2>
      
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
            <span className="font-medium text-gray-900">{index + 1}.</span>
            <div className="flex-1">
              <p className="text-gray-700">{question}</p>
              <div className="mt-2 flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name={`question-${index}`} className="form-radio text-blue-600" />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name={`question-${index}`} className="form-radio text-blue-600" />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicalHistory;