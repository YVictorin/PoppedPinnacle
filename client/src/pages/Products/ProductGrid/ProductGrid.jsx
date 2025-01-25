import React, { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { Container, Row, Col, Card } from "react-bootstrap";


export default function ProductGrid() {
  const URLS = {
    PRODUCTS: "http://localhost:3001/products",
  };

  const [data, isLoading, isError, error] = useFetchData({ url: URLS.PRODUCTS });
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Handle hover effect
  const handleMouseOver = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  if (isLoading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center py-5 text-red-500">Error: {error.message}</div>;
  }

  return (
    <>
    <Container 
        fluid 
        className="p-20" 
        style={{position: "absolute", top: "60%"}}
    >
        <Container className="bg-transparent mb-20">
        <h1 className="text-center text-7xl font-bold">Our Best Products</h1>
        </Container>

      <Row className="justify-content-center g-4">
        
        {/* making sure data has elements inside before looping */}
        {data.length > 0 ? (
          data.map((product) => (
            // Responsive breakpoints for grid layout
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card
                className="shadow-lg hover:scale-105 transition-transform"
                onMouseOver={() => handleMouseOver(product)}
                onMouseLeave={handleMouseLeave}
                // optional chaining and changes url if the state has updated the img and the img's id
                style={{
                  backgroundImage: `url(${
                    hoveredProduct?.id === product.id ? product.imgUrl2 : product.imgUrl1
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Card.Body
                  className="flex flex-col items-center justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white"
                  style={{ height: "100%" }}
                >
                  <h5 className="text-lg font-semibold">{product.name}</h5>
                  <p className="text-sm">{product.descr || "Gourmet Popcorn"}</p>
                  <p className="text-xl font-medium opacity-70">${product.price}</p>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="text-center text-gray-500">No products available.</div>
        )}
      </Row>
    </Container>
    </>
  );
}
