import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterSection>
      <p>&copy; Mehdi Hasan Shohan, 2022</p>
    </FooterSection>
  );
}

const FooterSection = styled.section`
  background: #142850;
  text-align: center;
  color: #bad4da;
  padding: 8px;
`;
