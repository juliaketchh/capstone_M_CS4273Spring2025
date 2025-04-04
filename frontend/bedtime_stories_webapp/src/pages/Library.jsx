import React, { useState, useEffect } from "react";
import { getUserStories } from "../api/StoryApi";
import AllStories from "./components/allStories";
import CustomCarousel from "../components/Carousel";

export default function Library() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchStories = async () => {
  //     try {
  //       const data = await getUserStories(1);
  //       setStories(data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //     }
  //   };

  //   fetchStories();
  // }, []);

  useEffect(() => {
    const mockStories = [
      { id: 1, title: "The Brave Knight", exposition: "Once upon a time, a knight set off on a great adventure." },
      { id: 2, title: "The Lost Treasure", exposition: "Deep in the jungle, a hidden treasure awaited discovery." },
      { id: 3, title: "Galactic Voyager", exposition: "In the year 3021, humanity made first contact with aliens." }
    ];

    setStories(mockStories);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const carouselItems = stories.map((story) => (
    <div key={story.id}>
      <h3>{story.title}</h3>
      <p>{story.exposition}</p>
    </div>
  ));

  return (
    <div>
      <h1>Library</h1>
      <CustomCarousel items={carouselItems} />
      <AllStories stories={stories} />
    </div>
  );
}