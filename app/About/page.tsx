'use client'

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { ChefHat, Coffee, Search, Star, Wind } from 'lucide-react'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'

export default function About() {
    const teamMembers = [
        {
          name: "Mark Henry",
          role: "Owner",
          image: "/teams.png",
        },
        {
          name: "Lucky Helen",
          role: "Chef",
          image: "/teams.png",
        },
        {
            name: "Moon Henry",
            role: "Founder",
            image: "/teams.png",
          },
          {
            name: "Tom Monrow",
            role: "Specialist",
            image: "/teams.png",
          },
      ];
      

    const menuItems = [
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        }
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
  
    return (
        <div className='bg-white min-h-screen'>
            <header className="bg-black py-2">
                <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    <div className="text-white font-bold text-2xl">
                        <span className="text-orange-500 font-bold text-2xl">Food</span>luck
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                    >
                        <AiOutlineMenu />
                    </button>
                    <ul
                        className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}><br/>       
                        <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                        <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
                        <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
                        <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
                        <li><Link href="/About" className="hover:text-orange-500">About</Link></li>
                        <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
                        <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
                    </ul>
                    <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-4 mt-4 md:mt-0">
                        <div className="relative flex-grow md:flex-grow-0">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full md:w-auto bg-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                        </div>
                        <Link href={"/ShoppingCart"}> 
                            <button className="bg-gray-800 p-2 rounded-full">
                                <FaShoppingBag />
                            </button>
                        </Link>
                        <Link href={"/Signup"}> 
                            <button className="bg-gray-800 p-2 rounded-full">
                                <FaUser />
                            </button>
                        </Link>
                        <Link href={"/Checkout"}> 
                            <button className="bg-gray-800 p-2 rounded-full">
                                <MdShoppingCartCheckout />
                            </button>
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <div className="relative h-48 md:h-64 bg-gray-800">
                <Image
                    src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
                    alt="Menu Hero"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white text-center">About us</h1>
                    <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; About</span></p>
                </div>
            </div>

            <div className="bg-pink-50/80">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Food Images Grid */}
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/abbout.png?height=300&width=300"
                                alt="About Image"
                                width={650}
                                height={50}
                                className="rounded-lg w-full object-cover"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6 w-full lg:w-[520px]">
                            <h2 className="text-3xl font-bold leading-tight">
                                Food is an important part Of a balanced Diet
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit
                                libero sit volutpat tempus imperdiet. Ut ultricies tortor ac ligula pulvinar, vitae
                                maximus nisi interdum.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                                    Order Now
                                </button>
                                <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors">
                                    Watch Video
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-center leading-tight">
                            Why Choose us
                        </h2>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                        </p>

                        <Image
                            src="/why.png?height=468&width=192&text=Background+Image"
                            alt="Background"
                            width={1920}
                            height={460}
                            className="filter brightness-50 contrast-125" />
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mt-20">
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <ChefHat className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Best Chef</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Coffee className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold">120 Item food</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Wind className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Clean Environment</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Member Section */}
            <section className="bg-orange-400 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-2 text-white">Team Member</h2>
                    <p className='text-sm font-normal text-white text-center w-full lg:w-[418px] mx-auto mb-12'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative w-full aspect-square mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-orange-600">{member.name}</h3>
                                    <p className="text-gray-500">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 bg-pink-50">
                <div className="container px-4 text-center max-w-3xl">
                    <h2 className="text-xl font-serif italic text-orange-500">About us</h2>
                    <h2 className="text-3xl font-bold mb-8">What our clients are saying</h2>
                    <div className="mb-6">
                        <Image
                            src="/clients.png?height=80&width=80"
                            alt="Client"
                            width={80}
                            height={80}
                            className="rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-4 w-full lg:w-[420px] mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.
                        </p>
                        <div className="flex justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <h3 className="font-semibold">Alamin Hasan</h3>
                        <p className="text-sm text-gray-500">Food Specialist</p>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="py-16 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Food Menu</h2>
                    <div className="flex justify-center gap-4 mb-8">
                        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((item) => (
                            <button
                                key={item}
                                className="px-4 py-2 text-gray-600 hover:text-orange-500 focus:text-orange-500"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                                <span className="text-orange-500">${item.price}</span>
                            </div>
                        ))}
                    </div>
                    <button className='bg-white ml-auto flex justify-center items-center rounded-lg border-2 border-orange-400 w-[143px] h-[52px] text-orange-400 mx-auto mt-10'>
                        View menu
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    )
}
