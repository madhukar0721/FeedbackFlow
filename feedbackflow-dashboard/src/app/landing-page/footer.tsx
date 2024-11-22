const Footer = () => {
  return (
    <footer className="mb-3 mt-24 border-t flex w-full p-4 justify-between items-center">
      <p className="text-gray-800">&copy; 2024 Company, Inc.</p>
      <p className="text-gray-800">
        Connect me on{' '}
        <a
          href="https://x.com/madhukar0721" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          X
        </a>{' '}
        for updates on this project.
      </p>
    </footer>
  );
}

export default Footer;
