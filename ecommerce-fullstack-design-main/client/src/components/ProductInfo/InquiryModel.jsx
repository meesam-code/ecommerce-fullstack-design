import React from "react";

const InquiryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50  bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add to Cart</h2>
        <p>
          Your inquiry has been sent successfully. We will get back to you soon!
        </p>

        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
