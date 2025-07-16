import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

/**
 * ColumnLeft
 * Fetches 2 sample images from Picsum when user clicks the button.
 */
export const ColumnLeft = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const { data } = await axios.get('https://picsum.photos/v2/list?page=0&limit=2');
    setImages(data);
  };

  return (
    <Container fluid className="py-4">
      <h2>Left column</h2>

      <Button className="my-5" variant="primary" onClick={fetchImages}>
        Get images
      </Button>

      <div className="images">
        {images.map((c) => {
          const { author, download_url, id } = c;
          return (
            <figure key={id}>
              <img src={download_url} alt={author} />
              <figcaption className="small text-muted">{author}</figcaption>
            </figure>
          );
        })}
      </div>
    </Container>
  );
};
