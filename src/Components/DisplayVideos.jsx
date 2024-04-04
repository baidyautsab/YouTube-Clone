import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import "../Styles/DisplayVideos.css";
import { useNavigate } from "react-router-dom";

function DisplayVideos() {
  let [video, setVideo] = useState([]);

  let navigate = useNavigate();

  function editvideo(id) {
    navigate(`/adminhomepage/editvideo/${id}`);
  }

  function deleteVideo(id, name) {
    axios
      .delete(`http://localhost:3050/Videos/${id}`)
      .then((res) => {
        alert(`${name} has been deleted!`);
      })
      .catch((err) => {
        alert("Video not found.");
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3050/Videos")
      .then((res) => {
        console.log(res);
        setVideo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="display-video">
      {video.map((ele) => {
        return (
          <div className="homepage-display">
            <div className="videos">
              <iframe
                width="500"
                height="315"
                src={ele.address}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="about">
                <h3 className="v-name">{ele.name}</h3>
                <span>{ele.view} views</span> <br />
                <p>
                  <button className="like-btn1">
                    <BiLike className="like" />
                    {ele.like}
                  </button>
                  <button className="like-btn2">
                    <BiDislike className="dislike" />
                  </button>
                </p>
                <span>{ele.desc}</span> <br />
                <p>
                  <button
                    className="delete"
                    onClick={() => deleteVideo(ele.id, ele.name)}
                  >
                    Delete
                  </button>
                  <button className="edit" onClick={() => editvideo(ele.id)}>
                    Edit
                  </button>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayVideos;
