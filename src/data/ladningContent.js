import { FiMail, FiZap, FiBarChart2 } from 'react-icons/fi';
import imgFeature1 from '../styles/img/features/1.avif';
import imgFeature2 from '../styles/img/features/2.avif';
import imgFeature3 from '../styles/img/features/3.avif';
import CheckIcon from '../styles/img/features/check.svg';

export const ladningContent = [
        {
                title: 'features',
                heading: 'Analytics that feels like it’s from the future',
                support: 'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
                subheading: 'Features',
                content: [
                        {
                                icon: <FiMail size="24px" />,
                                heading: 'Share team inboxes',
                                support: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
                                items: [
                                        { icon: CheckIcon, text: 'Leverage automation to move fast' },
                                        { icon: CheckIcon, text: 'Always give customers a human to chat to' },
                                        { icon: CheckIcon, text: 'Automate customer support and close leads faster' },
                                ],
                                img: imgFeature1,
                        },
                        {
                                icon: <FiZap size="24px" />,
                                heading: 'Deliver instant answers',
                                support: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
                                items: [
                                        { icon: CheckIcon, text: 'Keep your customers in the loop with live chat' },
                                        { icon: CheckIcon, text: 'Embed help articles right on your website' },
                                        {
                                                icon: CheckIcon,
                                                text: 'Customers never have to leave the page to find an answer',
                                        },
                                ],
                                img: imgFeature2,
                        },
                        {
                                icon: <FiBarChart2 size="24px" />,
                                heading: 'Manage your team with reports',
                                support: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
                                items: [
                                        {
                                                icon: CheckIcon,
                                                text: 'Filter, export, and drilldown on the data quickly',
                                        },
                                        {
                                                icon: CheckIcon,
                                                text: 'Save, schedule, and automate reports to your inbox',
                                        },
                                        {
                                                icon: CheckIcon,
                                                text: 'Connect the tools you already use with 100+ integrations',
                                        },
                                ],
                                img: imgFeature3,
                        },
                ],
        },
        { title: 'integrations', body: ['integrations'] },
        { title: 'power', body: ['power'] },
        { title: 'quote', body: ['quote'] },
        { title: 'cta', body: ['cta'] },
        { title: 'footer', body: ['footer'] },
];
