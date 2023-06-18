import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/Banner/2700-DW.png'
import img2 from '../../../assets/Banner/Brother-DCP-T700W.png'
import img3 from '../../../assets/Banner/toners.png'
import img4 from '../../../assets/Banner/ink-catridge.png'
import img5 from '../../../assets/Banner/drum.png'
import img6 from '../../../assets/Banner/fuser.png'
import img7 from '../../../assets/Banner/heads.png'

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay>
                <div>
                    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                            <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                                <div class="max-w-md mx-auto text-center lg:text-left">
                                    <header>
                                        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Printers</h2>

                                        <p class="mt-4 text-gray-500">
                                            All Kinds Of Printers Like Inkjet, Laserjet, Thermal Printers Are Available Here For Sales And Services.
                                        </p>
                                    </header>

                                    <Link
                                        href="#"
                                        class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>

                            <div class="lg:col-span-2 lg:py-8">
                                <ul class="grid grid-cols-2 gap-4 border border-black">
                                    <li>

                                        <img
                                            src={img1}
                                            alt=""
                                            class="w-[80%] rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-2xl text-gray-900"
                                            >
                                                Laserjet Printer
                                            </h3>
                                        </div>

                                    </li>

                                    <li>

                                        <img
                                            src={img2}
                                            alt=""
                                            class="w-[80%] rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-2xl text-gray-900"
                                            >
                                                Inkjet Printer
                                            </h3>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                            <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                                <div class="max-w-md mx-auto text-center lg:text-left">
                                    <header>
                                        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Toner & Catridge</h2>

                                        <p class="mt-4 text-gray-500">
                                            All Kinds Of Toner And Catridges Also Available in Our Printer Zone BD.
                                        </p>
                                    </header>

                                    <Link
                                        href="#"
                                        class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>

                            <div class="lg:col-span-2 lg:py-8">
                                <ul class="grid grid-cols-2 gap-4 border border-black">
                                    <li>

                                        <img
                                            src={img3}
                                            alt=""
                                            class="w-[80%] rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-2xl text-gray-900"
                                            >
                                                Toner
                                            </h3>
                                        </div>

                                    </li>

                                    <li>
                                        <Link href="#" class="block group">
                                            <img
                                                src={img4}
                                                alt=""
                                                class="w-[80%] rounded aspect-square"
                                            />

                                            <div class="mt-3">
                                                <h3
                                                    class="font-medium text-2xl text-gray-900"
                                                >
                                                    Catridges
                                                </h3>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                            <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                                <div class="max-w-md mx-auto text-center lg:text-left">
                                    <header>
                                        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Spare Parts</h2>

                                        <p class="mt-4 text-gray-500">
                                            All Kinds Of Priinters Spare Parts Also Available in Our Printer Zone BD.
                                        </p>
                                    </header>

                                    <Link
                                        href="#"
                                        class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>

                            <div class="lg:col-span-2 lg:py-8">
                                <ul class="grid grid-cols-3 gap-4 border border-black">
                                    <li>

                                        <img
                                            src={img5}
                                            alt=""
                                            class="w-[80%] rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-2xl text-gray-900"
                                            >
                                                Drum
                                            </h3>
                                        </div>

                                    </li>

                                    <li>

                                        <img
                                            src={img6}
                                            alt=""
                                            class="w-[80%] rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-2xl text-gray-900"
                                            >
                                                Fuser
                                            </h3>
                                        </div>

                                    </li>
                                    <li>

                                        <img
                                            src={img7}
                                            alt=""
                                            class="w-[80%] rounded aspect-square"
                                        />

                                        <div class="mt-3">
                                            <h3
                                                class="font-medium text-2xl text-gray-900"
                                            >
                                                Heads
                                            </h3>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;