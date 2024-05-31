import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "@/components/home/sectionTitle";
import Image from 'next/image'
import Khoufid from "@/public/image/wall/marouane.jpg"
import Mirio from "@/public/image/wall/camille-mirio.jpg";
import Pierre from "@/public/image/wall/margaux-pierre.jpg";
import Cabri from "@/public/image/wall/cabri.jpg";
import None from "@/public/image/wall/None.png";
import Naoui from "@/public/image/wall/naoui.jpg"
import Fieux from "@/public/image/wall/fieux.jpg"
import Vassal from "@/public/image/wall/vassal.jpg"
import Tessa from "@/public/image/wall/tessa.jpg"
import Zhang from "@/public/image/wall/zhang.jpg"
import Rebouys from "@/public/image/wall/rebouys.jpg" 
import Frindel from "@/public/image/wall/frindel.jpg"
import Kiady from "@/public/image/wall/kiady.jpg"
import Bellus from "@/public/image/wall/bellus.jpg"
import Savoye from "@/public/image/wall/savoye.jpg"
import Ciraci from "@/public/image/wall/ciraci.jpg"
import Garcia from "@/public/image/wall/garcia.jpg" 
import Laurent from "@/public/image/wall/laurent.jpg"
import Boussard from "@/public/image/wall/boussard.jpg"
import Saunders from "@/public/image/wall/saunders.jpg"
import Bedjaoui from "@/public/image/wall/bedjaoui.jpg"
import Barry from "@/public/image/wall/barry.jpg"



const Caroussel = (props) => {
    const [teamMembers, setTeamMembers] = React.useState([
        {
            name: "Marouane KHOUFID",
            image: Khoufid,
            linkedin: "https://www.linkedin.com/in/khoufid/"
        },
        {
            name: "Camille CABRI",
            image: Cabri,
            linkedin: "https://www.linkedin.com/in/camille-cabri-0515a019a/" 
        },
        {
            name: "Gabriel PAPALIA",
            image: None,
            linkedin: "https://www.linkedin.com/in/gabriel-papalia-b1a3921b6/"
        },
        {
            name: "Margaux PIERRE",
            image: Pierre,
            linkedin: "https://www.linkedin.com/in/margaux-pierre-627353218/"
        },
        {
            name: "Camille MIRIO",
            image: Mirio,
            linkedin: "https://www.linkedin.com/in/camille-mirio-80bb74257/"
        },
        {
            name: "Phuong Mai NGUYEN",
            image: None,
            linkedin: ""
        },
        {
            name: "Hind NAOUI",
            image: Naoui,
            linkedin: "https://www.linkedin.com/in/hind-naoui-6275aa21b/"
        },
        {
            name: "Diego FIEUX",
            image: Fieux,
            linkedin: "https://www.linkedin.com/in/diego-fieux-b666b2239/"            
        },
        {
            name: "Mathieu VASSAL",
            image: Vassal,
            linkedin: "https://www.linkedin.com/in/mathieu-vassal/"
        },
        {
            name: "Tessa ROCHÉ-QUARRÉ",
            image: Tessa,
            linkedin: "https://www.linkedin.com/in/tessa-roche-quarre-777880220/"
        },
        {
            name: "Zhanhe ZHANG",
            image: Zhang,
            linkedin: "https://www.linkedin.com/in/%E5%B1%95%E8%B5%AB-%E5%BC%A0-76571422a/"
        },
        {
            name: "Romaric REBOUYS",
            image: Rebouys,
            linkedin: "https://www.linkedin.com/in/romaric-rebouys-20b1b4253/"
        },
        {
            name: "Arthur FRINDEL",
            image: Frindel,
            linkedin: "https://www.linkedin.com/in/arthurfrindel580515152/"
        },
        {
            name: "Kiady RAJOELISOLO",
            image: Kiady,
            linkedin: "https://www.linkedin.com/in/kiady-rajoelisolo/"
        },
        {
            name: "Florian BELLUS",
            image: Bellus,
            linkedin: "https://www.linkedin.com/in/florian-bellus-b51255252/"
        },
        {
            name: "Adrien SAVOYE",
            image: Savoye,
            linkedin: "https://www.linkedin.com/in/adrien-savoye/"
        },
        {
            name: "Yucel Can CIRACI",
            image: Ciraci,
            linkedin: "https://www.linkedin.com/in/can-ciraci-85b206235/"
        },
        {
            name: "Rémi GARCIA",
            image: Garcia,
            linkedin: "https://www.linkedin.com/in/r%C3%A9mi-garcia-31t12r/"
        },
        {
            name: "Augustin LAURENT",
            image: Laurent,
            linkedin: "https://www.linkedin.com/in/augustin-laurent-204ab6196/"
        },
        {
            name: "Hugo BOUSSARD",
            image: Boussard,
            linkedin: "https://www.linkedin.com/in/hugo-boussard-a22621184/"
        },
        {
            name: "Gabriel SAUNDERS",
            image: Saunders,
            linkedin: "https://www.linkedin.com/in/gabriel-saunders-94982b18b/"
        },
        {
            name: "Mohamed BEDJAOUI",
            image: Bedjaoui,
            linkedin: "https://www.linkedin.com/in/mohamed-m-bedjaoui-4b26b6253/"
        },
        {
            name: "Ibrahima BARRY",
            image: Barry,
            linkedin: "https://www.linkedin.com/in/ibrahima-barry99/"
        },
        {
            name: "Gabriel FEDOU",
            image: None,
            linkedin: "https://www.linkedin.com/in/gabriel-fedou-1253b4212/"
        },
    ]);

    const shuffleTeamMembers = () => {
        const shuffledMembers = teamMembers.slice();
        for (let i = shuffledMembers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
        }
        setTeamMembers(shuffledMembers);
    };

    React.useEffect(() => {
        shuffleTeamMembers();
    },[]);
    
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
    };



    return (
            <div className="p-1">
                <SectionTitle
                    id="wall"
                    pretitle="L'ÉQUIPE"
                    title="Rencontrez notre équipe">
                </SectionTitle>
                <div className="slider-container">

                    <Slider {...settings} id="slider">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <a href={member.linkedin}>
                                    <Image src={member.image} alt={member.name} className="w-32 h-32 mx-auto mb-3 rounded-xl" />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-indigo-500">
                                    {member.name}
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
    );
}

export default Caroussel;