import { Stack, Typography, useTheme } from '@mui/material';
import '@/styles/Skills.css';
import FullStackImg from './FulStackImg';
import { skills } from '@/data';
import { Heading } from '../extended';

export default function Skills() {
  const theme = useTheme();

  return (
    <Stack mb={10}>
      <Heading>{`Here's what I do`}</Heading>
      <SkillSection theme={theme} />
    </Stack>
  );
}

function GetSkillSvg(props: any) {
  if (props.fileName === 'FullStackImg') return <FullStackImg theme={props.theme} />;
}

function SkillSection(props: any) {
  const theme = props.theme;

  return (
    <div>
      {skills.map((skill, index) => {
        return (
          <div className='skills-main-div' key={index}>
            <div className='skills-image-div'>
              <GetSkillSvg fileName={skill.fileName} theme={theme} />
            </div>

            <div className='skills-text-div'>
              <h1 className='skills-heading' style={{ color: theme.text }}>
                {skill.title}
              </h1>

              <Stack gap={0.5}>
                {skill.skills.map((skillSentence) => {
                  return (
                    <Typography key={skillSentence} variant='body1'>
                      {skillSentence}
                    </Typography>
                  );
                })}
              </Stack>
            </div>
          </div>
        );
      })}
    </div>
  );
}
