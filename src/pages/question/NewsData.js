import { Link } from "react-router-dom";

function getFirstChars(text) {
  return text.substring(0, 30);
}
// NewsData.js
const NewsData = ({ linksData }) => {
  return (
    <div>
      <h2>Link Previews</h2>
      {linksData.map((link, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{link.title}</h3>
          <img src={link.image_url} alt="이미지" style={{ width: '300px', height: 'auto' }}/>
          <a href={link.link}>{link.link}</a>
          <p>{getFirstChars(link.content)}...</p>
        </div>
      ))}
    </div>
  );
};



export default NewsData;