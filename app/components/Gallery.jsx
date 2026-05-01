/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Gallery({ items = [] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <>
      <div className="gallery style2 medium lightbox onscroll-fade-in">
        {items.map((item, index) => (
          <article key={index}>
            <a
              href={item.fullImage}
              className="image"
              onClick={(e) => {
                e.preventDefault();
                openLightbox(index);
              }}
            >
              <img
                src={item.thumbnail || item.fullImage}
                alt={item.title || `Gallery item ${index + 1}`}
              />
            </a>
            <div className="caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="actions fixed">
                <li>
                  <span className="button small">Details</span>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>

      {lightboxOpen && items[currentImageIndex] && (
        <div className="modal visible" onClick={closeLightbox}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeLightbox}>
              ×
            </span>
            <button className="modal-nav modal-prev" onClick={goToPrevious}>
              ←
            </button>
            <img
              src={items[currentImageIndex].fullImage}
              alt={items[currentImageIndex].title}
            />
            <button className="modal-nav modal-next" onClick={goToNext}>
              →
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.9);
        }

        .modal.visible {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 40px;
          font-weight: bold;
          color: #f1f1f1;
          cursor: pointer;
          z-index: 1001;
        }

        .modal-close:hover,
        .modal-close:focus {
          color: #bbb;
        }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          font-size: 24px;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 3px;
          z-index: 1001;
        }

        .modal-nav:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .modal-prev {
          left: 20px;
        }

        .modal-next {
          right: 20px;
        }
      `}</style>
    </>
  );
}
