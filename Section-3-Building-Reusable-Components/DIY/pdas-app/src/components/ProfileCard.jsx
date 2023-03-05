function ProfileCard({ title, handle, imageUrl, altInfo, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageUrl} alt={altInfo} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>

        <div className="content">
          <p>{description}</p>
          <br />
          <time dateTime="2023-3-3">11:09 AM - 3 Mar 2023</time>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
