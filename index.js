import React, { useState, useEffect } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardBody,
  CardText,
  Button,
  Spinner,
  Col,
  Container,
  Row,
  Card,
  CardTitle,
 
  
  ButtonGroup,
} from "reactstrap";
import { NewArrivalData, BestSellingData, Slideritems } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slice/cart";
import { Navigate, useNavigate } from "react-router-dom";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [SelectedTab, setSelectedTab] = useState(null);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === Slideritems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? Slideritems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const renderItems = (Data) => {
    return Data.map((item, index) => (
      <Col key={"${index}"} xs={12} sm={4}>
        
        <Card onClick ={ () => Navigate(`/detail/${activeIndex}/${item.id}`)}>
          style={{
            width: "18rem",
          }};
          <img alt="Sample" src={item.images[0]} />
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
            <Button>Add to Cart</Button>
          </CardBody>
        </Card>
      </Col>
    ));
  };

  return (
    <Container fluid>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={Slideritems}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {Slideritems.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption
                captionText={item.caption}
                captionHeader={item.caption}
              />
            </CarouselItem>
          );
        })}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => setSelectedTab(1)}
          active={SelectedTab === 1}
        >
          New Arrival
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setSelectedTab(2)}
          active={SelectedTab === 2}
        >
          Best Selling
        </Button>
      </ButtonGroup>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Row>
          {SelectedTab === 1
            ? renderItems(NewArrivalData)
            : renderItems(BestSellingData)}
        </Row>
      )}
    </Container>
  );
}



