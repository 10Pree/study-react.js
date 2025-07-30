import PropTypes from 'prop-types';

export default function Image({ imageUrl }) {
  return (
    <>
      <p>{imageUrl}</p>
      <img src={imageUrl} width="100px" alt="demo" />
    </>
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string,
};
