import React, { useState } from "react";
import "../Styles/AddVideos.css";
import axios from "axios";

function AddVideos() {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [desc, setDesc] = useState("");
  let [like, setLike] = useState("");
  let [view, setView] = useState("");

  let data = { name, desc, address, like, view };

  function addVideo(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3050/Videos", data)
      .then((res) => {
        console.log(res);
        alert("Video Uploaded");
        setName("");
        setAddress("");
        setDesc("");
        setLike("");
        setView("");
      })
      .catch((err) => {
        console.log(err);
        alert("Can not upload the video!");
      });
  }

  return (
    <div className="addvideos">
      <form onSubmit={addVideo} action="" className="addvideos-form">
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
        <button className="btn btn-success upload">Upload</button>
      </form>
    </div>
  );
}

export default AddVideos;
