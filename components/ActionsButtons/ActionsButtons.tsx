import * as React from 'react';

export function ActionsButtons({
  showActions,
  goToPrevious,
  startOver,
}: {
  showActions: boolean;
  goToPrevious: () => void;
  startOver: () => void;
}) {
  if (!showActions) {
    return null;
  }

  return (
    <div className="my-5">
      <button
        className="px-3 border rounded-md cursor-pointer uppercase hover:bg-neutral-100"
        onClick={goToPrevious}
      >
        <span className="material-symbols-outlined text-xl align-middle mr-1">
          arrow_back
        </span>
        Back
      </button>
      <button
        className="px-3 ml-5 text-red-500 border rounded-md cursor-pointer uppercase hover:bg-neutral-100"
        onClick={startOver}
      >
        <span className="material-symbols-outlined text-xl align-middle mr-1">
          refresh
        </span>
        Start over
      </button>
    </div>
  );
}
