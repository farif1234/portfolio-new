"use client";
import React, { useState } from "react";

function ImageOverlay({ imageURL }) {
    const [overlayVisible, setOverlayVisible] = useState(false);

    const showOverlay = () => {
        setOverlayVisible(true);
    };

    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    return (
        <div id="image" className="relative">
            <img
                src={imageURL}
                width={250}
                height={150}
                className="duration-100 cursor-zoom-in rounded-lg"
                onClick={showOverlay}
            />
            {overlayVisible && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-30"
                    onClick={hideOverlay}
                >
                    <img
                        src={imageURL}
                        alt="Enlarged Image"
                        className="max-h-full max-w-full cursor-zoom-out"
                    />
                </div>
            )}
        </div>
    );
}

export default ImageOverlay;
