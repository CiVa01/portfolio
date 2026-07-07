export default function ContactSection({ contacts = [] }) {
  return (
    <div className="items style1 medium onscroll-fade-in">
      {contacts.map((contact, index) => (
        <section key={index}>
          <span className={`icon ${contact.iconClass}`}></span>
          <h3>{contact.title}</h3>
          {contact.content && (
            <div dangerouslySetInnerHTML={{ __html: contact.content }} />
          )}
          {contact.link && (
            <ul className="actions stacked">
              <li>
                <a
                  href={contact.link.url}
                  target={contact.link.target}
                  className="button style1"
                >
                  {contact.link.label}
                </a>
              </li>
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
