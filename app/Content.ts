export const plumberData = {
  heroSection: {
    headline: "World's first plumbing specialist Ai Appointment setter ",
    description: "Answer Plumbing Calls Intelligently. Book Automatically",
  },
  featureSection: {
    headline: "Challenges Plumbers Face Booking New Leads",
    problemCards: [
      {
        title: "Missing late night calls",
        anchor: "problem-night-calls",
      },
      {
        title: "Missing calls while at work",
        anchor: "problem-busy-crews",
      },
      {
        title: "Voice mails piling up",
        anchor: "problem-triage",
      },
      {
        title: "Managing leads manually",
        anchor: "problem-voicemail",
      },
    ],
  },
  platformPreviewSection: {
    headline: "Watch how our appointment setter books appointment for plumbers",
    video: "/videos/plumbarVid.mp4",
  },
  revenueSection: {
    headline: "Increase in revenue",
    solutionSections: [
      {
        heading: "20% increase in leads",
        description:
          "AI instantly responds to inquiries, qualifies prospects, and follows up automatically—capturing more opportunities without adding extra workload to your team.",
      },
      {
        heading: "35% increase in revenue",
        description:
          "Faster booking, proactive follow-ups, and zero missed calls ensure more jobs are secured, helping your business convert high-value leads consistently.",
      },
    ],
  },
  featureSections: [
    {
      headline: "Missing Late Night Calls",
      id: "problem-night-calls",
      description:
        "AI Appointment Setter answers late-night calls, identifies urgent issues, collects essential details, and books the slot before your customers reach competitors.",
      cta: "See emergency mode",
      image: "/videos/plumbingLateNightCalls.gif",
    },
    {
      headline: "Missing Calls While at Work",
      id: "problem-busy-crews",
      description:
        "While you’re busy at work, our AI Rep answers calls, gathers key details and schedules service without double-booking.",
      cta: "Streamline dispatch",
      image: "/videos/plumberBusyOnSight.gif",
    },
    {
      headline: "Voice Mails Piling Up",
      id: "problem-triage",
      description:
        "Our AI Rep ensures no call goes to voice mail, and all calls are answered instantly.",
      cta: "Boost show rates",
      image: "/videos/plumbingVoiceMails.gif",
    },
    {
      headline: "Managing leads manually",
      id: "problem-voicemail",
      description:
        "Our AI Rep captures, qualifies, and organizes every lead automatically, ensuring faster follow-ups and preventing opportunities from slipping through the cracks.",
      cta: "Boost show rates",
      image: "/videos/PlumberManualCalls.gif",
    },
  ],
  faqSection: [
    {
      question:
        "How does the AI voice agent handle incoming plumbing service calls?",
      answer:
        "When a customer calls your plumbing business, the system automatically answers using your AI voice agent. The agent can handle emergency calls (like burst pipes or water leaks) and routine service requests (drain cleaning, water heater installation, pipe repair, etc.). The AI agent uses natural conversation to understand the customer's plumbing issue, collects their contact information and service address, and schedules an appointment based on your available time slots. The system supports both browser testing (to preview how your agent sounds) and real phone calls via Twilio integration. The agent uses Google Gemini 2.0 for intelligent conversation, Deepgram for accurate speech recognition, and ElevenLabs for natural-sounding voice responses.",
    },
    {
      question:
        "Can I customize the AI agent for different plumbing services like emergency repairs, installations, or maintenance?",
      answer:
        "Absolutely! You can create separate AI agents for different plumbing service types. For example, you might have one agent for emergency plumbing calls (with urgent tone and immediate scheduling), another for routine services like drain cleaning or water heater maintenance, and another for new installations. Each agent can have its own voice personality (choose from 12+ professional voices), customized greeting that mentions your plumbing business, and specific conversation prompts that understand plumbing terminology. You can update agent settings anytime - for instance, if you want to emphasize your 24/7 emergency service or highlight your expertise with tankless water heaters.",
    },
    {
      question:
        "How does the system prevent double-booking when scheduling plumbing appointments?",
      answer:
        "The scheduling system automatically prevents double-booking by validating every appointment time against your existing schedule. When a customer requests a time slot (e.g., \"Can you come fix my leaky faucet tomorrow at 2 PM?\"), the system checks if you already have a plumbing service call scheduled at that time. It also accounts for travel time between jobs using configurable buffer periods. If a customer is on the phone confirming their appointment, the system can temporarily hold that time slot (5-30 minutes) so another caller can't book it while the first customer decides. This ensures your plumbers aren't overbooked and can provide quality service to each customer.",
    },
    {
      question:
        "What happens when a customer books a plumbing service appointment through the AI agent?",
      answer:
        'When a customer successfully books an appointment (e.g., "I need a plumber to fix my clogged drain on Thursday"), the system: (1) Validates the appointment time against your existing schedule and business hours, (2) Creates a complete appointment record with customer name, phone number, service address, service type (drain cleaning, pipe repair, etc.), and appointment time, (3) Automatically sends a professional confirmation email to the customer with all appointment details, (4) Stores the appointment in your system with status "scheduled". You can later update the appointment status when your plumber arrives (confirmed), completes the work (completed with notes about what was fixed), or if the customer cancels (cancelled with reason).',
    },
    {
      question:
        "How do I set up my plumbing business phone number to receive calls through the AI agent?",
      answer:
        "First, you'll need a Twilio account. Test your Twilio credentials using the system's test endpoint to ensure they work correctly. Then, create the Twilio integration for your plumbing business by providing your Account SID and Auth Token - the system encrypts these credentials securely. Next, search for available local phone numbers (customers prefer calling local numbers) or use an existing number. Purchase and assign the phone number to your plumbing AI agent. The system automatically configures webhooks so when customers call your plumbing business number, the AI agent answers and can schedule appointments. You can have multiple phone numbers for different service areas or different agents.",
    },
    {
      question:
        "How can I monitor if my plumbing business's AI scheduling system is working properly?",
      answer:
        "The system provides comprehensive health monitoring endpoints. The basic health check confirms your system is running. The detailed health check verifies all critical components: Redis (for session management and slot holds), Firebase (where all your appointments and customer data are stored), and LiveKit (the voice agent infrastructure). There are also Kubernetes-ready probes for production deployments. If any component has issues (like if Firebase is down and appointments can't be saved), the health check will alert you immediately. This ensures your plumbing business never misses a service call due to system problems - critical when customers have emergencies like burst pipes or water heater failures.",
    },
  ],
};
