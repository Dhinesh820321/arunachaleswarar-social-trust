import React from 'react';
import { serviceDetails } from '../../data/serviceDetailsData';
import {
    ServiceHero,
    ServiceContent,
    ImpactStats,
    ActivitySection,
    ServiceGallery,
    CallToAction
} from '../../components/Service/ServiceComponents';

const ChildEducation = () => {
    const data = serviceDetails["child-education"];

    return (
        <div className="bg-slate-50 min-h-screen">
            <ServiceHero {...data} />
            <ServiceContent {...data} />
            <ImpactStats stats={data.stats} />
            <ActivitySection activities={data.activities} />
            <ServiceGallery images={data.gallery} />
            <CallToAction />
        </div>
    );
};

export default ChildEducation;
