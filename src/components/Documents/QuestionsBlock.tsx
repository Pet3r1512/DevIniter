import MacOSNavBar from "./Terminal";

type Question = {
  question: string;
  description?: string;
  options?: string[];
};

type QuestionBlockProps = {
  questions: Question[];
};

export default function QuestionBlock({ questions }: QuestionBlockProps) {
  return (
    <div className="w-full mt-6 dark:bg-black bg-white rounded-2xl">
      <MacOSNavBar />
      <div className="dark:bg-[#131412] bg-gray-light h-4/5 px-5 py-4 flex flex-col gap-y-2.5 rounded-b-2xl">
        {questions.map((q, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h4 className="font-semibold">{q.question}</h4>
            {q.description && <p className="text-sm mt-1">{q.description}</p>}
            {q.options && (
              <ul className="mt-2 ml-4">
                {q.options.map((opt, idx) => (
                  <li key={idx} className="text-sm">
                    - {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
