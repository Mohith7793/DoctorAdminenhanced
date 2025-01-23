import React from 'react';

function ChiefComplaint() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Chief Complaint</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-700">
          Patient complains of decay teeth in upper back region, tenderness, and
          swelling of gum and bleeding from gum in lower front segment of jaw
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          History of Present Illness
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            Patient gives history of decay with pain and food lodgment
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Past Medical History
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">Not significant history</p>
        </div>
      </div>
    </div>
  );
}

export default ChiefComplaint;