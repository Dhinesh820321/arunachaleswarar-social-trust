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

const WomenEmpowerment = () => {
    const data = serviceDetails["women-empowerment"];

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

export default WomenEmpowerment;
