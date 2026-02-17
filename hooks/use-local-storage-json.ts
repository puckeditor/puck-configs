"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to manage JSON data in localStorage with React state synchronization.
 * @param key The key under which the data is stored in localStorage.
 * @param initialValue The initial value to use if no data is found in localStorage.
 * @returns A tuple containing the current data and a setter function to update the data in state and local storage.
 */
export const useLocalStorageJson = <T>(key: string, initialValue: T) => {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    const savedData = localStorage.getItem(key);

    // If no saved data and initialValue is provided, initialize with initialValue
    if (!savedData && initialValue) {
      setData(initialValue);
      localStorage.setItem(key, JSON.stringify(initialValue));
      return;
    }

    if (!savedData) return;

    // If saved data exists, parse and set it
    try {
      setData(JSON.parse(savedData));
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
    }
  }, [key]);

  const setDataAndStore = (newData: T) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  return [data, setDataAndStore] as const;
};
