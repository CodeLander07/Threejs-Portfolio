const Footer = () => {
  return (
    <footer className="c-space h-[15rem] pt-4 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/unstopablesid" target="blank"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" /></a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/Mayur_nikumbh07" target="blank"><img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/3" /></a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/mayurnikumbh07/" target="blank"><img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" /></a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/mayur-nikumbh/" target="blank"><img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 " /></a>
        </div>
      </div>

      <p className="text-white-500">©Mayur Nikumbh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
