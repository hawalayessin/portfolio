import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsImages, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useTranslation } from "../../i18n";
import "./ProjectGallery.css";

function ProjectGallery({ images, title }) {
  const { t, lang } = useTranslation();
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const caption = images[active].caption[lang];
  const titleId = `gallery-${title.replace(/\s+/g, "-")}`;
  const move = (direction) => setActive((index) => (index + direction + images.length) % images.length);

  return (
    <>
      <Button variant="primary" onClick={() => { setActive(0); setShow(true); }}>
        <BsImages aria-hidden="true" /> &nbsp;{t("projects_screenshots")}
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        scrollable
        size="xl"
        className="project-gallery"
        aria-labelledby={titleId}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <Modal.Header closeButton closeVariant="white" closeLabel={t("projects_close")}>
          <Modal.Title id={titleId}>{title} — {t("projects_gallery")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {show && (
            <>
              <figure className="project-gallery-figure">
                <img className="project-gallery-image" src={images[active].src} alt={`${title} — ${caption}`} />
                <figcaption aria-live="polite">{active + 1} / {images.length} — {caption}</figcaption>
              </figure>
              <div className="project-gallery-thumbnails" role="group" aria-label={t("projects_gallery")}>
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className="project-gallery-thumbnail"
                    aria-label={`${index + 1} — ${image.caption[lang]}`}
                    aria-pressed={active === index}
                    onClick={() => setActive(index)}
                  >
                    <img src={image.src} alt="" loading="lazy" />
                    <span>{index + 1}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="project-gallery-navigation">
            <Button variant="primary" onClick={() => move(-1)}>
              <BsChevronLeft aria-hidden="true" /> {t("projects_previous")}
            </Button>
            <Button variant="primary" onClick={() => move(1)}>
              {t("projects_next")} <BsChevronRight aria-hidden="true" />
            </Button>
          </div>
          <Button variant="secondary" onClick={() => setShow(false)}>{t("projects_close")}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectGallery;
