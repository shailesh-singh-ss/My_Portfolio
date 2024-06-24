import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'





export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          breakpoints={
            {
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }
          }
          loop={true}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
          
        >
          {projects.map((project, id) => {
            return(
            <SwiperSlide key={id}>
              <ProjectCard key={id} project={project} />
            </SwiperSlide>)
          })}
        </Swiper>
      </div>
    </section>
  );
};
