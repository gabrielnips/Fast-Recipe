import React from "react";

interface Step {
  step: string;
}

interface InstructionsProps {
  instructions: Step[];
}

const Instructions: React.FC<InstructionsProps> = ({ instructions }) => {
  return (
    <div className="instructions">
      <div className="bg-lime-50 shadow-xl flex gap-5 flex-col border border-solid py-8 px-8 border-lime-200 rounded-xl">
        <a className="text-lime-700 text-start text-xl font-normal">
          Instructions:
        </a>
        <ul className=" list-decimal text-lime-700 py-3 px-3">
          {instructions.map((step, index) => (
            <li className="transition hover:scale-95" key={index}>
              {step.step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
