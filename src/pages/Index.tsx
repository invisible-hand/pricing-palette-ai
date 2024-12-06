import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const Index = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for getting started with AI-powered resumes",
      features: [
        "AI-powered resume analysis",
        "Basic template library",
        "Advanced AI suggestions",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Monthly",
      price: 19,
      description: "Ideal for job seekers who want the full experience",
      features: [
        "Everything in Free",
        "Premium templates",
        "Support for multiple resumes",
        "Priority support",
        "LinkedIn profile optimization",
      ],
      popular: true,
    },
    {
      name: "Lifetime",
      price: 99,
      description: "One-time payment for unlimited access forever",
      features: [
        "Everything in Monthly plan",
        "Lifetime updates",
        "Early access to new features",
        "Personal career coach consultation",
        "Custom branding options",
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
          Choose Your Resume Enhancement Plan
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Transform your career prospects with our AI-powered resume builder
        </p>

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
                  {plan.name === "Monthly" && <span className="text-neutral-600">/month</span>}
                  {plan.name === "Lifetime" && <span className="text-neutral-600"> one-time</span>}
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
                {plan.price === 0 ? "Get Started Free" : "Get Started"}
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
              Try our service risk-free for 30 days. If you're not completely satisfied with our Monthly plan, we'll refund your payment.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;