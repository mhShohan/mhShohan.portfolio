import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterSection>
            <p>
                &copy;All rights reserved by{' '}
                <a
                    href='https://www.linkedin.com/in/mehdi-hasan-shohan/'
                    rel='noreferrer'
                    target='_blank'
                >
                    Mehdi Hasan Shohan
                </a>
                , 2023
            </p>
        </FooterSection>
    );
}

const FooterSection = styled.section`
    background: #142850;
    text-align: center;
    color: #bad4da;
    padding: 1rem;
    font-size: 18px;

    a {
        font-weight: bold;
        color: rgba(144, 195, 206, 0.8);
    }
`;
