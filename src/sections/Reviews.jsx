import { reviewData } from "../constants";
import ReviewCard from "../components/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  NextArrow from "../components/NextArrow"
import PrevArrow from "../components/PrevArrow";
import Button from "../components/Button";


const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
  ]
};

const Reviews = () => {

  return (
    <section className="">
      <div className="flex justify-center mb-12">
        <h3 className="font-montserrat font-bold text-4xl">Our Pawesome Clients!</h3>
      </div>
      <div className="w-3/4 m-auto">
        <div className="">
        <Slider {...settings}>
          {reviewData.map((review) => (
            <ReviewCard 
            key={review.customerName}
            customerName={review.customerName}
            imgUrl={review.imgUrl}
            review={review.review} />
          ))}
        </Slider>
        </div>
      </div>
        <div className="flex items-center justify-center mt-12">
          <a href="https://www.rover.com/members/sarah-s-animal-lover-furreverr/">
          <Button label={"Read More.."} />
          </a>
        </div>
    </section>
  )
}

export default Reviews