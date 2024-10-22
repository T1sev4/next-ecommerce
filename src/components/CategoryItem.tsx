import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const CategoryItem = () => {
  return (
    <Link
      href="/list?cat=test"
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src="https://images.pexels.com/photos/28846994/pexels-photo-28846994.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          className="object-cover"
          fill
          sizes="20vw"
        />
      </div>
      <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
    </Link>
  );
};

export default CategoryItem;
