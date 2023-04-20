import React from 'react';
import { Container, Item, Transition } from 'semantic-ui-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import webcollage from '../../styles/assets/resume/webcollage.png';
import apester from '../../styles/assets/resume/apester.png';
import browzwear from '../../styles/assets/resume/browzwear.png';

function ResumeDetails({ visible, className }) {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            className={`details`} >
            {/* <Item.Group className='details'> */}
            <SwiperSlide className='workplace browzwear'>
                <Transition as={Container} animation={"tada"} duration={500} visible={visible}>
                    <Item.Content>
                        <Item.Header>
                            <a href='https://browzwear.com/' target='_blank' rel='noopener noreferrer'><img src={browzwear} alt="Browzwear" /></a>
                        </Item.Header>
                        <Item.Meta>Front End Developer | 2021 - Present</Item.Meta>
                        <Item.Description>
                            <ul>
                                <li>Designing and developing features for our websites using <b>React+Mobx</b> and <b>Typescript</b></li>
                                <li>Designing and developing features for our 3D Software using <b>JS+React</b></li>
                                <li>Working closely with the Product team</li>
                            </ul>
                        </Item.Description>
                    </Item.Content>
                </Transition>
            </SwiperSlide>
            <Transition as={Container} animation={"tada"} duration={1000} visible={visible}>
                <SwiperSlide className='workplace apester'>
                    <Item.Content>
                        <Item.Header>
                            <a href='https://apester.com/' target='_blank' rel='noopener noreferrer'><img src={apester} alt="Apester" /></a>
                        </Item.Header>
                        <Item.Meta>Full Stack Developer | 2020</Item.Meta>
                        <Item.Description>
                            <ul>
                                <li>Developing our product components -  such as our Player and SDK.</li>
                                <li>Developing our website projects</li>
                                <li>Coding with <b>React, Type Script, AngularJS, SCSS, JavaScript, NodeJS</b> depends on the project.</li>
                            </ul>
                        </Item.Description>
                    </Item.Content>
                </SwiperSlide>
            </Transition>
            <Transition as={Container} animation={"tada"} duration={1000} visible={visible}>
                <SwiperSlide className='workplace webcollage'>
                    <Item.Content>
                        <Item.Header>
                            <a href='https://syndigo.com/' target='_blank' rel='noopener noreferrer'><img src={webcollage} alt="Webcollage" /></a>
                        </Item.Header>
                        <Item.Meta>Web Developer | 2015-2019</Item.Meta>
                        <Item.Description>
                            <ul>
                                <li>Designing and developing internal system to generate landing pages system using <b>React and NodeJS.</b></li>
                                <li>Designing, coding and modifying websites</li>
                                <li>Experience developing cross-browser web experience.</li>
                            </ul>
                        </Item.Description>
                    </Item.Content>
                </SwiperSlide>
            </Transition>
            {/* </Item.Group> */}
        </Swiper>
    )
}

export default ResumeDetails;