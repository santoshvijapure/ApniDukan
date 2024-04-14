import tw, { styled } from 'twin.macro';

const FooterContainer = styled.footer`
  ${tw`bg-gray-800 text-white py-8 px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left`}
`;

const FooterLinks = styled.div`
  ${tw`flex flex-wrap justify-center md:justify-end gap-4`}
`;

const FooterLink = styled.a`
  ${tw`text-gray-300 hover:text-white`}
`;

const CopyrightText = styled.p`
  ${tw`mt-4 md:mt-0 text-sm`}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">FAQ</FooterLink>
        <FooterLink href="#">Career</FooterLink>
      </FooterLinks>
      <CopyrightText>&copy; 2024 Apni Dukan. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
