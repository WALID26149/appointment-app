import React from 'react';
import { Button } from '@/components/ui/button';
function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest  news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <Button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-lime-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
              aut perferendis distinctio iusto repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {/* Social media icons here (Facebook, Instagram, etc.) */}
              {/* ... نفس الكود اللي عندك للروابط الاجتماعية ... */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Marketing</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Graphic Design</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">App Development</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Web Development</a></li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">About</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Careers</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">History</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Our Team</a></li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">FAQs</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Contact</a></li>
                <li><a className="text-gray-700 transition hover:text-gray-700/75" href="#">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Company 2025. All rights reserved.
            <br />
            Created By Walid Allane
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;