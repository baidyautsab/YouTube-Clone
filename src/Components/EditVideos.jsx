import React, { useEffect, useState } from "react";
import "../Styles/EditVideos.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditVideos() {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [desc, setDesc] = useState("");
  let [like, setLike] = useState("");
  let [view, setView] = useState("");

  // used to get the current selected data id
  //useParam() return the data and id
  let param = useParams();
  console.log(param);

  let data = { name, desc, address, like, view };

  useEffect(() => {
    axios.get(`http://localhost:3050/Videos/${param.id}`)
      .then((res) => {
        // we auto-fill the previous data of the video
        setName(res.data.name);
        setAddress(res.data.address);
        setDesc(res.data.desc);
        setLike(res.data.like);
        setView(res.data.view);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [param.id])

  function editVideo(e) {
    e.preventDefault();
    // we edit the data of video
    axios.put(`http://localhost:3050/Videos/${param.id}`, data)
    .then((res) => {
        alert('Video updated successfully!');
    })
    .catch((err) => {
        alert("Can't update the video!")
    })
  }

  return (
    <div className="edit-videos">
      <form onSubmit={editVideo} action="" className="addvideos-form">
        <label htmlFor="">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          placeholder="Enter the name"
          id=""
        />
        <label htmlFor="">Description</label>
        <input
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          name=""
          placeholder="Enter the description"
          id=""
        />
        <label htmlFor="">Address</label>
        <input
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          name=""
          placeholder="Enter the address"
          id=""
        />
        <label htmlFor="">Likes</label>
        <input
          required
          value={like}
          onChange={(e) => setLike(e.target.value)}
          type="number"
          name=""
          placeholder="Enter the likes"
          id=""
        />
        <label htmlFor="">Views</label>
        <input
          required
          value={view}
          onChange={(e) => setView(e.target.value)}
          type="number"
          name=""
          placeholder="Enter the views"
          id=""
        />{" "}
        <br />
        <button className="btn btn-primary upload">Edit</button>
      </form>
    </div>
  );
}

export default EditVideos;
