"use client";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { database } from "./database";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { useEffect } from "react";

export default function Page() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  useEffect(() => {
    // Ensure the DOM element exists
    const container = document.querySelector(".masonry-gallery-demo");
    if (container) {
      // Initialize Masonry
      const msnry = new Masonry(container, {
        itemSelector: ".gallery-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });

      // Use imagesLoaded with Masonry
      imagesLoaded(container).on("progress", function () {
        // Layout Masonry after each image loads
        msnry.layout();
      });
    }
  }, []);
  return (
    <div className="App">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgHash]}
        elementClassNames={"masonry-gallery-demo"}
      >
        <div className="grid-sizer"></div>

        {database.brass_tax.pieces.map((piece) => {
          return (
            <a
              data-lg-size="1600-1067"
              className="gallery-item"
              href={piece.imageURL}
              key={piece.title}
              data-src={`${piece.imageURL}`}
            >
              <img
                className="img-responsive"
                alt="title"
                src={`${piece.imageURL}`}
              />
            </a>
            // <a href="https://upload.wikimedia.org/wikipedia/commons/9/91/Ricki_Ruiz.png">
            //   <img alt="title" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Ricki_Ruiz.png" />
            // </a>
          );
        })}
      </LightGallery>
    </div>
  );
}
