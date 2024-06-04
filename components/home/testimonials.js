
import cgr from "@/public/image/projects/cgr.png";
import tfc from "@/public/image/projects/tfc.png";
import fou from "@/public/image/projects/puy_du_fou.svg";
import aeg from "@/public/image/projects/aeg.svg";
import bot from "@/public/image/projects/discord-bot.png";
import spirits from "@/public/image/projects/catching-spirits.png";
import occ from "@/public/image/projects/occitanie.png";
import cancer from "@/public/image/projects/oncopole.png";
import idea from "@/public/image/projects/idea.png";
import python  from "@/public/image/skills/python.jpeg"
import nextjs from "@/public/image/skills/nextjs.webp"
import tailwind from "@/public/image/skills/tailwind.jpg"
import powerbi from "@/public/image/skills/powerbi.png"
import excel from "@/public/image/skills/excel.png"
import unity from "@/public/image/skills/unity.webp"
import alteryx from "@/public/image/skills/alteryx1.webp"
import jupyter from "@/public/image/skills/jupyter.png"
import keras from "@/public/image/skills/keras.png"
import go from "@/public/image/skills/go.png"
import javascript from "@/public/image/skills/javascript.png"
import pytorch from "@/public/image/skills/pytorch.png"
import react from "@/public/image/skills/react.png"
import tensorflow from "@/public/image/skills/tensorflow.png"
import csharp from "@/public/image/skills/csharp.png"


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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
  
    return (
        <div className="container mx-auto p-8 xl:px-0">
            <Slider {...settings}>
                <div className="hover:-translate-y-1 p-2">
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar 
                            image={excel}
                        />
                        <Avatar
                            image={python} 
                        />
                         <Avatar 
                            image={jupyter}
                        />
                        <Avatar 
                            image={alteryx}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
                            Analyse et amélioration de la gestion des données clients pour l&apos;entreprise.
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar
                            image={python} 
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
                            Développement et mise en place d&apos;un bot sur notre serveur discord.
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar
                            image={unity} 
                        />
                        <Avatar
                            image={csharp} 
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
                            Développement de l&apos;intelligence artificielle pour un jeu vidéo.
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar
                            image={excel} 
                        />
                        <Avatar 
                            image={powerbi}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
                            Analyser la qualité de vie des habitants de l&apos;Occitanie et proposer des pistes d&apos;amélioration.
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar 
                            image={keras}
                        />
                        <Avatar
                            image={python} 
                        />
                         <Avatar 
                            image={pytorch}
                        />
                        <Avatar 
                            image={tensorflow}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar
                            image={tailwind} 
                        />
                        <Avatar 
                            image={nextjs}
                        />
                         <Avatar 
                            image={react}
                        />
                        <Avatar 
                            image={powerbi}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar 
                            image={javascript}
                        />
                        <Avatar
                            image={go} 
                        />
                         <Avatar 
                            image={react}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar
                            image={python} 
                        />
                        <Avatar 
                            image={jupyter}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
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
                <div className="slide-container relative group" style={{ height: '350px', width: '475px' }}>
                    <div className="absolute inset-0 flex carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col">
                        <h4 className="text-2xl leading-normal font-bold">
                            Technologies utilisées : 
                        </h4>
                        <div className="flex flex-row space-x-4">
                        <Avatar
                            image={excel} 
                        />
                        <Avatar 
                            image={powerbi}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
                        <p className="text-2xl leading-normal">
                            Traitement et analyse des données sur les correspondances et les abonnements par le biais de tableaux de bord, et mise en place d&apos;une typologie des clients.
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