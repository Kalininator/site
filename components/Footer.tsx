const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-md justify-between py-2">
        <div className="border-t border-violet-200">
          <p>&copy; {new Date().getFullYear().toString()} by Alex Kalinin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
