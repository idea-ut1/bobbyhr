import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "@/components/home/sectionTitle";
import Mirio from "@/public/image/wall/camille-mirio.jpg";
import Pierre from "@/public/image/wall/margaux-pierre.jpg";



const Caroussel = (props) => {
    const [teamMembers, setTeamMembers] = React.useState([
        {
            name: "Marouane KHOUFID",
            image: "https://media.licdn.com/dms/image/D4E03AQF9itq175po9Q/profile-displayphoto-shrink_800_800/0/1667066373861?e=1717027200&v=beta&t=sMxDZpAkp2VN3y7RXQ4MZ30IQIU3qU_cPioq8cLPg7o",
            linkedin: "https://www.linkedin.com/in/khoufid/"
        },
        {
            name: "Camille CABRI",
            image: "https://media.licdn.com/dms/image/D4D35AQF6ib7Waa_5lw/profile-framedphoto-shrink_400_400/0/1709568980607?e=1717506000&v=beta&t=o3sBeUxOt7V3PI67I49BX9hLtjeoEoAghtwcWI3xc_s",
            linkedin: "https://www.linkedin.com/in/camille-cabri-0515a019a/" 
        },
        {
            name: "Gabriel PAPALIA",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
            linkedin: "https://www.linkedin.com/in/gabriel-papalia-b1a3921b6/"
        },
        {
            name: "Margaux PIERRE",
            image: "https://media.licdn.com/dms/image/C4E03AQEEeaPPSlYavQ/profile-displayphoto-shrink_400_400/0/1633984880983?e=1722470400&v=beta&t=7vj9CCFMPNDdRwbX2ybf-O42PyACddnm6EVKr3pUqhw",
            linkedin: "https://www.linkedin.com/in/margaux-pierre-627353218/"
        },
        {
            name: "Camille MIRIO",
            image: "https://media.licdn.com/dms/image/D4E03AQEtWJhLMy3YGw/profile-displayphoto-shrink_400_400/0/1669031662356?e=1722470400&v=beta&t=5ghYuTxQLijFTOpVEz5g6cTgQqPaU9FHrR5hEH9aTXM",
            linkedin: "https://www.linkedin.com/in/camille-mirio-80bb74257/"
        },
        {
            name: "Phuong Mai NGUYEN",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
            linkedin: ""
        },
        {
            name: "Hind NAOUI",
            image: "https://media.licdn.com/dms/image/C4D03AQHnefZKgzTj4Q/profile-displayphoto-shrink_800_800/0/1636184960109?e=1717027200&v=beta&t=1ImBEsYggYm1qvpYwp8Z8U-AIRbX6UHwCgmVA6CnggQ",
            linkedin: "https://www.linkedin.com/in/hind-naoui-6275aa21b/"
        },
        {
            name: "Diego FIEUX",
            image: "https://media.licdn.com/dms/image/C4D03AQHHP__AHK0H3g/profile-displayphoto-shrink_800_800/0/1652477768544?e=1717027200&v=beta&t=OGBznlmA1Fo0Bf3NdO5DVnBs-Ak8lE4-tdC7ebHBs0A",
            linkedin: "https://www.linkedin.com/in/diego-fieux-b666b2239/"            
        },
        {
            name: "Mathieu VASSAL",
            image: "https://media.licdn.com/dms/image/C4E03AQG9V-gFSdG-7g/profile-displayphoto-shrink_800_800/0/1651684223150?e=1717027200&v=beta&t=0FlShO6-NKZYBDKF4oIoTFxpuzMsKql7rD0nYU8K0hc",
            linkedin: "https://www.linkedin.com/in/mathieu-vassal/"
        },
        {
            name: "Tessa ROCHÉ-QUARRÉ",
            image: "https://media.licdn.com/dms/image/D4E03AQGigd_6_OH5Pw/profile-displayphoto-shrink_400_400/0/1712825504127?e=1720656000&v=beta&t=8wktiZCT1PrndWVWagxwTzDIoF76OjZ3fkcVNc-pDww",
            linkedin: "https://www.linkedin.com/in/tessa-roche-quarre-777880220/"
        },
        {
            name: "Zhanhe ZHANG",
            image: "https://media.licdn.com/dms/image/C4D03AQHcmfG9bVijiQ/profile-displayphoto-shrink_800_800/0/1641408231317?e=1717027200&v=beta&t=WGu4rBgL9BvBOoQ729AWpu6GUz_poKDYZDM1rB694MU",
            linkedin: "https://www.linkedin.com/in/%E5%B1%95%E8%B5%AB-%E5%BC%A0-76571422a/"
        },
        {
            name: "Romaric REBOUYS",
            image: "https://media.licdn.com/dms/image/D4E03AQGZtpkKG_hqEw/profile-displayphoto-shrink_800_800/0/1705752611061?e=1717027200&v=beta&t=Ztp8frpVbuQ9IseQWftwmTX6XrmEtrBx6NSg7q7YGgE",
            linkedin: "https://www.linkedin.com/in/romaric-rebouys-20b1b4253/"
        },
        {
            name: "Arthur FRINDEL",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
            linkedin: "https://www.linkedin.com/in/arthurfrindel580515152/"
        },
        {
            name: "Kiady RAJOELISO",
            image: "https://media.licdn.com/dms/image/D4E03AQFQ50tuXziguA/profile-displayphoto-shrink_800_800/0/1681851503259?e=1717027200&v=beta&t=7iyBkQ94W331R3kMkEeYDHM0-ziMRNKkM_xcxRSVut4",
            linkedin: "https://www.linkedin.com/in/kiady-rajoelisolo/"
        },
        {
            name: "Florian BELLUS",
            image: "https://media.licdn.com/dms/image/D4D03AQEfP10Ez3VdBA/profile-displayphoto-shrink_800_800/0/1683807342664?e=1717027200&v=beta&t=rsUcnUB0a7bJIn95du_GqvNU4miPnD4Ez3cQZF2p9fI",
            linkedin: "https://www.linkedin.com/in/florian-bellus-b51255252/"
        },
        {
            name: "Adrien SAVOYE",
            image: "https://media.licdn.com/dms/image/D5603AQHgQmvajMic3w/profile-displayphoto-shrink_800_800/0/1695393932917?e=1717027200&v=beta&t=_Q-TEGRWi_5D5jMCU8guRCAEmqLv0zz-qsnpHOaMnt0",
            linkedin: "https://www.linkedin.com/in/adrien-savoye/"
        },
        {
            name: "Yucel Can CIRACI",
            image: "https://media.licdn.com/dms/image/D4D03AQGYrF1qw3lKkA/profile-displayphoto-shrink_800_800/0/1711367103487?e=1717027200&v=beta&t=NXag3yk6PxRdTbHr2D-cc71jjH2GH-KGFpFLHEKjbzs",
            linkedin: "https://www.linkedin.com/in/can-ciraci-85b206235/"
        },
        {
            name: "Rémi GARCIA",
            image: "https://media.licdn.com/dms/image/D4E03AQF_gAUkNLFTNg/profile-displayphoto-shrink_800_800/0/1706259324808?e=1717027200&v=beta&t=SjO_zBTsPiPJ9msVB367ws9S-dEaS5b6MH4o-nIzNH4",
            linkedin: "https://www.linkedin.com/in/r%C3%A9mi-garcia-31t12r/"
        },
        {
            name: "Augustin LAURENT",
            image: "https://media.licdn.com/dms/image/D4E03AQHKjXHb1AvwRg/profile-displayphoto-shrink_800_800/0/1693496045599?e=1721260800&v=beta&t=UMUVG9770qHRVIdCpc8Xc4iWzU9BAr2Bpt6bS_YiXhw",
            linkedin: "https://www.linkedin.com/in/augustin-laurent-204ab6196/"
        },
        {
            name: "Hugo BOUSSARD",
            image: "https://media.licdn.com/dms/image/C4E03AQGfOHTZjCd6QA/profile-displayphoto-shrink_800_800/0/1622104508769?e=1717027200&v=beta&t=fPq7tOL_P1hVxP33OfTM4nEwAL2G30ZgvXcRLPrXEgU",
            linkedin: "https://www.linkedin.com/in/hugo-boussard-a22621184/"
        },
        {
            name: "Gabriel SAUNDERS",
            image: "https://media.licdn.com/dms/image/D4E03AQEFEXcDcB4FEw/profile-displayphoto-shrink_400_400/0/1716808350714?e=1722470400&v=beta&t=OOFNTzfMmAIOi079DoNNUFkpssnyhzE9rUWvfDc6QQE",
            linkedin: "https://www.linkedin.com/in/gabriel-saunders-94982b18b/"
        },
        {
            name: "Mohamed BEDJAOUI",
            image: "https://media.licdn.com/dms/image/D4E03AQH4pAEPq4qMuQ/profile-displayphoto-shrink_400_400/0/1712735831840?e=1720656000&v=beta&t=JX72jzqIO9lEFPjqV_so9qzqEc3cdpRPpbbVVxZPkXo",
            linkedin: "https://www.linkedin.com/in/gabriel-saunders-94982b18b/"
        },
        {
            name: "Ibrahima BARRY",
            image: "https://media.licdn.com/dms/image/D4E35AQFGXWWfX8Z6PQ/profile-framedphoto-shrink_800_800/0/1697183221996?e=1717095600&v=beta&t=T0knz9WMcn57WGnccMBur9qF12tY7LScxhXgLINxhsU",
            linkedin: "https://www.linkedin.com/in/ibrahima-barry99/"
        },
        {
            name: "Gabriel FEDOU",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
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
                                    <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto mb-3 rounded-xl" />
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