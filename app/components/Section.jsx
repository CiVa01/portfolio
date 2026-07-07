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
      className={`wrapper cvb-section style${style} align-${align} ${animationClass} ${className}`}
    >
      <div className="inner cvb-card">{children}</div>
    </section>
  );
}
