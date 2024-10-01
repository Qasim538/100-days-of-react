import React, { useEffect, useState } from 'react'
import axios from "axios"

const api_Key = "AIzaSyAqDBESRka2d9opF30uBCHlHr1EBzSQQ2Y"
const API = "https://www.googleapis.com/youtube/v3/search"

const Youtube = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API, {
          params: {
            part: "snippet",
            q: "coding", // Change the query to anything you want to search for
            type: "video",
            key: api_Key
          }
        })
        setVideos(response.data.items)
        console.log(response.data.items)
      } catch (error) {
        console.error("Error fetching data from YouTube API", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>YouTube</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            {video.snippet.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Youtube
