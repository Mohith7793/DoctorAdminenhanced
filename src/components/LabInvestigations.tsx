import React from 'react';

function LabInvestigations() {
  const investigations = {
    'Blood Tests': [
      'RBC Count',
      'Hb %',
      'Total W.B.C. Count',
      'Differential Count',
      'E.S.R.',
      'Bleeding Time',
      'Clotting Time',
      'Platelet Count',
      'Prothrombin time',
      'Partial Thromboplastin time',
      'Blood Group & Rh type'
    ],
    'Biochemical Tests': [
      'Blood Sugar',
      'Liver function tests',
      'Serum alkaline phosphatase',
      'Serum acid phosphatase',
      'Serum bilirubin'
    ],
    'Urine Analysis': [
      'Sugar',
      'Albumin',
      'Bile Salts',
      'Bile pigments',
      'Ketone bodies',
      'Pus cells',
      'Microorganisms',
      'Oxalate crystals',
      'Pregnancy test'
    ],
    'Radiological Investigations': [
      'Conventional Radiographs',
      'Intra Oral',
      'Extra Oral',
      'Panoramic Radiograph/Cephalogram',
      'Special',
      'Ultrasound',
      'CT Scan',
      'MRI'
    ]
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Laboratory Investigations</h2>

      {Object.entries(investigations).map(([category, tests]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tests.map((test, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">{test}</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter result"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LabInvestigations;