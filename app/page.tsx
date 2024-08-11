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
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <main>
            <Hero></Hero>
            <CardDefault></CardDefault>
            <Stats></Stats>
            <LayoutGridDemo></LayoutGridDemo>
            <MarqueeDemoVertical></MarqueeDemoVertical>
            <AccordionDemo></AccordionDemo>
            <ContactUs></ContactUs>
            <Footer></Footer>
            <button onClick={async ()=>{
                try {
                    const response = await fetch('/api/emails', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: "trkhamarat@gmail.com",
                            firstname: "TARIK",
                            message: "Bu mesaj içeriğidir."
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }

                    const data = await response.json();
                    console.log('Success:', data);
                } catch (error) {
                    console.error('Error:', error);
                }
            }}>
                SEND EMAİL
            </button>
        </main>
    );
}
