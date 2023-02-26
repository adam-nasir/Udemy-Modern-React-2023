export default function ProfileCard({ title, handle, imageUrl, altInfo }) {
  return (
    <div className="profile-card">
      <div className="profile-card__body">
        <h3 className="profile-card__title">{title}</h3>
        <p>{handle}</p>
        <img src={imageUrl} alt={altInfo} />
      </div>
    </div>
  );
}
