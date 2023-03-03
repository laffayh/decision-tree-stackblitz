import * as React from 'react';
import { ActionsButtons } from './components/ActionsButtons/ActionsButtons';
import { DecisionList } from './components/DecisionList/DecisionList';
import { decisionTree } from './constants/decision-tree.cont';
import { IDecision } from './interfaces/Decision.interface';

let indexes: number[] = [];

export default function App() {
  const [currentDecisions, setCurrentDecisions] = React.useState(
    decisionTree.children
  );
  const [title, setTitle] = React.useState(decisionTree.title);

  function getDecisionsAndTitle(indexes: number[]): any {
    return indexes.reduce(
      (agg: { title?: string; decisions?: IDecision[] }, index: number) => ({
        title: `${agg.title} | ${agg.decisions?.[index].title}`,
        decisions: agg.decisions?.[index].children,
      }),
      {
        title: decisionTree.title,
        decisions: decisionTree.children,
      }
    );
  }

  function goToNext(decision: IDecision, index: number) {
    if (decision.children === undefined) {
      return;
    }

    indexes = [...indexes, index];
    const { decisions, title } = getDecisionsAndTitle(indexes);
    setCurrentDecisions(decisions);
    setTitle(title);
  }

  function goToPrevious() {
    if (indexes.length === 0) {
      return;
    }

    indexes.pop();
    const { decisions, title } = getDecisionsAndTitle(indexes);
    setCurrentDecisions(decisions);
    setTitle(title);
  }

  function startOver() {
    indexes = [];
    setCurrentDecisions(decisionTree.children);
    setTitle(decisionTree.title);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-xl my-5">{title}</h1>
      <ActionsButtons
        showActions={indexes.length > 0}
        startOver={startOver}
        goToPrevious={goToPrevious}
      />
      <DecisionList
        decisions={currentDecisions}
        onDecisionClicked={(decision: any, index: number) =>
          goToNext(decision, index)
        }
      />
    </div>
  );
}
