import { Link } from 'react-router-dom';
import OurTeam from './OurTeam';

export default function About() {
    return (
        <>
            <Link className="text-sm font-semibold leading-6 text-gray-900">
                Our Team
            </Link>
            <Link className="text-sm font-semibold leading-6 text-gray-900">
                Contact Us
            </Link>
            <Link className="text-sm font-semibold leading-6 text-gray-900">
                Mission
            </Link>
            <OurTeam />;
        </>
    );
}
