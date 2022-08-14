import Slider from "react-slick";
import * as C from "./styled";

import leftArrow from "assets/left-arrow.svg";
import { data } from "@/mocks/data";
import { ISlickArrow } from "@/core/types";


export const BlogCarousel = () => {

  const { blog } = data

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: ISlickArrow) =>   
    <img src={leftArrow} alt="prevArrow" {...props} />
  ;

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    rows: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 524,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    nextArrow: <SlickArrowLeft />,
  };

  return (
    <Slider {...settings}>
      {blog.posts.map(({ id, blogImage, title, userImage, name }) =>
        <C.Card key={id.toString()}>
          <C.CardImage src={blogImage} aria-label="cardImage" />
          <C.CardDescription>
            <C.CardTitleText>{title}</C.CardTitleText>
            <C.CardPeople>
              <C.CardPeopleImage src={userImage} alt={name} aria-label="userImage" />
              <C.CardPeopleTitle>{name}</C.CardPeopleTitle>
            </C.CardPeople>
          </C.CardDescription>
        </C.Card>
      )}
    </Slider>
  );
}