export default function SkillsGrid({ skills = [] }) {
  return (
    <div className="items style1 medium onscroll-fade-in">
      {skills.map((skill, index) => (
        <section key={index}>
          <span className={`icon ${skill.iconClass}`}></span>
          <h3>{skill.title}</h3>
          {skill.description && <p>{skill.description}</p>}
          {skill.items && skill.items.length > 0 && (
            <ul>
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
