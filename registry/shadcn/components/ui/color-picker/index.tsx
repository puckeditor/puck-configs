"use client";

import { MouseEvent, useRef, useState, useId } from "react";
import { PaintBucket } from "lucide-react";
import { FieldLabel } from "@puckeditor/core";
import { isHexColor } from "@/registry/lib/is-hex-color";

import styles from "./color-field.module.css";

const closeColorPicker = (pickerRef: HTMLInputElement) => {
  pickerRef.setAttribute("type", "text");
  pickerRef.setAttribute("type", "color");
};

export interface ColorPickerProps {
  id?: string;
  name?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker = ({
  id,
  name,
  label,
  value,
  onChange,
}: ColorPickerProps) => {
  const pickerRef = useRef<HTMLInputElement>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const generatedId = useId();

  const handleColorClick = (e: MouseEvent<HTMLInputElement>) => {
    if (!pickerRef.current) return;
    e.preventDefault();

    if (pickerOpen) {
      closeColorPicker(pickerRef.current);
      setPickerOpen(false);
    } else {
      pickerRef.current.showPicker();
      setPickerOpen(true);
    }
  };

  const handleColorBlur = () => {
    if (!pickerRef.current) return;
    closeColorPicker(pickerRef.current);
    setPickerOpen(false);
  };

  const handleInputBlur = () => {
    if (!isHexColor(value)) {
      onChange("#000000");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <FieldLabel
      icon={<PaintBucket height="16px" width="16px" />}
      label={label}
      el="div"
    >
      <div className={styles["Color-Field-Container"]}>
        <input
          id={`${id || generatedId}-color-input`}
          ref={pickerRef}
          className={styles["Color-Input"]}
          type="color"
          value={value}
          name={`${name}-color`}
          onChange={handleChange}
          onClick={handleColorClick}
          onBlur={handleColorBlur}
        />
        <input
          id={`${id || generatedId}-text-input`}
          name={`${name}-text`}
          className={styles["Color-Text-Input"]}
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleInputBlur}
        />
      </div>
    </FieldLabel>
  );
};

export default ColorPicker;
