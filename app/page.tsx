"use client";
import Image from "next/image";
import Navbar from '@/components/Navbar'
import MarqueeDemoVertical from '@/components/CustomerSay'
import LayoutGridDemo from "@/components/PhotoLayout";
import AccordionDemo from "@/components/FAQ";
import Footer from "@/components/Footer";
import TabsDemo from "@/components/Tabs";
import CardDefault from "@/components/Card";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";

export default function Home() {
    return (
        <main>
            <Hero></Hero>
            <CardDefault></CardDefault>
            <LayoutGridDemo></LayoutGridDemo>
            <MarqueeDemoVertical></MarqueeDemoVertical>
            <AccordionDemo></AccordionDemo>
            <ContactUs></ContactUs>
            <Footer></Footer>
            <button onClick={async ()=>{
                await fetch('/api/emails',{method:"POST",body:JSON.stringify({email:"trkhamarat@gmail.com",firstname:"TARIK",message:"Bu mesaj içeriğidir."})},
                    )
            }}>
                SEND EMAİL
            </button>
        </main>
    );
}
