"use client";

import TextScramble from "@twistezo/react-text-scramble";
import React, { useEffect, useState } from "react";

const textDescriptions = [
    "Writer of Code",
    "Squasher (and Creator) of Bugs",
    "Lifter of Weights",
    "Loser of Chess Games",
    "Enjoyer of Nature",
    "Collector of Unread Books",
    "Encyclopedia of Spongebob references",
    "Champion of Afternoon naps",
    "Aspiring Polymath",
];

const ScrambleText = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? (
        <div className="w-fit">
            <TextScramble
                texts={textDescriptions}
                letterSpeed={1}
                nextLetterSpeed={50}
                className=""
            />
        </div>
    ) : (
        textDescriptions[0]
    );
};

export default ScrambleText;
