function SkillGroup({ category, index }) {
  const skillCount = category.active.length + category.learning.length;

  return (
    <article className="skill-group reveal" style={{ '--reveal-delay': `${index * 45}ms` }}>
      <div className="skill-heading">
        <span className="skill-mark">{category.title.slice(0, 2)}</span>
        <span>{skillCount} tools</span>
      </div>
      <h3>{category.title}</h3>
      <div className="skill-list-group">
        <span className="skill-list-label">Active use</span>
        <ul>
          {category.active.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      {category.learning.length > 0 ? (
        <div className="skill-list-group is-learning">
          <span className="skill-list-label">Currently learning</span>
          <ul>
            {category.learning.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

export default SkillGroup;
