import "./styles.css";

export const Card = ({ title, subtitle, link, tags, cta }) => {
  const inner = (
    <>
      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {tags?.length > 0 && (
          <ul className="project-card__tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
      {cta && <span className="project-card__cta">{cta}</span>}
    </>
  );

  if (link) {
    return (
      <a
        className="project-card"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return <article className="project-card project-card--static">{inner}</article>;
};
