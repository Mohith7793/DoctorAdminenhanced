import React from 'react';

function TreatmentPlan() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Treatment Plan</h2>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Immediate Treatment</h3>
          <textarea
            className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter immediate treatment details (drugs prescribed/emergency procedures)"
          ></textarea>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Surgical Treatment</h3>
          <textarea
            className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter surgical treatment details"
          ></textarea>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Treatment</h3>
          <textarea
            className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter medical treatment details"
          ></textarea>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Radiation Treatment</h3>
          <textarea
            className="w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter radiation treatment details (if required)"
          ></textarea>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Final Diagnosis</h3>
          <div className="p-4 bg-white rounded border border-gray-200">
            <p className="text-gray-900">Radicular cyst in Lower anterior mandible irt 31,32, 41, 42</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Response and Follow-up</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((visit) => (
                <div key={visit} className="p-4 bg-white rounded border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Visit {visit}</h4>
                  <textarea
                    className="w-full h-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter follow-up notes"
                  ></textarea>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentPlan;