import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from 'react-icons/fa';

const Education = () => {
    return (
        <div className='timeline'>
            <h1 className='head_text'>Education</h1>
            <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: '#142850',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  #142850',
                    }}
                    date='2018 - present'
                    iconStyle={{ background: '#142850', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className='vertical-timeline-element-title'>
                        BSc. Engineering in Electrical and Electronics
                        Engineering (EEE)
                    </h4>
                    <h5 className='vertical-timeline-element-subtitle'>
                        Bangabandhu Sheikh Mujibur Rahman Science and Technology
                        University, Gopalganj-8100
                    </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: '#142850',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  #142850',
                    }}
                    date='2014 - 2016'
                    iconStyle={{ background: '#142850', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className='vertical-timeline-element-title'>
                        Higher Secondary School Certificate
                    </h4>
                    <h5 className='vertical-timeline-element-subtitle'>
                        Govt. Shahid Bulbul Collage, Pabna
                    </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: '#142850',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  #142850',
                    }}
                    date='2006 - 2014'
                    iconStyle={{ background: '#142850', color: '#fff' }}
                    icon={<FaUserGraduate />}
                >
                    <h4 className='vertical-timeline-element-title'>
                        Secondary School Certificate
                    </h4>
                    <h5 className='vertical-timeline-element-subtitle'>
                        Pabna Zilla School, Pabna
                    </h5>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Education;
