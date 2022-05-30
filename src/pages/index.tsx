import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const navigation = [
  { name: 'About', href: '#', current: false },
  { name: 'Process', href: '#', current: false },
  { name: 'Platform', href: '#', current: false },
  { name: 'Faq', href: '#', current: false },
  { name: 'Testimonials', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

const posts = [
  {
    id: 1,
    logoUrl: 'app-95-1.png',
    description:
      'Lorem ipsum dolor sit amet exceur saten monara consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Michael Robert',
      href: '#',
      imageUrl:
        'http://mystaffonline1.flywheelsites.com/wp-content/uploads/2022/03/app-94-1.png',
    },
    place: 'Chicago',
  },
  {
    id: 2,
    logoUrl: 'app-95-1.png',
    description:
      'Lorem ipsum dolor sit amet exceur saten monara consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Michael Robert',
      href: '#',
      imageUrl:
        'http://mystaffonline1.flywheelsites.com/wp-content/uploads/2022/03/app-94-1.png',
    },
    place: 'Chicago',
  },
  {
    id: 3,
    logoUrl: 'app-95-1.png',
    description:
      'Lorem ipsum dolor sit amet exceur saten monara consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Michael Robert',
      href: '#',
      imageUrl:
        'http://mystaffonline1.flywheelsites.com/wp-content/uploads/2022/03/app-94-1.png',
    },
    place: 'Chicago',
  },
  {
    id: 4,
    logoUrl: 'app-95-1.png',
    description:
      'Lorem ipsum dolor sit amet exceur saten monara consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Michael Robert',
      href: '#',
      imageUrl:
        'http://mystaffonline1.flywheelsites.com/wp-content/uploads/2022/03/app-94-1.png',
    },
    place: 'Chicago',
  },
  {
    id: 5,
    logoUrl: 'app-95-1.png',
    description:
      'Lorem ipsum dolor sit amet exceur saten monara consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Michael Robert',
      href: '#',
      imageUrl:
        'http://mystaffonline1.flywheelsites.com/wp-content/uploads/2022/03/app-94-1.png',
    },
    place: 'Chicago',
  },
  {
    id: 6,
    logoUrl: 'app-95-1.png',
    description:
      'Lorem ipsum dolor sit amet exceur saten monara consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'Michael Robert',
      href: '#',
      imageUrl:
        'http://mystaffonline1.flywheelsites.com/wp-content/uploads/2022/03/app-94-1.png',
    },
    place: 'Chicago',
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Index = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState<any>();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <ParallaxProvider>
        <Disclosure as="nav" className="fixed z-50 w-full border-b-2 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 transition-all sm:px-6 lg:px-8">
                <div
                  className={`relative flex items-center justify-between transition-all ${
                    clientWindowHeight > 100 ? 'h-16' : 'h-20'
                  }`}
                >
                  <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex grow items-center">
                      <img
                        className={`block w-auto lg:hidden ${
                          clientWindowHeight > 100 ? 'h-8' : 'h-12'
                        }`}
                        src="/assets/img/mystaffonlinelogo-1.png"
                        alt="logo"
                      />
                      <img
                        className={`hidden w-auto lg:block transition-all ${
                          clientWindowHeight > 100 ? 'h-8' : 'h-12'
                        }`}
                        src="/assets/img/mystaffonlinelogo-1.png"
                        alt="logo"
                      />
                    </div>
                    <div className="hidden items-center sm:ml-6 lg:flex">
                      <div className="flex space-x-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-[#33475b]  hover:opacity-70 uppercase',
                              'px-3 rounded-md text-sm font-normal'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-[#33475b]  hover:opacity-70 uppercase',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="pt-20"></div>
        <div className="overflow-hidden bg-white py-20 lg:py-24">
          <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative lg:grid lg:grid-cols-3 lg:items-center lg:gap-0">
              <div className="relative col-span-2" aria-hidden="true">
                <div className="relative mx-auto min-h-[570px] max-w-[600px] px-2">
                  <img
                    className="absolute bottom-0 right-0 mx-auto max-w-[600px] scale-150 rounded-2xl"
                    width={600}
                    src="/assets/img/app-97-2.png"
                    alt=""
                  />

                  <img
                    className="absolute top-1/2 left-1/2 max-w-[258px] -translate-x-1/2 -translate-y-1/2"
                    width={258}
                    src="/assets/img/app-9a1-1.png"
                    alt=""
                  />

                  <Parallax
                    speed={7}
                    className="absolute top-1/2 w-full -translate-y-1/2"
                  >
                    <img
                      className="absolute top-1/2 left-1/2 w-full max-w-[398px] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl"
                      src="/assets/img/app-9a1-2.png"
                      alt=""
                    />
                  </Parallax>
                  <img
                    className="absolute top-10 mx-auto max-w-[173px] rounded-2xl shadow-2xl"
                    width={173}
                    src="/assets/img/app-9a1-1.jpg"
                    alt=""
                  />
                  <img
                    className="absolute bottom-24 right-0 mx-auto max-w-[217px] rounded-2xl shadow-2xl"
                    width={217}
                    src="/assets/img/app-9a1-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="relative">
                <span className="mb-2 inline-block text-lg font-light text-[#415a76]">
                  Our Difference
                </span>
                <h3 className="mb-8 text-5xl font-bold leading-tight  tracking-tight text-[#33475b] sm:text-5xl">
                  Your Sourcing Solution for Offshore Talent
                </h3>
                <p className="mt-3 text-[17px] font-[300] leading-[31px] tracking-wide text-[#415a76]">
                  We know how difficult it is to find quality web developers and
                  designers. Finding consistent & reliable ones has its own set
                  of challenges. We provide you with dedicated team members that
                  learn your business, understand your expectations and take
                  over the headaches of trying to do it all yourself.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#415a76] px-4 py-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="relative mx-auto max-w-lg lg:max-w-[1170px]">
            <div>
              <span className="mb-2 block text-center text-lg font-light text-white">
                Testimonials
              </span>
              <h3 className="mx-auto max-w-[490px] text-center text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Words From Our Clients
              </h3>
            </div>
            <div className="mt-8 grid gap-8 pt-12 lg:grid-cols-3 lg:gap-5">
              {posts.map((item, i) => (
                <AnimationOnScroll
                  delay={300 + (i + 1) * 100}
                  key={item.id}
                  animateIn="animate__fadeIn"
                  animatePreScroll={false}
                  animateOnce
                >
                  <div className="rounded-lg bg-white p-11">
                    <div className="flex items-center justify-between">
                      <img
                        className="h-[16px] w-[105px]"
                        src="/assets/img/app-98-3.png"
                        alt=""
                      />
                      <img src={`/assets/img/${item.logoUrl}`} alt="" />
                    </div>
                    <div className="mt-4 block">
                      <p className="mt-3 text-[17px] font-[300] leading-[31px] tracking-wide text-[#415a76]">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="shrink-0">
                        <a href={item.author.href}>
                          <span className="sr-only">{item.author.name}</span>
                          <img
                            className="h-[55px] w-[55px] rounded-full"
                            src={item.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3 font-RobotoCondensed">
                        <p className="text-lg font-bold text-[#415b76]">
                          <a href={item.author.href}>{item.author.name}</a>
                        </p>
                        <div className="flex space-x-1 text-sm text-[#6e727d]">
                          <span>{item.place}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              ))}
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </Main>
  );
};

export default Index;
