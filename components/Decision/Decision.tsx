import * as React from 'react';
import { IDecision } from '../../interfaces/Decision.interface';

export function Decision({
  decision,
  onClick,
}: {
  decision: IDecision;
  onClick: () => void;
}) {
  if (decision.finalDescription) {
    return (
      <li>
        <p>{decision.finalDescription}</p>
      </li>
    );
  }

  return (
    <li>
      <div
        onClick={onClick}
        className="inline-block border px-5 py-1 my-2
         rounded-full cursor-pointer bg-gray-200 hover:bg-slate-600 hover:text-slate-300"
      >
        <p>{decision.description}</p>
      </div>
    </li>
  );
}
