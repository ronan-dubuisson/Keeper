function Footer() {
  return (
    <footer className="bg-primary-400 h-100px flex justify-center flex-items-center w-100vw mb-0">
      <p className="font-caveat font-regular font-size-normal">
        Copyright ⓒ {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
