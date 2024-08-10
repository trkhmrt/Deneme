"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import React from "react";

export default function TabsDemo() {



    const tabs = [
        {
            title: "Product",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Services tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Playground tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Content",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Content tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Random",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Random tab</p>
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    const data = [
        {
            src: "https://thumbs2.imgbox.com/9e/bc/FVN1k9fN_t.jpeg",
            title: "Pineapple",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            src: 'https://thumbs2.imgbox.com/5d/14/1df74bvQ_t.jpg',
            title: "Strawberry",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore."
        },
        {
            src: 'https://images2.imgbox.com/0c/88/z02w9B1A_o.jpeg',
            title: "Apple",
            content: "Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            src: 'https://images2.imgbox.com/5a/2d/mBRVqj3y_o.jpeg',
            title: "Banana",
            content: "Duis aute irure dolor in reprehenderit in voluptate."
        }
    ];
    return (
        <main className="h-auto w-auto py-6 bg-slate-50 flex items-center justify-center flex-wrap">
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center w-full">
                Hizmetlerimiz
            </div>
            {data.map((item, index) => (
                <div className="bg-white w-72 h-96 shadow-md rounded m-3" key={index}>
                    <div className="h-3/4 w-full">
                        <img className="w-full h-full object-cover rounded-t" src={item.src} alt={item.title}/>
                    </div>
                    <div className="w-full h-1/4 p-3">
                        <a href="#" className="hover:text-yellow-600 text-gray-700">
                            <span className="text-lg font-semibold uppercase tracking-wide">{item.title}</span>
                        </a>
                        <p className="text-gray-600 text-sm leading-5 mt-1">{item.content}</p>
                    </div>
                </div>
            ))}


        </main>
    );
};
