/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "../styles/productListing.css";
import Product from "./product";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function ProductListing(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let searchText = "";
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.log("Error occured: ", err);
      });
  }, []);

  useEffect(() => {
    searchText = props.searchText;
    setFilteredProducts(products);
    if (searchText.trim().length > 0) {
      const filterValues = products.filter((eachItem) => {
        return eachItem.title.toLowerCase().includes(searchText);
      });
      setFilteredProducts(filterValues);
    }
  }, [props.searchText]);

  return (
    <>
      <Container>
        <h1>Products</h1>
        <div>
          <Row>
            {filteredProducts.length === 0 ? (
              <div className="noResults">
                <h3>No results found</h3>{" "}
              </div>
            ) : (
              filteredProducts.map((product) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
                    <Product productData={product} key={product.id} />
                  </Col>
                );
              })
            )}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ProductListing;
