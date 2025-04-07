import React, { useState, KeyboardEvent, FocusEvent } from "react";
import "./TagInput.css";

type TagInputProps = {
  value: string[];
  onChange: (tags: string[]) => void;
  separator?: string;
  maxTags?: number;
  placeholder?: string;
};

export const TagInput: React.FC<TagInputProps> = ({
  value,
  onChange,
  separator = "",
  maxTags,
  placeholder = "Add a tag",
}) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (
      trimmed &&
      (!maxTags || value.length < maxTags) &&
      !value.includes(trimmed)
    ) {
      onChange([...value, trimmed]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const separators = separator.split("");

    if (e.key === "Enter" || separators.includes(e.key)) {
      e.preventDefault();
      addTag(inputValue);
      setInputValue("");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (inputValue) {
      addTag(inputValue);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = value.filter((_, i) => i !== index);
    onChange(newTags);
  };

  return (
    <div className="tag-input-container">
      {value.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
          <button
            type="button"
            className="remove-button"
            onClick={() => removeTag(index)}
          >
            ×
          </button>
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="tag-input"
      />
    </div>
  );
};
