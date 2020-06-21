"use strict";

const generateRandomArrayElements = () => {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 30));
};

const sampleArrays = {
  a1: generateRandomArrayElements(),
  a2: generateRandomArrayElements(),
  a3: [9, 2, 6, 5],
};

module.exports = sampleArrays;
