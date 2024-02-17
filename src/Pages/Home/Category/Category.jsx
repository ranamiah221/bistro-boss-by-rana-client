import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import img1 from'../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <div>
  <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h2 className='text-2xl uppercase font-medium text-white text-center -mt-16'>salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h2 className='text-2xl uppercase font-medium text-white text-center -mt-16'>pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h2 className='text-2xl uppercase font-medium text-white text-center -mt-16'>soup</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h2 className='text-2xl uppercase font-medium text-white text-center -mt-16'>deserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h2 className='text-2xl uppercase font-medium text-white text-center -mt-16'>salads</h2>
        </SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default Category;