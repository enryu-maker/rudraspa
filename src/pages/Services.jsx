import React from 'react';
import ServiceCard from '../components/ServiceCard';

// Image import here
import ThaiImg from '../assets/thai.jpg';
import AromaImg from '../assets/aroma.jpg';
import SwedishImg from '../assets/Swedish.jpg';

const ServiceData = [
  {
    id: 1,
    title: 'Thai Massage',
    description:
      'Thai massage can benefit your health in numerous ways, many of which scientific studies support. We explore benefits that are relieving headaches, reducing back pain, relieving joint stiffness and pain, increasing flexibility and range of motion, easing anxiety, revising energy and many more.',
    image: ThaiImg,
  },
  {
    id: 2,
    title: 'Aroma Massage',
    description:
      'Aroma massages can be one of the most relaxing because they engage not only your tactile senses but also your sense of smell to alleviate stress in the body. Adding specific scents can enhance the calming effect of your massage experience..',
    image: AromaImg,
  },
  {
    id: 3,
    title: 'Swedish Massage',
    description:
      'A Swedish body massage has numerous health benefits. it helps to improve the physical as well as the mental health of the person receiving it. it calms the nervous system, strengthens muscles, tightenes the body`s loose muscles and improves blood flow.',
    image: SwedishImg,
  },
  {
    id: 4,
    title: 'Balinese Massage',
    description:
      'Balinese massage is a full-body, deep-tissue, holistic treatment. Traditional Balinese massage combines gentle stretches, acupressure, reflexology and aromatherapy to stimulate the flow of blood, oxygen and energy around your body and bring a sense of wellbeing and deep relaxation.',
    image: AromaImg,
  },
  {
    id: 5,
    title: 'Deep Tissue Massage',
    description:
      'From Chronic pain managment to accelerating recovery of injuries the benefit of deep tissue massage are very here are some of them that release muscle tension relieves lower back pain, heal sports injuries, and increase mobility.',
    image: AromaImg,
  },
  {
    id: 6,
    title: 'Four Hand Massage',
    description:
      '4 hand massage is an ancient technique of massage which involves two therapists working in tandem to deliver a simultaneous massage.',
    image: AromaImg,
  },
  {
    id: 7,
    title: 'Refloxology Massage',
    description:
      'This service can greatly benefit the flows and regulators of your body to aid in them functioning. It`s a simple yet very effective therapy that everyone should try at least once! You never know; it could become your favorite massage technique..',
    image: AromaImg,
  },
  {
    id: 8,
    title: 'Signature Massage',
    description:
      'Stimulate and de-stress yourself with our signature body massage in Rudra Spa In Powai to relieve your muscle ache pressure, alleviate fatigue and promote blood circulation, leaving you feeling refreshed and rejuvenated, which requires the essence of relaxation? Signature massage in our makes you relax mentally.',
    image: AromaImg,
  },
  {
    id: 9,
    title: 'Couple Massage',
    description:
      'A couples Massage is designed for two people to enjoye together, mening that any two people are welcome to schedule a session. we have unique tratment rooms that are set up with two separate massage tables so that each clint can be massaged simultaneously by two different therapists.',
    image: AromaImg,
  },
];

export default function Services() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center mb-10'>
      <div className='flex flex-col gap-2 items-center justify-center mt-5'>
        <h1 className='text-2xl font-semibold uppercase text-primary-bg-color font-Poppins'>
          Massage Offered by Rudra Spa
        </h1>
        <p className='text-lg font-extralight'>
          We are offering following massage services…
        </p>
      </div>
      <div className='grid grid-cols-3 gap-10 '>
        {ServiceData.map(({ id, title, description, image }) => (
          <ServiceCard
            key={id}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
