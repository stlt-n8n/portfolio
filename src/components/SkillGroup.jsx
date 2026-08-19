function SkillGroup({ category }) {
  return (
    <article className="skill-group reveal">
      <div className="skill-heading">
        <span className="skill-mark">{category.title.slice(0, 2)}</span>
        <span>{category.skills.length} focus areas</span>
      </div>
      <h3>{category.title}</h3>
      <ul>
        {category.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillGroup;
