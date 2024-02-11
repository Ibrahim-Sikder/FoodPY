import Container from "../../ui/Container";
import food from "../../assets/images/food.jpg";
import food2 from "../../assets/images/food4.jpg";
import food3 from "../../assets/images/food3.jpg";
import food4 from "../../assets/images/food7.jpg";
import food5 from "../../assets/images/food8.jpg";
import Card from "../../components/Card/Card";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const HeroSection = () => {
  return (
    <Container className="">
      <div className="grid grid-cols-12 gap-3 mt-5 place-content-center justify-center">
        <div className="col-span-12 sm:col-span-6 lg:col-span-2 lg:order-1 order-3 ">
          <Card className='text-center  '>
            <img src={food} alt="food" className="h-40 w-full object-cover"/>
            <h5 className="text-[16px] mt-2">Chicken Tikka Masala</h5>
            <p className="my-2">
              "Spiced chicken in creamy tomato sauce, popular in Indian
              cuisine."
            </p>
            <div className="flex items-center justify-center ">
                <button className="text-[#FF9F1C] text-[13px]">Shop Now </button>
                <HiOutlineArrowNarrowRight className="size-4 ml-1"/>
            </div>
          </Card>
          <Card className='text-center  '>
            <img src={food5} alt="food" className="h-40 w-full object-cover"/>
            <h5 className="text-[16px] mt-2">Chicken Tikka Masala</h5>
            <p className="my-2">
              "Spiced chicken in creamy tomato sauce, popular in Indian
              cuisine."
            </p>
            <div className="flex items-center justify-center ">
                <button className="text-[#FF9F1C] text-[13px]">Shop Now </button>
                <HiOutlineArrowNarrowRight className="size-4 ml-1"/>
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-8 lg:order-1 order-2 ">
          <img className="w-full " src={food2} alt="food" />
        </div>
        <div className="col-span-12 sm:col-span-6  lg:col-span-2 order-3">
            <h4 className="italic mb-3">Recipes We Are Loving </h4>
        <Card className='text-center  h-30'>
            <img src={food3} alt="food" className="h-40 w-full object-cover"/>
            <p className="my-2">
              "Spiced chicken in creamy tomato sauce, popular in Indian
              cuisine."
            </p>
           
          </Card>
          <Card className='text-center  '>
            <img src={food4} alt="food" className="h-40 w-full object-cover"/>
            <p className="my-2">
              "Spiced chicken in creamy tomato sauce, popular in Indian
              cuisine."
            </p>
           
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
