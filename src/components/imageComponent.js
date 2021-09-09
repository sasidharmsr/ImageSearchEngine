import "../scripts/imagestyle.css";
export const ImageComponent = (props) => {
  const { src } = props;
  return (
    <li>
      <img className="pic" src={src} alt=""/>
    </li>
  );
};
export default ImageComponent;
