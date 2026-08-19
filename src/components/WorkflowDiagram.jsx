function WorkflowDiagram({ steps = [], variant }) {
  return (
    <div className={`workflow-diagram workflow-${variant}`} aria-label="Workflow diagram">
      {steps.map((step, index) => (
        <div className="workflow-step" key={step}>
          <span className="workflow-node">{String(index + 1).padStart(2, '0')}</span>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}

export default WorkflowDiagram;
