import React, { useEffect, useRef } from "react";
import { Textarea } from "@chakra-ui/react";

const AutoResizeTextarea = (props) => {
  const textareaRef = useRef(null);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResizeTextarea();
  }, []);

  return (
    <Textarea
      ref={textareaRef}
      onInput={autoResizeTextarea}
      overflow="hidden"
      resize="none"
      {...props}
    />
  );
};

export default AutoResizeTextarea;
