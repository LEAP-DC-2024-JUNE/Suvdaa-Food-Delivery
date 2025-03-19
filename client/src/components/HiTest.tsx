"use client";
import { useEffect } from "react";

export default function Hi() {
  useEffect(() => {
    fetch("http://localhost:3000/api/data").then((res) => res.json());
  }, []);

  return <h1>Hi</h1>;
}
