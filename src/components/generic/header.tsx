"use client"

import { useAuth } from "@/context/auth-context"
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from "@headlessui/react"
import {
  ArrowDownOnSquareIcon,
  ArrowDownOnSquareStackIcon,
  Bars3Icon,
  BookOpenIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  CreditCardIcon,
  EnvelopeIcon,
  NewspaperIcon,
  SparklesIcon,
  StarIcon,
  TagIcon,
  XMarkIcon
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { Diamond, GlassesIcon, Heart, LeafIcon, MapIcon, ShirtIcon, SparkleIcon, User } from "lucide-react"
import { useState } from "react"
import { LanguageToggle } from "../toggle-language"
import { ModeToggle } from "../toggle-theme"
const other = [
  {
    name: "Blog",
    description: 'Latest fashion trends and tips.',
    href: "/blog",
    icon: NewspaperIcon
  },
  {
    name: "About Us",
    description: 'Learn more about our brand.',
    href: "/about",
    icon: BookOpenIcon
  },
  {
    name: "Contact",
    description: 'Get in touch with us.',
    href: "/contact",
    icon: EnvelopeIcon
  },
  {
    name: "Careers",
    description: 'Join our team.',
    href: "/careers",
    icon: SparklesIcon
  },
  {
    name: "Stores",
    description: 'Find our store locations.',
    href: "/stores",
    icon: MapIcon
  }
]

const feature = [
  {
    name: "New Arrivals",
    description: 'Check out the latest additions.',
    href: "/new-arrivals",
    icon: SparklesIcon
  },
  {
    name: "Best Sellers",
    description: 'Our most popular products.',
    href: "/best-sellers",
    icon: StarIcon
  },
  {
    name: "Sale",
    description: 'Shop items on sale.',
    href: "/sale",
    icon: TagIcon
  },
  {
    name: "Gift Cards",
    description: 'Purchase gift cards.',
    href: "/gift-cards",
    icon: CreditCardIcon
  },
  {
    name: "Lookbook",
    description: 'Explore our seasonal lookbooks.',
    href: "/lookbook",
    icon: BookOpenIcon
  },
  {
    name: "Sustainability",
    description: 'Learn about our sustainability efforts.',
    href: "/sustainability",
    icon: LeafIcon
  },
  {
    name: "Customer Service",
    description: 'Get help with your orders.',
    href: "/customer-service",
    icon: ChatBubbleOvalLeftIcon
  }
]

const product = [
  {
    name: "Women",
    description: 'Shop the latest in women’s fashion.',
    href: "/women",
    icon: Diamond
  },
  {
    name: "Men",
    description: 'Shop the latest in men’s fashion.',
    href: "/men",
    icon: User
  },
  {
    name: "Kids",
    description: 'Shop the latest in kids’ fashion.',
    href: "/kids",
    icon: Heart
  },
  {
    name: "Accessories",
    description: 'Complete your look with accessories.',
    href: "/accessories",
    icon: GlassesIcon
  },
  {
    name: "Shoes",
    description: 'Find the perfect pair of shoes.',
    href: "/shoes",
    icon: ShirtIcon
  },
  {
    name: "Sale",
    description: 'Shop discounted items.',
    href: "/sale",
    icon: TagIcon
  }
]

const productActions = [
  { name: "New Arrivals", href: "/new-arrivals", icon: SparklesIcon },
  { name: "Best Sellers", href: "/best-sellers", icon: StarIcon }
]
const featureActions = [
  { name: "Gift Cards", href: "/gift-cards", icon: CreditCardIcon },
  { name: "Customer Service", href: "/customer-service", icon: ChatBubbleOvalLeftIcon }
]
const otherActions = [
  { name: "Sign in", href: "/signin", icon: ArrowDownOnSquareIcon },
  { name: "Sign up", href: "/signup", icon: ArrowDownOnSquareStackIcon }
]

export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleRealest = () => {
    // Create a new KeyboardEvent for Command + J
    const event = new KeyboardEvent('keydown', {
      key: 'j',
      code: 'KeyJ',
      keyCode: 74, // keyCode for 'J'
      which: 74,   // 'which' is often used for compatibility
      metaKey: true,  // Command key on macOS
      bubbles: true,
      cancelable: true
    })

    // Dispatch the event to the document
    document.dispatchEvent(event)
  }

  const { user } = useAuth()

  return (
    <header className="text-foreground z-20">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl">Chictech</span>
            {/* <img alt="" src="/logo.svg" className="h-12 w-auto dark:hidden" />
            <img
              alt=""
              src="/logo-dark.svg"
              className="h-12 w-auto hidden dark:block"
            /> */}
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none">
              Product
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none "
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 group">
                {!user && (<a href='/signin' className='absolute bottom-0 right-0 top-0 left-0 z-20 opacity-0 w-full flex items-center justify-center text-center text-3xl group-hover:opacity-100 transition duration-500 font-semibold'>Sign <span className='px-2 text-ai'> in </span> first</a>)}

                {product.map((item) => (
                  <div
                    key={item.name}
                    className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10 ${!user && 'group-hover:blur-[3px] group-hover:opacity-40'} transition duration-500`}
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-background">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-red-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold hover:text-red-500 transition duration-300"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-foreground/5">
                {productActions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-4 text-sm font-semibold leading-6 hover:bg-foreground/5 hover:text-red-500 transition duration-300"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none">
              Feature
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none "
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-48 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {feature.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-foreground/10 group-hover:bg-background">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-red-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold hover:text-red-500 transition duration-300"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-foreground/5">
                {featureActions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-4 text-sm font-semibold leading-6 hover:bg-foreground/5 hover:text-red-500 transition duration-300"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none">
              Other
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none "
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10">
                  <ModeToggle />
                  <div className="block font-semibold">Toggle Theme</div>
                </div>

                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10">
                  <LanguageToggle />
                  <div className="block font-semibold">Change Language</div>
                </div>

                {other.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-foreground/10 group-hover:bg-background">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-red-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold hover:text-red-500 transition duration-300"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-foreground/5">
                {otherActions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-4 text-sm font-semibold leading-6 hover:bg-foreground/5 hover:text-red-500 transition duration-300"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={user ? '/learner' : '/signin'}
            className="text-sm font-semibold leading-6 hover:text-red-500 transition"
          >
            {user ? user.displayName : 'Log in'} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src="/logo.svg" className="h-8 w-auto dark:hidden" />
                <img alt="" src="/logo-dark.svg" className="h-8 w-auto dark:block hidden" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-foreground/100/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-foreground/10">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...product, ...productActions].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="w-full justify-between rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-foreground/10 flex items-center"
                        >
                          {item.name}
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none opacity-0"
                          />
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-foreground/10">
                      Feature
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...feature, ...featureActions].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="w-full justify-between rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-foreground/10 flex items-center"
                        >
                          {item.name}
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none opacity-0"
                          />
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-foreground/10">
                      Other
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...other, ...otherActions].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="w-full justify-between rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-foreground/10 flex items-center"
                        >
                          {item.name}
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none opacity-0"
                          />
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>



                  {/* {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-foreground/10 hover:text-red-500 transition duration-300"
                  >
                    {link.label}
                  </a>
                ))} */}

                  <div className="flex w-full justify-between py-2">
                    <h1>Toggle Mode</h1>
                    <ModeToggle />
                  </div>
                  <div className="flex w-full justify-between py-2">
                    <h1>Change Language</h1>
                    <LanguageToggle />
                  </div>

                  <div onClick={handleRealest} className="flex w-full justify-between py-2">
                    <SparkleIcon strokeWidth={1} />
                    <h1 className="text-ai font-black">Realest</h1>

                  </div>
                </div>



                <div className="py-6">
                  <a
                    href={user ? '/learner' : '/signin'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-foreground/10"
                  >
                    {user ? user.displayName : 'Log in'}
                  </a>
                </div>




              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </motion.div>
    </header>
  )
}
