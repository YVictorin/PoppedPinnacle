import { useState, useEffect } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { Container, Row, Col, Card } from "react-bootstrap";
import SidebarFilter from "../SidebarFilter";
import SortFilter from "../SortFilter/SortFilter";
import { useOutletContext } from "react-router-dom";

export default function ProductGrid() {
  const URLS = {
    PRODUCTS: "https://poppedpinnacle-1.onrender.com/products",
  };

  const [data, isLoading, isError, error] = useFetchData({ url: URLS.PRODUCTS });
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [display, setDisplay] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all"); // either all, low, or high
  const [typeFilter, setTypeFilter] = useState([]); // either sweet, savory, or spicy

  const { isMobile } = useOutletContext();

  // Handle hover effect
  const handleMouseOver = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const applyFilters = () => {
    let filteredProducts = [...data]; // Start with all data

    if (priceFilter === "low") {
      filteredProducts = filteredProducts.filter((product) => parseInt(product.price) < 30);
    } else if (priceFilter === "high") {
      filteredProducts = filteredProducts.filter((product) => parseInt(product.price) > 30);
    }

    if (typeFilter.length > 0) {
      filteredProducts = filteredProducts.filter((product) => typeFilter.includes(product.type));
    }

    setDisplay(filteredProducts); // Update the display state with the filtered products
  };

  // whenever data, priceFilter, or typeFilter changes, apply both filters
  useEffect(() => {
    //if data has elements i.e has fetched already
    if (data.length > 0) {
      applyFilters();
    }
  }, [data, priceFilter, typeFilter]);

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
        className={!isMobile ? "p-20 flex gap-2" : "p-20 flex flex-col gap-2 "}
        style={{ position: "absolute", top: "60%" }}
      >
        <Col xs={2}>
          <SidebarFilter setTypeFilter={setTypeFilter} isMobile={isMobile} />
        </Col>

        <Col xs={10} className="mx-auto">
          <Row className="justify-content-center g-4 ">
            <SortFilter setPriceFilter={setPriceFilter} />
            {/* Display filtered products */}
            {display.length > 0 ? (
              display.map((product) => (
                <Col
                  key={product.id}
                  // responsive breakpoints 
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center"
                >
                  <Card
                    className="hover:scale-105 transition-transform"
                    onMouseOver={() => handleMouseOver(product)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      backgroundImage: `url(${
                        //optional chaining for when the user has yet to hover over a product
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
        </Col>
      </Container>
    </>
  );
}
