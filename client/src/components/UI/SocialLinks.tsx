'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

// mui
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Stack, useTheme } from '@mui/material';

interface ISocialLinks {
  socialLinks: {
    facebook: string;
    gitLab: string;
    github: string;
    leetcode: string;
    linkedin: string;
    twitter: string;
  };
}

const linksArray = [
  { id: 1, name: 'linkedin', icon: LinkedInIcon },
  { id: 2, name: 'github', icon: GitHubIcon },
  { id: 3, name: 'twitter', icon: TwitterIcon },
  { id: 4, name: 'facebook', icon: FacebookIcon },
];
type TLinkName = 'linkedin' | 'github' | 'twitter' | 'facebook';

const SocialLinks = ({ socialLinks }: ISocialLinks) => {
  const theme = useTheme();

  return (
    <Stack direction='row' gap={2}>
      {linksArray.map((link) => (
        <SocialLink key={link.id} link={socialLinks[link.name as TLinkName] as string}>
          <link.icon
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '2rem',
              transition: 'all ease 200ms',
              '&:hover': { color: theme.palette.primary.main, transform: 'scale(1.2)' },
            }}
          />
        </SocialLink>
      ))}
    </Stack>
  );
};

export default SocialLinks;

const SocialLink = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <Link target='_blank' href={link}>
      {children}
    </Link>
  );
};
