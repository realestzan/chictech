
const Footer = () => {
  return (
    <section className="py-32 max-md:py-12 bg-transparent">
      <div className='max-w-6xl mx-auto max-md:p-4'>
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 gap-y-16">
            <div className="col-span-2 mb-8 lg:mb-0">
              {/* <img src="/logo.svg" alt="logo" className="mb-4 h-20 dark:hidden" />
              <img src="/logo-dark.svg" alt="logo" className="mb-4 h-20 hidden dark:block" /> */}
              <h1 className="text-2xl mb-4">Chictech</h1>
              <p className="text-3xl font-medium">Fashion redefined.</p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Shop</h3>
              <ul className="space-y-4 text-zinc-600 dark:text-gray-200">
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/shop/new-arrivals">New Arrivals</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/shop/bestsellers">Bestsellers</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/shop/sale">Sale</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/shop/men">Men</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/shop/women">Women</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-4 text-zinc-600 dark:text-gray-200">
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/about">About Us</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/careers">Careers</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/sustainability">Sustainability</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/press">Press</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Customer Service</h3>
              <ul className="space-y-4 text-zinc-600 dark:text-gray-200">
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/help/shipping">Shipping</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/help/returns">Returns</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/help/faq">FAQ</a></li>
                <li className="font-medium hover:text-red-500 transition duration-300"><a href="/help/contact">Contact Support</a></li>
              </ul>
            </div>
            {/* <div>
          <h3 className="mb-4 font-semibold">Social</h3>
          <ul className="space-y-4  text-zinc-600 dark:text-gray-200">
            <li className="font-medium hover:text-red-500 transistion duration-300"><a href="#">Twitter</a></li>
            <li className="font-medium hover:text-red-500 transistion duration-300"><a href="#">Instagram</a></li>
            <li className="font-medium hover:text-red-500 transistion duration-300"><a href="#">LinkedIn</a></li>
          </ul>
        </div> */}
          </div>
          <div
            className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium  text-zinc-600 dark:text-gray-200 md:flex-row md:items-center">
            <p>© 2024 Chictech. All rights reserved.</p>
            <ul className="flex gap-4">
              <li className="underline hover:text-red-500 transistion duration-300"><a href="#"> Terms and Conditions</a></li>
              <li className="underline hover:text-red-500 transistion duration-300"><a href="#"> Privacy Policy</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
