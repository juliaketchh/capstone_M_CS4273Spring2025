import React, { useState, useEffect } from "react";
import { getUserStories } from "../api/StoryApi";
import AllStories from "./components/AllStoriesMantine";
import CustomCarousel from "../components/Carousel";
import CarouselSkeleton from "../components/CarouselSkeleton";

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
    // Simulating an API call with mock data
    const image_base_url = "https://images.unsplash.com/";
    let image_filename = "photo-1734630630491-458df4f38213";
    let image_url = `${image_base_url}${image_filename}`;

    const mockStories = [
      { id: 1, title: "The Brave Knight", exposition: "Once upon a time, a knight set off on a great adventure.", thumbnail: image_url },
      { id: 2, title: "The Lost Treasure", exposition: "Deep in the jungle, a hidden treasure awaited discovery.", thumbnail: image_url },
      { id: 3, title: "Galactic Voyager", exposition: "In the year 3021, humanity made first contact with aliens.", thumbnail: image_url },
      { id: 4, title: "The Enchanted Forest", exposition: "A magical forest where every tree tells a story.", thumbnail: image_url },
      { id: 5, title: "The Time Traveler", exposition: "A scientist discovers a way to travel through time.", thumbnail: image_url },
      { id: 6, title: "The Secret Garden", exposition: "A hidden garden holds the key to a family's legacy.", thumbnail: image_url },
      { id: 7, title: "The Ocean's Whisper", exposition: "A young sailor hears the ocean's secrets during a storm.", thumbnail: image_url },
      { id: 8, title: "The Mountain's Echo", exposition: "Legends of a mountain that echoes the voices of the past.", thumbnail: image_url },
      { id: 9, title: "The Robot's Dream", exposition: "A robot discovers what it means to dream and feel.", thumbnail: image_url },
      { id: 10, title: "The Hidden Kingdom", exposition: "A kingdom hidden in the clouds, ruled by a wise queen.", thumbnail: image_url }
    ];

      setStories(mockStories);
      setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Library</h1>
        <CarouselSkeleton />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Library</h1>
      <CustomCarousel items={stories} />
      <AllStories stories={stories} />
    </div>
  );
}