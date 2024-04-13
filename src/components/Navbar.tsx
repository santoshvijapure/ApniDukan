import styled from 'styled-components';
import tw from 'twin.macro';

const Nav = styled.nav`
${tw` bg-white`}
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
${tw`flex justify-between items-center mx-auto p-4`}
  max-width: 1200px;
`;

const Logo = styled.div`
${tw`text-2xl font-bold text-gray-700`}
`;

const Links = styled.div`
${tw`flex gap-4`}

`;

const LinkItem = styled.a`
${tw`text-gray-700  font-medium`}
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>Apni Dukan</Logo>
        <Links>
          <LinkItem href="#">Home</LinkItem>
          <LinkItem href="#">Log in</LinkItem>
        </Links>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
