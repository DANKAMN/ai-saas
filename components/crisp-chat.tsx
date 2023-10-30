"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9aef2476-e486-40c9-8984-bf4f9b30234c");
  }, []);

  return null;
};