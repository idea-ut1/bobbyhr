"use client";

import Hero from "@/components/home/hero";
import SectionTitle from "@/components/home/sectionTitle";
import Caroussel from "@/components/wall/caroussel";
import Image from "next/image";
import React from "react";
import {
  ChartBarIcon,
  Square3Stack3DIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  CircleStackIcon,
  RectangleGroupIcon,
  ScaleIcon,
  ArrowsPointingOutIcon,
  TableCellsIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "@/public/image/benefit-one.png";
import benefitTwoImg from "@/public/image/benefit-two.png";
import { Menu } from "react-feather";
import SliderHome from "@/components/slider-home";
import { useState } from "react";
import Testimonials from "@/components/home/testimonials";
import Faq from "@/components/home/faq";
import Footer from "@/components/footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

export default function CV() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white_background_bobby px-6">
      <div className="relative">
        <div className="fixed right-0 top-0 h-20 w-20 rounded-bl-full bg-brown_bobby" />
        <div className="fixed right-0 top-0 pr-4 pt-4">
          <div className="flex items-start justify-end">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open panel</span>
              <Menu className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <Hero />
      <SectionTitle
        id = "wall"
        pretitle="Pourquoi IDeA?"
        title="Pourquoi vous devez nous contacter?">
        Nous sommes une équipe d'étudiants qui ont appris à coder et nous voulons vous aider à créer votre projet.
      </SectionTitle>
      <AnnouncementBanner text=" Nouvelle annonce importante ! La cérémonie de remise IDA le 7 juin à la cafeteria de la manufacture." />
      <Caroussel/>

      <div className="container mx-auto p-8 xl:px-0 mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2`}>
          <div>
            <Image
              src={benefitOneImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2`}>
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 id="skills" className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
              De nombreuses compétences
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
              Grâce à nos experiences, nous avons acquis de nombreuses compétences dans différents domaines.
              </p>
            </div>
            <div className="mt-5 w-full">
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <TableCellsIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Data engineering
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                   Traitement, gestion et optimisation des données.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <ChartBarIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Data visualization
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Créez un tableau de bord pour visualiser vos données.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <Square3Stack3DIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Machine learning
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                   Créez un modèle de machine learning pour prédire vos données.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <RectangleGroupIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Deep learning
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                   Apprentissage automatique avancé à l'aide de réseaux neuronaux.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <ArrowsPointingOutIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Système d'information
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Conception et modélisation de systèmes d'information pilotés par les données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-20 flex flex-wrap p-8 lg:flex-nowrap lg:gap-10 xl:px-0 ">
        <div
          className="flex w-full items-center justify-center lg:order-1 lg:w-1/2">
          <div>
            <Image
              src={benefitTwoImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>
        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 lg:justify-end`}>
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
              Et plus encore...
              </h3>
            </div>
            <div className="mt-5 w-full">
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <CircleStackIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Big data
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Gérez votre projet big data
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <MagnifyingGlassIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                   Gestion de projet
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                   Pilotez votre projet de A à Z.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <GlobeAltIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Développement Web
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Créez un site web pour votre projet.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <ScaleIcon className="h-7 w-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Éthique juridique de l'IA et du Green IT
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Contribuer à l'adoption d'une approche éthique des données et de l'apprentissage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle
        id="projects"
        pretitle="Projets"
        title="Voici quelques-uns de nos projets">
        Nous avons déjà travaillé sur quelques projets, en voici quelques-uns.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        id="faq"
        pretitle="FAQ"
        title="Foire Aux Questions">
        Si vous avez encore des questions, n'hésitez pas à consulter la section qui suit
      </SectionTitle>
      <Faq />
      <Footer />
      <SliderHome open={open} setOpen={setOpen} />
    </div>
  );
}
