import asyncHandler from "express-async-handler";
import getVideos from "../models/videos.js";

// Utility Functions

/**
 * validates that a filter field is a key in the videos object.
 * NOTE : we are assuming that the array videos consists of similar objects
 * @param {string} field 
 * @param {Object} obj 
 * @returns void
 */
const validateField = (field, obj) => { 
  if (field in obj) return;
  throw new Error(`${field} is not a key in object`);
};

/**
 * validate that the field string can be converted to number
 * @param {string} fieldString 
 * @returns void
 */
const validateNumber = (fieldString) => {
  if(Number(fieldString) !== NaN) return
  throw new Error(`${fieldString} is not a number!`)
}

// Controllers
const filterByStrictEqual = asyncHandler(async (req, res) => {
  const videos = await getVideos();
  const { field, fieldString } = req.params; // unpacking
  validateField(field, videos[0]);
  const filteredVideos = videos.filter((video) => video[field] === fieldString);

  res.json(filteredVideos);
});

const filterByPartialMatch = asyncHandler(async (req, res) => {
  const videos = await getVideos();
  const { field, fieldString } = req.params; // unpacking
  validateField(field, videos[0]);
  const filteredVideos = videos.filter((video) =>
    video[field].includes(fieldString)
  );

  res.json(filteredVideos);
});
const filterByRange = asyncHandler(async (req, res) => {
  const videos = await getVideos();
  const { field, minRange, maxRange } = req.params; // unpacking
  validateField(field, videos[0]);
  validateNumber(minRange)
  validateNumber(maxRange) // We can refactor this
  const filteredVideos = videos.filter(
    (video) => Number(video.field) > minRange && Number(video.field) < maxRange
  );

  res.json(filteredVideos);
});

export { filterByStrictEqual, filterByPartialMatch, filterByRange };
