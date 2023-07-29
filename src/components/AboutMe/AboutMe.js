import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/david-barrios98/portafolio-atenea",
            logo:logoGithub,
        },
        {
            name:"Linkedind",
            link:"https://www.linkedin.com/in/david-enrique-barrios-rojas-3134691a3/",
            logo:logoLinkeind,
        }
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, i'm</p>
                        <p>David Barrios Rojas</p>
                        <p>Full stack Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                    Ing. de Sistemas, Con 2 años de experiencia en el desarrollo de software con 
                    .NET CORE, javascript, Angular. 
                    He diseñado e implementado tiendas virtuales utilizando CMS (WordPress). 
                    Conocimiento en sintaxis SQL. 
                    Adaptable al cambio , nuevas tecnologías y metodologías de desarrollo ágil.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/profile.png" alt="David Barrios Rojas - Full stack Developer"/>
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;