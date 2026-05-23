function Footer() {

  return (

<footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Company Info */}

          <div>

            <h1 className="text-3xl font-bold">

              GuideXNepal

            </h1>

            <p className="mt-5 text-gray-300 leading-7">

              Discover beautiful tourist destinations,
              local guides, and travel experiences
              across Nepal.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-2xl font-semibold">

              Quick Links

            </h2>

            <div className="flex flex-col gap-4 mt-5">

              <a
                href="/"
                className="hover:text-yellow-300 transition"
              >
                Home
              </a>

              <a
                href="/locations"
                className="hover:text-yellow-300 transition"
              >
                Locations
              </a>

              <a
                href="/login"
                className="hover:text-yellow-300 transition"
              >
                Login
              </a>

            </div>

          </div>

          {/* Contact Info */}

          <div>

            <h2 className="text-2xl font-semibold">

              Contact

            </h2>

            <div className="mt-5 space-y-4 text-gray-300">

              <p>📍 Kathmandu, Nepal</p>

              <p>📞 +977 98XXXXXXXX</p>

              <p>✉️ support@guidexnepal.com</p>

            </div>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">

          © 2026 GuideXNepal. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;