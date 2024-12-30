import { useEffect, useState } from "react";
const TypingEffect = ({ text, speed = 150 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
        }, speed);
        if (index === text.length) clearInterval(intervalId);
        return () => clearInterval(intervalId);
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};
export default TypingEffect;
