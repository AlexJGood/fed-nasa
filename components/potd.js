import fetch from "node-fetch";

function POTD({ potd_data }) {
  return (
    <div>
      {potd_data.media_type === "video" ? (
        <iframe width="420" height="315" src={potd_data.url}></iframe>
      ) : (
        <img src={potd_data.url} />
      )}

      <span>{potd_data.explanation}</span>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getPOTDData() {
  // Call an external API endpoint to get posts.
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  );
  const potd_data = await res.json();

  return potd_data;
}

export default POTD;
