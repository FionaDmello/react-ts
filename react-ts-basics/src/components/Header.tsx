import { type ReactNode, type FC } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

// an easier, more concise way of spreading key-value pairs as props to an element tag is shown below
// <img {...image} />

export default Header;
