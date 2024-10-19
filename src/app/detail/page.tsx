'use client'
import { AnimatedUpView } from "@/components/generic/animate";
import Footer from "@/components/generic/footer";
import Header from "@/components/generic/header";
import CallToAction from "./call-to-action";
import ExploreSection from "./explore-section";
import ProductDescription from "./product-description";
import ProductImages from "./product-images";
import ProductOverview from "./product-overview";
import ProductVideo from "./product-video";
import RelatedProducts from "./related-products";
import Specifications from "./specifications";


export default function ProductPageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container flex flex-col gap-12 px-4 py-8 max-w-6xl mx-auto text-2xl leading-relaxed">
        <AnimatedUpView delay={0.1}> <ProductOverview /> </AnimatedUpView>
        <AnimatedUpView delay={0.2}> <ProductVideo /> </AnimatedUpView>
        <AnimatedUpView delay={0.3}> <ProductDescription /> </AnimatedUpView>
        <AnimatedUpView delay={0.4}> <ProductImages /> </AnimatedUpView>
        <AnimatedUpView delay={0.5}> <Specifications /> </AnimatedUpView>
        <AnimatedUpView delay={0.6}> <RelatedProducts /> </AnimatedUpView>
        <AnimatedUpView delay={0.7}> <ExploreSection /> </AnimatedUpView>
        <AnimatedUpView delay={0.8}> <CallToAction /> </AnimatedUpView>
      </main>
      <Footer />
    </div>
  )
}