type FooterProps = {
  bgColor: string;
  textColor: string;
};

const Footer = ({ bgColor, textColor }: FooterProps) => {
  return (
    <footer>
      <div className="py-4">
        <p className="my-3 text-base text-center md:text-sm">funaabdevteam@2023</p>
      </div>
    </footer>
  );
};

export default Footer;
