import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

interface TypewriterTextProps {
  text: string;
  fontWeight?: string;
  fontSize?: string;
  speed?: number;
  delay?: number;
  [key: string]: any;
}

const TypewriterText = ({
  text,
  fontWeight,
  fontSize,
  speed = 25,
  delay = 0,
  ...props
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    let index = 0;

    const startTyping = () => {
      setHasStarted(true);

      const typeCharacter = () => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
          setTimeout(typeCharacter, speed);
        }
      };

      typeCharacter();
    };

    const delayTimeout = setTimeout(startTyping, delay * 1000);

    return () => {
      clearTimeout(delayTimeout);
      index = text.length + 1;
    };
  }, [text, speed, delay]);

  return (
    <Text
      {...props}
      whiteSpace="normal"
      wordBreak="break-word"
      fontFamily="inherit"
      position="relative"
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {displayedText}

      {/* Ensure text doesn't shift layout */}
      <span style={{ visibility: "hidden" }}>
        {hasStarted ? text.slice(displayedText.length) : text}
      </span>
    </Text>
  );
};

export default TypewriterText;
