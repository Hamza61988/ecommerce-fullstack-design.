import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [
    { icon: FaInstagram },
    { icon: FaLinkedinIn },
    { icon: FaFacebookF },
    { icon: FaTwitter },
    { icon: FaYoutube },
  ];

  const footerLinks = [
    {
      title: 'About',
      links: [
        'Contact Us', 'About Us', 'Privacy Policy', 'Terms of Service',
        'Help Center', 'Returns & Refunds', 'Careers'
      ]
    },
    {
      title: 'Partnership',
      links: [
        'Customer Service', 'FAQs', 'Track Order', 'Shipping Information',
        'Return Policy', 'Gift Cards', 'Affiliate Program'
      ]
    },
    {
      title: 'Information',
      links: [
        'Newsletter Signup', 'Follow Us', 'Instagram', 'Facebook',
        'Twitter', 'LinkedIn', 'YouTube'
      ]
    },
    {
      title: 'For Users',
      links: [
        'Store Locator', 'Investor Relations', 'Press', 'Blog',
        'Sustainability', 'Accessibility', 'Corporate Responsibility'
      ]
    },
    {
      title: 'Get App',
      links: [
        'My Account', 'Order History', 'Wishlist', 'Login',
        'Register', 'Support', 'Site Map'
      ]
    },
  ];

  return (
    <div className="mt-10  text-white w-full">
      <div className="bg-gray-200 mx-4 md:mx-[0px] mx-[20px] rounded md:h-[200px] text-center py-8 px-4">
        <h4 className="text-3xl text-black font-semibold">Subscribe to our newsletter</h4>
        <p className="text-gray-800 mt-1">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-2">
          <input
            className="w-full sm:w-64 p-2 rounded-md border border-gray-300 text-black"
            placeholder="Email"
          />
          <button className="buttons cursor-pointer text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="bg-gray-800 w-full elements">
        <div className="px-4 md:mx-[80px]  py-10">
          <div className="flex flex-col md:flex-row justify-between gap-10">
          
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img className="h-16 w-16 mb-4" src="liver.png" alt="Company Logo" />
              <p className="text-sm text-gray-400 ">
                Best information about the company goes here. For now, it's just placeholder text — Lorem Ipsum.
              </p>
              <div className="flex gap-3 mt-7">
                {socialIcons.map((e, i) => {
                  const Icon = e.icon;
                  return (
                    <div key={i} className="p-2 bg-gray-600 rounded-full">
                      <Icon className="text-white text-xl" />
                    </div>
                  );
                })}
              </div>
            </div>

           
            <div className="grid grid-cols-2 md:flex hidden sm:grid-cols-3 md:grid-cols-5 gap-6 w-full justify-items-center md:justify-items-start">
              {footerLinks.map((section, i) => (
                <div key={i}>
                  <h4 className="font-semibold mb-2">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-400 hover:text-black cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 px-4 md:mx-[80px] jody py-4 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-gray-400">© 2023 Ecommerce</span>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <img src="flag4.png" className="h-6 w-10" alt="Country Flag" />
            <select className="bg-gray-700 text-white p-2 rounded-md outline-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
