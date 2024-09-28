import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import imgLesley from "../../../assets/hesley.png";
import imgAhmadKhan from "../../../assets/ahmad-rasiq.png";
import imgHeena from "../../../assets/heena.png";
import imgAnkur from "../../../assets/anshul.png";
import imgAhmad from "../../../assets/ahmad-stevens.png";
import Specialistcard from "../../SpecialistCard/Specialistcard";

import "swiper/css";

const Specialist = () => {
  const specialist_data = [
    { img: imgLesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: imgAhmadKhan, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: imgHeena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: imgAnkur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: imgAhmad, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: imgLesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: imgAhmadKhan, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: imgHeena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: imgAnkur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: imgAhmad, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];
  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" textAlign="center" mb={3} px={2} fontWeight={600} color="#1B3C74" fontFamily="Poppins">
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {specialist_data.map((doc, index) => (
          <SwiperSlide key={index}>
            <Specialistcard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Specialist;
