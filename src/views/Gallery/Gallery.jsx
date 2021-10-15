import React from "react";
import "./Gallery.scss";
import ImageGallery from "react-image-gallery";
import { Container } from "reactstrap";

const images = [
  {
    original:"https://i.ibb.co/YfpBCWZ/Whats-App-Image-2021-10-15-at-7-17-41-AM.jpg",
    thumbnail:"https://i.ibb.co/YfpBCWZ/Whats-App-Image-2021-10-15-at-7-17-41-AM.jpg",
  },
  {
    original:"https://i.ibb.co/NWBn2Rq/Whats-App-Image-2021-10-15-at-7-17-42-AM.jpg",
    thumbnail:"https://i.ibb.co/YfpBCWZ/Whats-App-Image-2021-10-15-at-7-17-42-AM.jpg",
  },
  {
    original: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.fkiv3-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C90527533_221134245921144_6851319283330606457_n.jpg%3F_nc_ht%3Dinstagram.fkiv3-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_ohc%3D9fbnMnr2MvEAX-IRGVP%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D53d181460153f1bcd95c46b958199d20%26oe%3D616FB3C8%26_nc_sid%3D83d603",
    thumbnail: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.fkiv3-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C90527533_221134245921144_6851319283330606457_n.jpg%3F_nc_ht%3Dinstagram.fkiv3-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_ohc%3D9fbnMnr2MvEAX-IRGVP%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D53d181460153f1bcd95c46b958199d20%26oe%3D616FB3C8%26_nc_sid%3D83d603",
  },
  {
    original: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.flwo4-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C90087503_2508071932738637_2958329330528484041_n.jpg%3F_nc_ht%3Dinstagram.flwo4-1.fna.fbcdn.net%26_nc_cat%3D105%26_nc_ohc%3D00Su8kTSdl8AX_NjZVV%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D8769266137611ccfa12281117251ad32%26oe%3D61708E27%26_nc_sid%3D83d603",
    thumbnail: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.flwo4-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C90087503_2508071932738637_2958329330528484041_n.jpg%3F_nc_ht%3Dinstagram.flwo4-1.fna.fbcdn.net%26_nc_cat%3D105%26_nc_ohc%3D00Su8kTSdl8AX_NjZVV%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D8769266137611ccfa12281117251ad32%26oe%3D61708E27%26_nc_sid%3D83d603",
  },
  {
    original: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.flwo4-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C89687362_208493013589219_5738430560276385247_n.jpg%3F_nc_ht%3Dinstagram.flwo4-1.fna.fbcdn.net%26_nc_cat%3D107%26_nc_ohc%3DrrvoVmSQsQYAX8BeMyR%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D4d04258efd0232e417079aaca08802c4%26oe%3D616F8B67%26_nc_sid%3D83d603",
    thumbnail: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.flwo4-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C89687362_208493013589219_5738430560276385247_n.jpg%3F_nc_ht%3Dinstagram.flwo4-1.fna.fbcdn.net%26_nc_cat%3D107%26_nc_ohc%3DrrvoVmSQsQYAX8BeMyR%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D4d04258efd0232e417079aaca08802c4%26oe%3D616F8B67%26_nc_sid%3D83d603",
  },
  {
    original: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.fkiv3-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C87701991_2542119196047113_5846878905774911411_n.jpg%3F_nc_ht%3Dinstagram.fkiv3-1.fna.fbcdn.net%26_nc_cat%3D105%26_nc_ohc%3DhkHeRgzdehkAX9VPnT3%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3De49f638410b176ab8bd5cf76bffb70cc%26oe%3D6170764F%26_nc_sid%3D83d603",
    thumbnail: "https://gramhir.com/hosted-by-instagram/url=https%3A%7C%7C%7C%7Cinstagram.fkiv3-1.fna.fbcdn.net%7C%7Cv%7C%7Ct51.2885-15%7C%7Ce35%7C%7C87701991_2542119196047113_5846878905774911411_n.jpg%3F_nc_ht%3Dinstagram.fkiv3-1.fna.fbcdn.net%26_nc_cat%3D105%26_nc_ohc%3DhkHeRgzdehkAX9VPnT3%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3De49f638410b176ab8bd5cf76bffb70cc%26oe%3D6170764F%26_nc_sid%3D83d603",
  },
  
];

export default function About() {
  return (
    <div className="about">
      <Container className="about_container">
        <h1 className="text-center mb-5">Gallery</h1>
        <ImageGallery items={images} />
      </Container>
    </div>
  );
}
