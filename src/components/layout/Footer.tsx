import { Container } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Subscription from "../../ui/Subscription";


const Footer = () => {
 



  return (
    <footer className="bg-[#3CB371] text-white py-10">
      <Container className="">
        <h2>FoodPy</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 place-content-center mt-8 gap-5">
          <div>
            <h6 className="mb-5">COMPANY</h6>
            <ul className="space-y-3 text-sm ">
              <li>About Us</li>
              <li>The Test Kitchen </li>
              <li>Podcast Network </li>
              <li>Events</li>
              <li>Press</li>
              <li>Jobs</li>
              <li>Affiliate Program </li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-5">GET HELP</h6>
            <ul className="space-y-3 text-sm ">
              <li>About Us</li>
              <li>The Test Kitchen </li>
              <li>Podcast Network </li>
              <li>Events</li>
              <li>Press</li>
              <li>Jobs</li>
              <li>Affiliate Program </li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-5">EXPLORE</h6>
            <ul className="space-y-3 text-sm ">
              <li>About Us</li>
              <li>The Test Kitchen </li>
              <li>Podcast Network </li>
              <li>Events</li>
              <li>Press</li>
              <li>Jobs</li>
              <li>Affiliate Program </li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <FaFacebookF className="size-6" />
              <FaTwitter className="size-6" />
              <FaInstagram className="size-6" />
              <FaLinkedinIn className="size-6" />
              <FaYoutube className="size-6" />
            </div>{" "}
            <div className="">
              <h4>Sign up for our newsletter </h4>
              <p className="my-3">
                <span className="text-xl font-bold ">FoodPy</span> Savor delectable recipes, culinary tips, and foodie
                adventures in just a byte-sized read!"
              </p>
             <div >
                <Subscription/>
             </div>
            </div>
            
          </div>
        </div>
        <hr className="my-8"/>
        <small className=" flex justify-center">@2024 FoodPy Terms | Privacy | Code of Conduct | Accessibility Policy </small>
      </Container>
    </footer>
  );
};

export default Footer;
