const FAQ = () => {
    const questions = [
      "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?",
      "What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?",
      "What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?",
      "Where is Juneau Vacation Home: Stunning View + Beach Access located?"
    ];
  
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
        <div className="space-y-2">
          {questions.map((question, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-900">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>{question}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default FAQ;