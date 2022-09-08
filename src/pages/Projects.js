import React from 'react';
import { Container, Header, Label } from 'semantic-ui-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Thumbs } from "swiper";

import projects from '../components/Projects/projects.json';
import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import '../styles/scss/projects.scss';
import { useState } from 'react';


export function Projects() {
    const [isImageZoomedOpen, setIsImageZoomed] = useState('');

    return (
        <div className='page'>
            {isImageZoomedOpen && (
                <dialog
                    className="image-popup"
                    style={{ position: "absolute" }}
                    open
                    onClick={() => setIsImageZoomed('')}
                >
                    <img
                        className="image"
                        src={isImageZoomedOpen}
                        onClick={() => setIsImageZoomed('')}
                    />
                </dialog>
            )}
            <Container className='content'>
                <Header as='h1'>My Projects</Header>
                <Swiper
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="projects-swiper"
                >
                    {
                        projects.map(project => {
                            const { name, useLogoAsName, gitLink, tags, imagesType, link, description, features, technologies } = project;
                            const images = [];
                            for (let index = 1; index <= project.images; index++) {
                                images.push(require(`../styles/assets/projects/${name.toLocaleLowerCase()}/${index}.${imagesType}`))
                            }
                            return (
                                <SwiperSlide key={name}>
                                    <Container className='title'>
                                        <a href={link} target='_blank' rel='noopener noreferrer'>
                                            {useLogoAsName ?
                                                <img src={require(`../styles/assets/projects/${name.toLocaleLowerCase()}/logo.png`)} alt={name} /> :
                                                <div>{name}</div>
                                            }
                                        </a>
                                    </Container>
                                    {
                                        tags &&
                                        <Container className='tags'>{
                                            tags.map(tag => {
                                                return <Label as='div' key={tag[0]} color={tag[1]} tag>{tag[0]}</Label>
                                            })
                                        }</Container>
                                    }
                                    <Container as="div" className='details'>
                                        <div className='description'>
                                            <h4>Description</h4>
                                            <div className='desc-wrapper'>
                                                <div className='desc-paras'>
                                                    {
                                                        description.map((p, i) => <p key={`para-${i}`}>{p}</p>)
                                                    }
                                                </div>
                                                <div className='desc-git'>See the project on <b><a href={gitLink} target='_blank' rel='noopener noreferrer'>GitHub</a></b></div>
                                            </div>
                                        </div>
                                        <div className='lists'>
                                            <div className='features'>
                                                <h4>Features</h4>
                                                <ul>
                                                    {
                                                        features.map((f, i) => <li key={`feat-${i}`}>{f}</li>)
                                                    }
                                                </ul>
                                            </div>
                                            <div className='technologies'>
                                                <h4>Technologies</h4>
                                                <ul>
                                                    {
                                                        technologies.map((t, i) => <li key={`feat-${i}`}>{t}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </Container>
                                    <Container className='other'>
                                        {
                                            project.other && project.other.map((p, i) =>
                                                <div key={`other-${i}`}>[<a href={p[0]} target='_blank' rel='noopener noreferrer'>{p[1]}</a>]</div>
                                            )
                                        }
                                    </Container>
                                    <Swiper
                                        pagination={{
                                            type: "progressbar",
                                        }}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        modules={[Pagination, Navigation, Thumbs]}
                                        className="image-gallery"

                                    >
                                        {
                                            images.map((image, index) => {
                                                return <SwiperSlide key={`image--${name}-${index}`}>
                                                    <img src={image} onClick={() => setIsImageZoomed(image)} />
                                                </SwiperSlide>
                                            })
                                        }
                                    </Swiper>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </div>
    )
}