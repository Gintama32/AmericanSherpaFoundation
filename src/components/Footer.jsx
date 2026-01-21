export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              American Sherpa Foundation Inc.
            </h3>
            <p className="text-sm">
              A 501(c) tax-exempt non-profit organization dedicated to supporting
              and celebrating high achieving Sherpas in America.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/profiles"
                  className="hover:text-primary-400 transition-colors"
                >
                  Profiles
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="hover:text-primary-400 transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              For inquiries and support, please reach out to us.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} American Sherpa Foundation Inc. All
            rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            501(c) Tax-Exempt Non-Profit Organization
          </p>
        </div>
      </div>
    </footer>
  )
}
