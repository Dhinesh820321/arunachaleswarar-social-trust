import React from 'react';
import { serviceDetails } from '../../data/serviceDetailsData';
import {
    ServiceContent,
    ImpactStats,
    ActivitySection,
    ServiceGallery,
    CallToAction
} from '../../components/Service/ServiceComponents';
import PremiumHero from '../../components/Service/PremiumHero';

const UnemploymentYouth = () => {
    const data = serviceDetails["unemployment-youth"];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PremiumHero {...data} />
            <ServiceContent {...data} />
            <ImpactStats stats={data.stats} />
            <ActivitySection activities={data.activities} />
            <ServiceGallery images={data.gallery} />
            <CallToAction />
        </div>
    );
};

export default UnemploymentYouth;
