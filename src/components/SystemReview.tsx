import React from 'react';

function SystemReview() {
  const systems = {
    'Cardiovascular System': [
      'Did you ever get a heart attack?',
      'Do you ever have breathlessness on mild exertion?',
      'Do you have chest pain on exertion/emotional outburst?',
      'Do you get spontaneous dizziness, palpitations with profuse sweating?',
      'Do your ankles swell?',
      'Did you have any operation of Chest, Heart Valves in childhood?',
      'Did you ever get a Stroke Paralysis?'
    ],
    'Respiratory System': [
      'Did you have problems of wheezing/asthma?',
      'Did you suffer from T.B.?',
      'Do you have breathing problems?',
      'Did you get swelling of ankles or legs?',
      'Do you get Cough with/without Sputum?'
    ],
    'GIT & Hepatobiliary System': [
      'Do you have heart burn/acidity/ulcers?',
      'Have you suffered from Jaundice/Hepatitis/Cirrhosis?',
      'Do you get Bouts of nausea, loss of appetite?',
      'Do you have piles?',
      'Do you have persistent loose motions?',
      'Do you have Typhoid/Cholera?'
    ]
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Review of Systems</h2>
      
      {Object.entries(systems).map(([system, questions]) => (
        <div key={system} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">{system}</h3>
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start space-x-4">
                  <span className="font-medium text-gray-900">{index + 1}.</span>
                  <div className="flex-1">
                    <p className="text-gray-700">{question}</p>
                    <div className="mt-2 flex space-x-4">
                      <label className="inline-flex items-center">
                        <input type="radio" name={`${system}-${index}`} className="form-radio text-blue-600" />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name={`${system}-${index}`} className="form-radio text-blue-600" />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SystemReview;