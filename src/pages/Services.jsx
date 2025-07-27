import React from 'react';
import serviceBanner from '../assets/serviceBanner.png';
import { massageServicesData } from '../data'

function Services() {

  const { Headmassage, neckmassage, holistic, foot, lomy, sports, deep, poltim, treatment, facial, balinese } = massageServicesData
  return (
    <div className="max-w-7xl text-center mx-auto px-4 py-8 lg:px-0 font-Poppins">
      <h1 className='text-2xl font-semibold uppercase text-primary-bg-color font-Poppins'>
        Massage Offered by Rudra Hammam & Spa
      </h1>
      <p className='text-lg font-extralight'>
        We are offering following massage services…
      </p>
      <div className="mb-8">
        <img src={serviceBanner} alt="Hammam Massage" className="w-full rounded-lg shadow-lg" />
      </div>


      <div className="text-center">
        <h2 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">Hammam Massage</h2>
        <p className="text-lg text-justify mb-6">
          Indulge in the ancient and luxurious Hammam massage, a revitalizing ritual that begins with relaxation in a warm steam room to open your pores, followed by a soothing rinse with warm water. Experience a thorough full-body exfoliation using a traditional kessa glove to remove dead skin cells, revealing smoother and more radiant skin. Conclude with a soothing soap massage, leaving you feeling deeply cleansed, relaxed, and rejuvenated.
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">

          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">HEAD & SHOULDER MASSAGE</h3>
            <p className='text-justify'>
              This unique combination of lavender & geranium, geranium oil relieves stress levels and induces sleep. The massage will make your head feel lighter and you feel healthier psychologically. Lavender oil with its unique aroma will give you a pampered feel.
            </p>
          </div>
          <img src={Headmassage} alt="Head & Shoulder Massage" className="mb-4 w-500" />
        </div>


        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">
          <img src={neckmassage} alt="Foot Massage" className="mb-4 w-500" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">FOOT MASSAGE</h3>
            <p className='text-justify'>
              Treat your tired feet to a relaxing foot massage that helps alleviate tension and improve circulation. Our skilled therapists will target pressure points to relieve discomfort and leave your feet feeling refreshed and rejuvenated.
            </p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">

          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">FOOT REFLEXOLOGY</h3>
            <p className='text-justify'>
              Foot Reflexology are often seen as a luxury rather than a necessity. But there's way more to the practice than sheer relaxation and pampering. Foot Reflexology have a host of benefits to your overall health, making them less of a splurge-worthy extra and more of an overlooked healthy habit. Needless to say, they shouldn't just be reserved for vacation massage tables and pedicure add-ons.
            </p>
          </div>
          <img src={foot} alt="Head & Shoulder Massage" className="mb-4 w-500" />
        </div>


        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">
          <img src={holistic} alt="Foot Massage" className="mb-4 w-500" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">HOLISTIC SWEDISH MASSAGE</h3>
            <p className='text-justify'>
              Holistic Swedish massage therapy promotes relaxation can help ease aches and pains. it helps to release body's natural painkiller and gives a general sense of contentment. this massage not only feels exceptionally good, but it is relaxing and invigorating. it is incredibly popular massage offering long lasting stress relief and a fantastic feeling of well being.
            </p>
          </div>
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">

          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">AROMATHERAPY</h3>
            <p className='text-justify'>
              Aromatherapy uses essential oils to make you feel calm, relaxed or energised. this oil work with your sense of smell, you can inhale them, bathe in them or be massaged with them.
            </p>
          </div>
          <img src={foot} alt="Head & Shoulder Massage" className="mb-4 w-500" />
        </div>


        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">
          <img src={balinese} alt="Foot Massage" className="mb-4 w-500" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">BALINESE MASSAGE</h3>
            <p className='text-justify'>
              Balinese Massage is one from of traditional indonesian massage. originated on the island of bali, this massage involves a combination of techniques, including massage, acupressure, reflexology, can also help loosen muscles and ease pain.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">

          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">LOMI LOMI</h3>
            <p className='text-justify'>
              it is a unique massage derived from the ancient polynesians and more specially the master healer of hawaiian island, this massage is performed using forearms, knuckles and palms. it is specially designed to relieve mental and physical stress.
            </p>
          </div>
          <img src={lomy} alt="Head & Shoulder Massage" className="mb-4 w-500" />
        </div>


        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">
          <img src={sports} alt="Foot Massage" className="mb-4 w-500" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">SPORTS MASSAGE</h3>
            <p className='text-justify'>
              Sports massage is a form of bodywork geared toward participants in athletics.
              It is used to help prevent injuries, to prepare the body for athletic activity and maintain it in optimal condition, and to help athletes recover from workouts and injuries. Sports massage has three basic forms: pre-event massage, post-event massage, and maintenance massage..

            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">

          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">DEEP TISSUE MASSAGE </h3>
            <p className='text-justify'>
              Deep tissue massage is a massage technique that's mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues. This helos to break uo scar tissue that forms following an injury and reduce tension in muscle and tissue. It may also promote faster healing by increasing blood flow and reducing inflammation.
              Read on to learn more about deep tissue massage, including how it stacks up against Swedish massage and what to expect during a session.

            </p>
          </div>
          <img src={deep} alt="Head & Shoulder Massage" className="mb-4 w-500" />
        </div>


        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">
          <img src={poltim} alt="Foot Massage" className="mb-4 w-500" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">POTLI MASSAGE</h3>
            <p className='text-justify'>

              In thai Massage therapist use their hands, thumbs, elbow, forearms and sometimes even their feet to reduce tension in your muscles. thai massage is based on the idea that energy moves through your body predictable lines or pathways known as sens. thai massage can benefits your health in numerous way like relives headaches, reduces back pain, relieves joints stiffness and pain, increase flexibility and range of motion, eases anxiety, revives Energy

            </p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">

          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">FACIAL MASSAGE </h3>
            <p className='text-justify'>
              Facial massage is a specialized technique that focuses on enhancing the skin’s health and appearance through manual manipulation. This massage improves circulation, reduces puffiness, relieves muscle tension, and promotes relaxation. Common techniques include effleurage, petrissage, tapotement, friction, and vibration. These methods stimulate blood flow, ease muscle tightness, and help skincare products penetrate deeper into the skin. The benefits of facial massage extend beyond aesthetic improvements, providing a calming effect that reduces stress and positively impacts overall skin condition.
            </p>
          </div>
          <img src={facial} alt="Head & Shoulder Massage" className="mb-4 w-500" />
        </div>


        <div className=" rounded-lg p-6 flex items-center justify-center flex-col">
          <img src={treatment} alt="Foot Massage" className="mb-4 w-500" />
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase text-primary-bg-color font-Poppins">TREATMENT MASSAGE</h3>
            <p className='text-justify'>

              Skin treatment massages encompass a wider range of techniques aimed at addressing specific skin concerns such as detoxification, hydration, anti-aging, and brightening.
              Methods like lymphatic drainage, anti-aging massage, acupressure, hot stone facial massage, and gua sha are used to remove toxins, improve skin texture, boost moisture levels, and enhance skin elasticity.


            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
        <h1 className="text-3xl font-bold text-center text-primary-bg-color mb-10">SIGNATURE MASSAGE</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">RUDRA SIGNATURE EXCLUSIVE</h2>
            <p className='text-justify'>A complete rejuvenating massage, which hydrates, exfoliates, and nourishes the body whilst contouring it at the same time. The tissue and fatty areas are kneaded into shape. Subsequent friction with warming scrubs, hot towels, and a hot mild soak re-texturizes the skin. Hydrotherapy aids the detoxification process.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">RUDRA DESERT FLOWER</h2>
            <p className='text-justify'>A steam, followed by hot oil massage, a herbal detoxifying scrub, and a mild soak. The skin is thoroughly softened and cleaned to prepare for a clay body mask that purifies and beautifies the skin. The feet receive chakra pressure massage as the clay mask penetrates into the skin.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">RUDRA CHOCOLATE BOOM</h2>
            <p className='text-justify'>After years of being incorrectly blamed for causing acne, chocolate has redeemed itself as the new skin savior at spas around the world. Classic confection brands often market their own massage creams and treatments alongside off-brands with a basic cocoa base. Chocolate spa treatments include basic massages with a cocoa-based cream or oil, hot oil rubs, chocolate waxes, and facials, while commercial products incorporate cocoa into everything from hand creams to lip gloss.</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-primary-bg-color mb-10">RELAXING COUPLE MASSAGE</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Women: JASMIN MASSAGE OIL</h2>
            <p className='text-justify'>Massage reduces the stress hormone cortisol in the body, which helps to lift moods and lower blood pressure. The aromatic effect of jasmine oil stimulates the release of certain hormones in the body, including serotonin, which results in a boost of energy and uplifted mood.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Men: SANDALWOOD MASSAGE OIL</h2>
            <p className='text-justify'>Take care of your body; it's the only place you have to live. Sandalwood massage oil helps you achieve more clarity and calmness due to its extensive therapeutic benefits. The essential oil improves and maintains good nerve health and helps heal by promoting the growth of new tissue.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">PRINCE / PRINCESS HEAVENLY TOUCH WOMEN: CHOCOLATE PUMICE SCRUB</h2>
            <p className='text-justify'>Carve out some time for a massage with chocolate pumice scrub, which is made of pumice scrub in a cream base that provides scrubbing and moisturizing.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Men: CHOCOLATE PUMICE SCRUB</h2>
            <p className='text-justify'>Energize your body, stimulate your mind, and calm your soul with organic sugar scrub. Using sugar for exfoliation involves rubbing the sugar against your skin and applying pressure.</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Services;










// import React from 'react';
// import ServiceCard from '../components/ServiceCard';
// import { ServiceData } from '../data';

// export default function Services() {
//   return (
//     <div className='flex flex-col gap-5 justify-center items-center mb-10'>
//       <div className='flex flex-col gap-2 items-center justify-center mt-5'>
//         <h1 className='text-2xl font-semibold uppercase text-primary-bg-color font-Poppins'>
//           Massage Offered by Rudra Hammam & Spa
//         </h1>
//         <p className='text-lg font-extralight'>
//           We are offering following massage services…
//         </p>
//       </div>
//       <div className='grid grid-cols-3 gap-10 '>
//         {ServiceData.map(
//           ({
//             id,
//             title,
//             description,
//             image,
//             duration,
//             price,
//             RudraSignatureMassage,
//           }) => (
//             <ServiceCard
//               key={id}
//               id={id}
//               title={title}
//               description={description}
//               image={image}
//               duration={duration}
//               price={price}
//               RudraSignatureMassage={RudraSignatureMassage}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }
