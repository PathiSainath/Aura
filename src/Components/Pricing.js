import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    description: 'Best for personal use',
    price: 0,
    features: [
      'Digital study tools',
      'Basic result tracking',
      'Study reminders',
      'Simple analytics',
    ],
    buttonText: 'Get Started',
    buttonType: 'outline',
  },
  {
    name: 'Pro',
    description: 'Best for serious students',
    price: 7,
    features: [
      'Everything in Free, plus',
      'Advanced analytics & insights',
      'Custom study plans',
      'Priority support',
    ],
    buttonText: 'Start Free Trial',
    buttonType: 'solid',
  },
  {
    name: 'Ultra Pro',
    description: 'Best for advanced learners',
    price: 15,
    features: [
      'Everything in Pro, plus',
      'One-on-one tutoring sessions',
      'Personalized coaching',
      'Exclusive study resources',
    ],
    buttonText: 'Start Free Trial',
    buttonType: 'outline',
  },
];

function Pricing() {
  const navigate = useNavigate();

  const handlePayment = (plan) => {
    navigate('/payment', { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#8F87F1,#C68EFD,#E9A5F1,#FED2E2)] flex items-center px-8 py-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan) => {
          const { name, description, price, features, buttonText, buttonType } = plan;

          return (
            <div
              key={name}
              className={`rounded-lg shadow-lg p-8 flex flex-col transition-transform duration-300 hover:scale-[1.03] ${
                buttonType === 'solid' ? 'bg-blue-700 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <h2 className={`text-2xl font-semibold mb-1 ${buttonType === 'solid' ? 'text-white' : 'text-gray-900'}`}>
                {name}
              </h2>
              <p className={`mb-6 ${buttonType === 'solid' ? 'text-blue-200' : 'text-gray-500'}`}>{description}</p>

              <div className={`text-3xl font-extrabold mb-8 ${buttonType === 'solid' ? 'text-white' : 'text-gray-900'}`}>
                $<span className="text-7xl">{price}</span> /month
              </div>

              <button
                onClick={() => handlePayment(plan)}
                className={`mb-8 px-6 py-3 rounded-md font-semibold text-lg transition-colors duration-300 shadow-md
                  ${
                    buttonType === 'solid'
                      ? 'bg-white text-blue-700 hover:bg-gray-100'
                      : 'border border-blue-700 text-blue-700 hover:bg-blue-50'
                  }
                `}
              >
                {buttonText}
              </button>

              <ul className={`space-y-4 flex-grow ${buttonType === 'solid' ? 'text-blue-100' : 'text-gray-700'}`}>
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        buttonType === 'solid' ? 'text-white' : 'text-blue-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
