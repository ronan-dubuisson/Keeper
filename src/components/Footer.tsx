/**
 * returns the footer element
 * @returns footer element
 */
function Footer() {
  return (
    <footer className="mt-10 flex-grow-0 flex-shrink-0 flex-basis-0 flex-basis-100px bg-brand-primary-400 h-100px flex justify-center flex-items-center border-t-1px border-brand border-t-solid">
      <p className="font-primary font-regular font-size-normal">
        Copyright ⓒ {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
