/**
 * returns the footer element
 * @returns footer element
 */
function Footer() {
  return (
    <footer className="bg-brand-primary-400 h-100px flex justify-center flex-items-center w-100vw mb-0 border-t-1px border-brand border-t-solid">
      <p className="font-primary font-regular font-size-normal">
        Copyright ⓒ {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
