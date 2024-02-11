
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import food from '../../assets/images/food.jpg';
const Category = () => {
    const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}


    return (
        <div>
         <Slider {...settings}>
					<div className="slider text-center flex justify-center items-center ">
						<div className='w-32 h-32 rounded-full'>
						<img className='w-full h-full rounded-full'  src={food} alt="food" />
						</div>
					
						<span className='text-center'>Kitchen</span>
					</div>
					<div className="slider text-center flex justify-center items-center ">
						<div className='w-32 h-32 rounded-full'>
						<img className='w-full h-full rounded-full'  src={food} alt="food" />
						</div>
					
						<span className='text-center'>Kitchen</span>
					</div>
					<div className="slider text-center flex justify-center items-center ">
						<div className='w-32 h-32 rounded-full'>
						<img className='w-full h-full rounded-full'  src={food} alt="food" />
						</div>
					
						<span className='text-center'>Kitchen</span>
					</div>
				</Slider>

        </div>
    );
};

export default Category;