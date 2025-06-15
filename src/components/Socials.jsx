const Socials = () => {
  return (
    <div className="text-lg text-md text-white">
      <div className="font-light text-center" style={{ cursor: 'default' }}>
        Made by Arpit
      </div>
      <div className="flex justify-center">
        <a
          href="https://github.com/Arpit1434"
          target="_blank"
          className="mx-2"
          style={{ color: 'black', cursor: 'pointer' }}
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arpit-tiwari-8199b5256/"
          target="_blank"
          className="mx-2"
          style={{ cursor: 'pointer' }}
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://codepen.io/Arpit-Tiwari-the-sans"
          target="_blank"
          className="mx-2"
          style={{ color: 'black', cursor: 'pointer' }}
        >
          <i class="fa-brands fa-codepen"></i>
        </a>
        <a
          href="https://stackblitz.com/@arpit.tiwari1434"
          target="_blank"
          className="mx-2"
          style={{ cursor: 'pointer' }}
        >
          <i class="fa-solid fa-bolt"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
