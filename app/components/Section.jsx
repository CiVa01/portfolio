export default function Section({
  children,
  className = "",
  style = "1",
  align = "center",
  animateIn = true,
  id,
}) {
  const animationClass = animateIn ? "onscroll-fade-in" : "";

  return (
    <section
      id={id}
      className={`wrapper style${style} align-${align} ${animationClass} ${className}`}
    >
      <div className="inner">{children}</div>
    </section>
  );
}
