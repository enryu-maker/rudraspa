import React from 'react';
import { useParams } from 'react-router-dom';
import { ServiceData } from '../data';
import SignatureMassage from '../components/SignatureMassage';
import NormalMassage from '../components/NormalMassage';
import CoupleMassage from '../components/CoupleMassage';

const ServiceSubCategories = () => {
  const { id } = useParams();
  const thisData = ServiceData.find((data) => data.id === Number(id));

  return (
    <>
      {thisData?.RudraSignatureMassage ? (
        <SignatureMassage data={thisData.RudraSignatureMassage} />
      ) : thisData?.CoupleMassage ? (
        <CoupleMassage data={thisData.CoupleMassage} />
      ) : (
        <NormalMassage data={thisData} />
      )}
    </>
  );
};

export default ServiceSubCategories;
