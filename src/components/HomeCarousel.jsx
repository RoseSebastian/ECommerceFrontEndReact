import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?t=st=1723466964~exp=1723470564~hmac=8d144a44471d4efd8b4badce95f1dfac3f51d7f1a25cb0ce90d555bca4557e5c&amp;w=1380"
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?t=st=1723467125~exp=1723470725~hmac=c8b29c63629e190a2cb50ca5cec648f4875a4b58cf48aad8793ba038c8ead68d&amp;w=1380"
          alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://imgs.search.brave.com/feMvdXTiaiY8iVcOQv144_O2_N05TqjNv5H4wnvF-Nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFN0tv/N3ZlcG8vMS8wLzE2/MDB3L2NhbnZhLXNo/b3AtbmV3LXByb2R1/Y3RzLXdlYnNpdGUt/YmFubmVyLWJyb3du/LC13aGl0ZSwtdGFu/LUxrWnNOQ1czWDF3/LmpwZw"
          alt="Third slide"
        />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default HomeCarousel;