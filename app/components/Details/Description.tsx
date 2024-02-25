import * as React from "react";
import styles from "@/app/styles/layout.module.css";

interface Props {
  text: string;
}

export const Description = ({ text }: Props) => (
  <div>
    {text}
  </div>
);