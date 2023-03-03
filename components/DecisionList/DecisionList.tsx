import * as React from 'react';
import { IDecision } from '../../interfaces/Decision.interface';
import { Decision } from '../Decision/Decision';

export function DecisionList({
  decisions,
  onDecisionClicked,
}: {
  decisions?: IDecision[];
  onDecisionClicked: any;
}) {
  const decisionList = decisions?.map((decision, index) => (
    <Decision
      key={index}
      decision={decision}
      onClick={() => onDecisionClicked(decision, index)}
    />
  ));

  return <ul className="">{decisionList}</ul>;
}
