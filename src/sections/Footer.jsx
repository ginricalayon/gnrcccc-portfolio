const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 pt-7 pb-3 border-t border-gray-950 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/ginricalayon" target="_blank">
          <div className="sw-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-900">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://x.com/@gnrcccc" target="_blank">
          <div className="sw-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-900">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/gnrcccc/" target="_blank">
          <div className="sw-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-900">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-white">© 2025 Ginric Alayon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
