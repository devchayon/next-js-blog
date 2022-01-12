import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-5 md:px-10 mb-8 text-gray-800">
      <div className="border-b w-full inline-block border-gray-500 py-4 md:py-8">
        <div className="md:float-left block">
          <Link href="/" alt="" passHref>
            <span className="cursor-pointer font-bold text-2xl md:text-4xl ">
              Chayon
            </span>
          </Link>
        </div>
        <div className="hidden md:float-lest md:contents">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className="mt-2 block align-middle ml-4 font-semibold cursor-pointer md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
