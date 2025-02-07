import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { siteStaticData } from '@/staticData.js'
import TopBanner from "@/components/TopBanner";
import HeaderDetails from "@/components/HeaderDetails";
import MiddleBanner from "@/components/MiddleBanner";
import ImageText from "@/components/ImageText";
import CardImageContent from "@/components/CardImageContent";
import TabContentSection from "@/components/TabContentSection";
import FooterDetails from "@/components/FooterDetails";

export default function Home() {
  // const HeaderData = siteStaticData.headerData
  const homePageData = siteStaticData.homepageData
  // const data = siteStaticData.homePageData.middleBanner
  // console.log("HeaderData", HeaderData);

  return (
    <>
      <div>
        <HeaderDetails sectionDetails={siteStaticData.headerData} />
        {/* <HeaderDetails /> */}
        <TopBanner sectionDetails={homePageData} />
        <div className="pt-5 px-5">
          <CardImageContent sectionDetails={homePageData.cardImageContentSection} />
        </div>
        <div className="pt-5">
          <MiddleBanner sectionDetails={siteStaticData.homepageData.middleBanner} />
        </div>
        <div className="pt-5 px-5">
          <ImageText sectionDetails={homePageData.imageHeadingSection} />
        </div>
        <div className="pt-5 px-5">
          <TabContentSection sectionDetails={homePageData.tabSection} />
        </div>
        <div className="pt-5">
          <FooterDetails />
        </div>
      </div>
    </>
  );
}
