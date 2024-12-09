'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Star, Heart, Search, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { FaShoppingBag, FaUser, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PiPinterestLogo } from 'react-icons/pi'
import Footer from './footer'

interface Product {
  name: string;
  price: number;
  salePrice: number | null;
  image: string;
  slug: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const thumbnails = [
    '/thumb1.png?height=80&width=80',
    '/thumb2.png?height=80&width=80',
    '/thumb3.png?height=80&width=80',
    '/thumb3.png?height=80&width=80'
  ];


  const similarProducts = [
    { name: 'Similar Product 1', price: 29.99, salePrice: 38, image: '/sim1.png', slug: 'similar-1' },
    { name: 'Similar Product 2', price: 34.99, salePrice: 31.99, image: '/sim2.png', slug: 'similar-2' },
    { name: 'Similar Product 3', price: 39.99, salePrice: 21.90, image: '/sim3.png', slug: 'similar-3' },
    { name: 'Similar Product 4', price: 27.99, salePrice: 24.99, image: '/sim4.png', slug: 'similar-4' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl"><span className="text-orange-500 font-bold text-2xl">Food</span>luck</div>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <AiOutlineMenu />
          </button>
          <ul
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}>
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
            <Link href={"/ShoppingCart"}> <button className="bg-gray-800 p-2 rounded-full">
              <FaShoppingBag />
            </button></Link>
            <Link href={"/Signup"}> <button className="bg-gray-800 p-2 rounded-full">
              <FaUser />
            </button></Link>
            <Link href={"/Checkout"}> <button className="bg-gray-800 p-2 rounded-full">
              <MdShoppingCartCheckout />
            </button></Link>
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
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Product Details</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Product Details</span></p>
        </div>
      </div>

      <div className="min-h-screen bg-[#FFF5F5]">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <ChevronLeft className="w-5 h-5" /> Prev
            </div>
            <div className="flex gap-2">
              Next <ChevronRight className="w-5 h-5" />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
                        {/* Product Images */}
                        <div className="lg:w-3/5">
              <div className="flex gap-6">
                <div className="space-y-4">
                  {thumbnails.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`block w-24 h-24 rounded-lg overflow-hidden ${
                        idx === activeImage ? 'ring-2 ring-orange-500' : ''
                      }`}
                    >
                      <Image
                        src={thumb}
                        alt={`Product view ${idx + 1}`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                <div className="flex-1">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                    <Image
                      src="/main.png?height=600&width=800"
                      alt="Main product image"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>


            {/* Product Info */}
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-sm">
                Hot Sale
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900">Yummy Chicken Chup</h1>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">5.0 Rating</span>
                <span className="text-sm text-gray-500">22 Review</span>
              </div>

              <div className="text-3xl font-bold text-orange-500">
                54.00$
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Add to cart
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex gap-2">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="flex gap-2">
                  Compare
                </Button>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex gap-2">
                  <span className="font-semibold">Category:</span>
                  <span className="text-gray-600">Pizza</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Tag:</span>
                  <span className="text-gray-600">Our Shop</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold">Share:</span>
                  <div className="flex gap-4">
                   
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8 ml-10">
                      <Facebook/>
                      <Instagram/>
                      <Twitter/>
                      <FaWhatsapp/>
                      <PiPinterestLogo/>

                      </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description" className='bg-orange-400'>Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews (24)</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-6">
                <p className="text-gray-600">
                  Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
                </p>
                <p className="text-gray-600">
                  Suspendisse cursus sodales placerat. Morbi eu laoreet ex. Curabitur blandit justo urna, ut porttitor est egestas nec. Pellentesque vestibulum hendrerit posuere. Sed at dolor non turpis accumsan et sagittis massa. Pharetra placerat lecturus urna semper tortor.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Benefits</h3>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Maecenas ullamcorper est et massa mattis condimentum</li>
                    <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus ex</li>
                    <li>Etiam nec massa et lectus faucibus ornare congue in nunc</li>
                    <li>Mauris eget elit accumsan, tempus purus vitae, ultricies nisi</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <p>Reviews content</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Similar Products</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.map((product, index) => (
              <Card key={index} className="group border-none shadow-sm">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">5.0</span>
                  </div>
                  <div className="flex gap-2 items-baseline mt-2">
                    <span className="font-bold text-orange-500">
                      ${product.salePrice?.toFixed(2)}
                    </span>
                    {product.salePrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
<Footer/>
    </div>

  );
};

export default ProductDetails;
