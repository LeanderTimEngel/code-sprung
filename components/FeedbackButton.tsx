import React from 'react';

const FeedbackButton: React.FC = () => {
  return (
    <button
      data-tally-open="n01v6Z"
      data-tally-width="390"
      data-tally-overlay="1"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      className="fixed bottom-4 right-4 p-4 bg-[#0070f3] text-white rounded-full shadow-lg cursor-pointer z-50 flex items-center justify-center"
      aria-label="Feedback geben"
    >
      👋 Feedback
    </button>
  );
};

export default FeedbackButton;
