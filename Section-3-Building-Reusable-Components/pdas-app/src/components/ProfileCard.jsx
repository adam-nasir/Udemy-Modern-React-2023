export default function ProfileCard({ title, handle, imageUrl, altInfo }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={imageUrl} alt={altInfo} />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-6">{handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
