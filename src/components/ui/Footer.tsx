import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
  <div className="container mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
    <div className="w-full sm:w-1/2 lg:w-1/4">
      <h2 className="text-lg font-medium mb-2">About Us</h2>
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus porta condimentum.</p>
      <a href="#" className="text-blue-500 hover:text-blue-700 underline">Learn More</a>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4">
      <h2 className="text-lg font-medium mb-2">Contact</h2>
      <p className="text-sm">123-456-7890</p>
      <p className="text-sm">contact@example.com</p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4">
    <h2 className="text-lg font-medium mb-2">Contact</h2>
      <p className="text-sm">123-456-7890</p>
      <p className="text-sm">contact@example.com</p>
      </div>
    <div className="w-full sm:w-1/2 lg:w-1/4">
    <h2 className="text-lg font-medium mb-2">Folow US</h2>
      <p className="text-sm">Twitter</p>
      <p className="text-sm">Instagram</p>
      </div>
  </div>
  <p className='text-center mt-10'> &copy; 2024 Music School , All right Deserves</p>
</footer>
  )
}

export default Footer
