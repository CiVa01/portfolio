/* eslint-disable @next/next/no-img-element */

export default function Banner({
  children,
  style = "3",
  orient = "left",
  contentAlign = "left",
  imagePosition = "center",
  imageSrc,
  imageAlt = "",
  isFullscreen = true,
  showImage = true,
  animateIn = true,
}) {
  const animationClass = animateIn
    ? "onload-image-fade-in onload-content-fade-right"
    : "";
  const fullscreenClass = isFullscreen ? "fullscreen" : "";

  return (
    <section
      className={`banner cvb-section style${style} orient-${orient} content-align-${contentAlign} image-position-${imagePosition} ${fullscreenClass} ${animationClass}`}
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
