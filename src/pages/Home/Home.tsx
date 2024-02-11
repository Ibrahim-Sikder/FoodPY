import Container from "../../ui/Container";
import Category from "./Category";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <Container className="">
           <HeroSection/>
           <Category/>
        </Container>
    );
};

export default Home;