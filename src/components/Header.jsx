import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { ButtonLink } from '@/components/Button';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Image } from 'next/image';

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="/gallery" className="block w-full" onClick={() => close()}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/faculty" className="block w-full" onClick={() => close()}>
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className="block w-full" onClick={() => close()}>
                    Contact Us
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export function Header() {
  const router = useRouter(); 
  return (
    <header className="z-50 border border-b bg-blue-50 py-4 shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-4 lg:max-w-4xl flex justify-between items-center">
        <div>
          <Link href="/">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="text-sm">
          <ul className="flex items-center">
            <li className="ml-12 hidden md:block">
              <Link href="/" className={`nav-link ${router.pathname === '/' && 'active'}`}>
                <b>Home</b>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="/faculty" className={`nav-link ${router.pathname === '/faculty' && 'active'}`}>
                <b>Faculty</b>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="/gallery" className={`nav-link ${router.pathname === '/gallery' && 'active'}`}>
                <b>Gallery</b>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="/contactus" className={`nav-link ${router.pathname === '/contactus' && 'active'}`}>
                <b>Contact Us</b>
              </Link>
            </li>
            <li className="-mr-1 ml-5 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}







