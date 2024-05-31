
import cgr from "@/public/image/projects/cgr.png";
import tfc from "@/public/image/projects/tfc.png";
import fou from "@/public/image/projects/puy_du_fou.svg";
import aeg from "@/public/image/projects/aeg.svg";
import bot from "@/public/image/projects/discord-bot.png";
import spirits from "@/public/image/projects/catching-spirits.png";
import occ from "@/public/image/projects/occitanie.png";
import cancer from "@/public/image/projects/oncopole.png";
import idea from "@/public/image/projects/idea.png";


import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-next ${className}`}
        style={{
          ...style,
          display: 'block',
          width: '18px',
          height: '18px',
          background: 'black',
          right: '-15px',
          zIndex: '1',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    );
  };
  
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`slick-prev ${className}`}
        style={{
          ...style,
          display: 'block',
          width: '18px',
          height: '18px',
          background: 'black',
          left: '-15px',
          zIndex: '1',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    );
  };
  
  
  const Caroussel_projet = (props) => {
      const settings = {
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnFocus: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          cssEase: 'linear',
          nextArrow: <NextArrow className="slick-next" />,
          prevArrow: <PrevArrow className="slick-prev" />,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                  }
              }
          ]
      };
  
      return (
            <div className="container mx-auto px-8 xl:px-0">
              <Slider {...settings}>
              <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Analyse et amélioration de la gestion des données clients pour l'entreprise.
                              </p>
                              <Avatar
                                  image={aeg}
                                  name="AEG Power Solutions"
                                  title="2024"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Développement et mise en place d'un bot sur notre serveur discord.
                              </p>
                              <Avatar
                                  image={bot}
                                  name="Bot Discord"
                                  title="2024"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Développement de l'intelligence artificielle pour un jeu vidéo.
                              </p>
                              <Avatar
                                  image={spirits}
                                  name="Catching Spirits"
                                  title="2024"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Analyser la qualité de vie des habitants de l'Occitanie et proposer des pistes d'amélioration.
                              </p>
                              <Avatar
                                  image={occ}
                                  name="Bien Vivre et Bien Vieillir en Occitanie"
                                  title="2024"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Identification des cellules endothéliales dans des images microscopiques pour prévenir du cancer du sein.
                              </p>
                              <Avatar
                                  image={cancer}
                                  name="Détection du cancer du sein (IA)"
                                  title="2024"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Développer et déployer un site web vitrine pour présenter IDEA.
                              </p>
                              <Avatar
                                  image={idea}
                                  name="Site Web Idea"
                                  title="2024"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Créer un outil de visualisation des données du cinéma mais aussi de ses concurrents sur une base régulière et automatisée.
                              </p>
                              <Avatar
                                  image={cgr}
                                  name="CGR"
                                  title="2023"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Prévoir le nombre de visiteurs du parc de jour comme de nuit.
                              </p>
                              <Avatar
                                  image={fou}
                                  name="Puy du Fou"
                                  title="2023"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="hover:-translate-y-1 p-2">
                    <div className="slide-container h-80 w-full">
                        <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-6 md:p-14">
                        <p className="text-xl md:text-2xl leading-normal">
                                  Traitement et analyse des données sur les correspondances et les abonnements par le biais de tableaux de bord, et mise en place d'une typologie des clients.
                              </p>
                              <Avatar
                                  image={tfc}
                                  name="Toulouse Football Club"
                                  title="2023"
                              />
                          </div>
                      </div>
                  </div>
              </Slider>
          </div>
      );
  }
  
  function Avatar(props) {
      return (
          <div className="mt-8 flex items-center space-x-3">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                      src={props.image}
                      alt="Avatar"
                  />
              </div>
              <div>
                  <div className="text-lg font-medium">{props.name}</div>
                  <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
              </div>
          </div>
      );
  }
  
  export default Caroussel_projet;  