"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";


export default function LayoutGridDemo() {
    return (
        <div className="h-auto py-20 w-full">

            <LayoutGrid cards={cards} />

        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                House in the woods
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                House above the clouds
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a
                unique living experience. It&apos;s a place where the sky meets home,
                and tranquility is a way of life.
            </p>
        </div>
    );
};

const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Greens all over
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Rivers are serene
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const SkeletonFive = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">Desert Dwelling</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house amidst the vast expanse of the desert, offering solitude and a connection with nature.
            </p>
        </div>
    );
};

const SkeletonSix = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">Urban Escape</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A modern home in the heart of the city, blending contemporary design with urban energy.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2 md:row-span-2",
        thumbnail:"https://thumbs2.imgbox.com/b1/d8/VmJSpgwn_t.jpeg"

    },
    {
        id: 2,
        content: <SkeletonOne />,
        className: "md:col-span-2 md:row-span-1.7",
        thumbnail:"https://thumbs2.imgbox.com/4d/46/QkOy9mhZ_t.jpg",
    },
    {
        id: 3,
        content: <SkeletonOne />,
        className: "md:col-span-2 md:row-span-2",
        thumbnail:"https://thumbs2.imgbox.com/e7/00/UHJ5RIlS_t.jpeg"

    },
    {
        id: 4,
        content: <SkeletonOne />,
        className: "md:col-span-2 md:row-span-1",
        thumbnail:"https://thumbs2.imgbox.com/0c/88/z02w9B1A_t.jpeg"
    },
    {
        id: 4,
        content: <SkeletonOne />,
        className: "md:col-span-3 md:row-span-2",
        thumbnail:"https://thumbs2.imgbox.com/0c/88/z02w9B1A_t.jpeg"
    },
    {
        id: 5,
        content: <SkeletonOne />,
        className: "md:col-span-3 md:row-span-2 ",
        thumbnail:"https://thumbs2.imgbox.com/5a/2d/mBRVqj3y_t.jpeg"
    },
    {
        id: 6,
        content: <SkeletonOne />,
        className: "md:col-span-6 md:row-span-2",
        thumbnail:"https://thumbs2.imgbox.com/4b/fe/Rl5jba4g_t.jpeg"

    },
    {
        id: 6,
        content: <SkeletonOne />,
        className: "md:col-span-2 md:row-span-2",
        thumbnail:"https://thumbs2.imgbox.com/9e/bc/FVN1k9fN_t.jpeg"
    },
    {
        id: 6,
        content: <SkeletonOne />,
        className: "md:col-span-4 md:row-span-2",
        thumbnail:"https://thumbs2.imgbox.com/7f/fd/0fEsCfpp_t.jpeg"

    },

];
