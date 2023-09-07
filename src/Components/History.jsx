import React from 'react';
import HistoryItems from './HistoryItems';

const data = [

    {
        year: 2005,
        title: ' Assistant to the Regional Manager at Dunder Mifflin',
        duration: 'Present',
        location: ' Scranton, PA',
        details: ` Directly support the Regional Manager in overseeing day-to-day operations, managing a diverse team, and ensuring alignment with company goals and policies.
        Develop and implement creative sales strategies, contributing to consistent revenue growth year over year.
        Spearhead initiatives to enhance office efficiency, including introducing new filing systems, inventory management processes, and customer communication protocols.
        Train and mentor junior staff members, fostering a collaborative and productive work environment.
        Execute effective conflict resolution strategies, promoting positive interdepartmental relations.`
    },
    {
        year: 1998,
        title: 'Schrute Farms',
        duration: 'Present',
        location: ' Scranton, PA',
        details: `Manage all aspects of a family-owned farm, specializing in beet cultivation and agritourism.
        Successfully expanded the business to include bed-and-breakfast accommodations, attracting both local and tourist clientele.
        Develop and implement marketing strategies, resulting in increased bookings and revenue.
        Demonstrate strong leadership by supervising a team of farmhands and hospitality staff.
        Maintain a focus on sustainability and resource management, minimizing waste and maximizing productivity.`
    },
    {
        year: 2000,
        title: 'Volunteer Sheriff Deputy ',
        duration: ' 2005',
        location: ' Scranton, PA',
        details: 'Piss tested every employee'
    },






];

const History = () => {
  return (
    <div id='history' className='max-w-[1040px]  shadow-[0_0_3000px_purple] m-auto pt-4 pb-4 md:pl-25 p-6 py-16 '>
    <h1 className='text-6xl fond-bold text-center text-blue-500 '>History</h1>
    {data.map((item, id) => (
        <HistoryItems key={id}
                      title={item.title}
                      year={item.year}
                      duration={item.duration}
                      location={item.location}
                      details={item.details}/>
    ))}
    </div>
  );
};

export default History