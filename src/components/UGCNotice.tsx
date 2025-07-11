import { X } from "lucide-react";

const UGCNotice = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <strong>Important Notice:</strong> Precautions to be taken by the students before enrolling in programmes offered under Open & Distance Learning (ODL) and/or Online Learning mode -{" "}
                <a 
                  href="https://api.vignanonline.com/media/UGC_20240319152222_1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium underline text-yellow-800 hover:text-yellow-600"
                >
                  View UGC Guidelines
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGCNotice;