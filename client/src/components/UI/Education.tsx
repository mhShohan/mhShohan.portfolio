'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import { useGetAllEducationQuery } from '@/store/api/education.api';
import { IEducation } from '@/types';
import dateFormatter from '@/utils/dateFormatter';

const Education = () => {
  const { data } = useGetAllEducationQuery(undefined);

  return (
    <div className='timeline' style={{ width: '100%', marginTop: '1rem' }}>
      <VerticalTimeline animate={true}>
        {data?.data.map((education: IEducation) => (
          <VerticalTimelineElement
            key={education._id}
            visible={true}
            className='vertical-timeline-element--work'
            contentStyle={{
              background: '#142850',
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #142850',
            }}
            date={dateFormatter(education.startDate, education.endDate)}
            iconStyle={{ background: '#142850', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h4 className='vertical-timeline-element-title'>{education.certificate}</h4>
            <h6 className='vertical-timeline-element-subtitle'>{education.institute}</h6>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
