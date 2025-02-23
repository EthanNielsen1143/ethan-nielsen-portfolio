import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  [key: string]: any;
}

const TypewriterText = ({
  text,
  speed = 25,
  ...props
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeCharacter = () => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
        setTimeout(typeCharacter, speed);
      }
    };

    typeCharacter();

    return () => {
      index = text.length + 1;
    };
  }, [text, speed]);

  return (
    <Text
      {...props}
      whiteSpace="normal"
      wordBreak="break-word"
      fontFamily="inherit"
      position="relative"
    >
      {displayedText}

      <span style={{ visibility: "hidden" }}>
        {text.slice(displayedText.length)}
      </span>
    </Text>
  );
};

export default TypewriterText;
