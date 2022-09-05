import React from 'react';
import { Container, Header, Label } from 'semantic-ui-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageGallery from 'react-image-gallery';
import { Navigation, Pagination } from "swiper";

import projects from '../components/Projects/projects.json';
import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import '../styles/scss/projects.scss';

export function Projects() {

    return (
        <div className='page'>
            <Container className='content'>
                <Header as='h1'>My Projects</Header>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="projects-swiper"
                >
                    {
                        projects.map(project => {
                            const { name, useLogoAsName, gitLink, tags, imagesType, link, description, features, technologies } = project;
                            const images = [];
                            for (let index = 1; index <= project.images; index++) {
                                images.push({
                                    original: require(`../styles/assets/projects/${name.toLocaleLowerCase()}/${index}.${imagesType}`),
                                    thumbnail: require(`../styles/assets/projects/${name.toLocaleLowerCase()}/${index}.${imagesType}`)
                                })
                            }
                            return (
                                <SwiperSlide key={name}>
                                    <div className='title'>
                                        <a href={link} target='_blank' rel='noopener noreferrer'>
                                            {useLogoAsName ?
                                                <img src={require(`../styles/assets/projects/${name.toLocaleLowerCase()}/logo.png`)} alt={name} /> :
                                                <div>{name}</div>
                                            }
                                        </a>
                                    </div>
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
                                    <div className='other'>
                                        {
                                            project.other && project.other.map((p, i) =>
                                                <div key={`other-${i}`}>[<a href={p[0]} target='_blank' rel='noopener noreferrer'>{p[1]}</a>]</div>
                                            )
                                        }
                                    </div>
                                    <ImageGallery
                                        items={images}
                                        showPlayButton={false}
                                        showThumbnails={true}
                                        showFullscreenButton={true}
                                        showNav={false}
                                        showBullets={false}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </div>
    )
}