import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      price: isAnnual ? 99 : 12,
      description: "Perfect for students and fresh graduates",
      features: [
        "AI-powered resume analysis",
        "Basic template library",
        "Grammar & spell check",
        "24/7 email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: isAnnual ? 199 : 24,
      description: "Ideal for professionals seeking career growth",
      features: [
        "Everything in Basic",
        "Advanced AI suggestions",
        "Premium templates",
        "LinkedIn profile optimization",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: isAnnual ? 299 : 36,
      description: "For executives and career changers",
      features: [
        "Everything in Professional",
        "Personal career coach",
        "Custom branding",
        "Interview preparation",
        "Unlimited revisions",
      ],
      popular: false,
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl text-center"
      >
        <span className="inline-block rounded-full bg-primary-light/10 px-4 py-1 text-sm font-medium text-primary-dark">
          Pricing Plans
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Elevate Your Career with AI-Powered Resumes
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Choose the perfect plan to transform your resume and stand out from the crowd
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm ${!isAnnual ? "text-neutral-900" : "text-neutral-500"}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span
              className={`${
                isAnnual ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? "text-neutral-900" : "text-neutral-500"}`}>
            Annual <span className="text-primary">(-20%)</span>
          </span>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl border bg-white p-8 shadow-lg transition-all ${
                plan.popular ? "border-primary ring-1 ring-primary" : "border-neutral-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-neutral-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-neutral-900">${plan.price}</span>
                  <span className="text-neutral-600">/{isAnnual ? "year" : "month"}</span>
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-neutral-700">
                    <Check className="mr-3 h-5 w-5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex items-center justify-center">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="ml-2 text-xl font-semibold text-neutral-900">100% Satisfaction Guarantee</h2>
            </div>
            <p className="mt-4 text-center text-neutral-600">
              Try our service risk-free for 30 days. If you're not completely satisfied, we'll refund your payment.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;