/* eslint-disable @next/next/no-img-element */

export default function Spotlight({
  children,
  style = "1",
  orient = "right",
  contentAlign = "left",
  imagePosition = "center",
  imageSrc,
  imageAlt = "",
  isFullscreen = true,
  showImage = true,
  animateIn = true,
  id,
}) {
  const animationClass = animateIn ? "onscroll-image-fade-in" : "";
  const fullscreenClass = isFullscreen ? "fullscreen" : "";

  return (
    <section
      id={id}
      className={`spotlight cvb-section style${style} orient-${orient} content-align-${contentAlign} image-position-${imagePosition} ${fullscreenClass} ${animationClass}`}
    >
      <div className="content cvb-card">{children}</div>
      {showImage && imageSrc && (
        <div className="image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </section>
  );
}
