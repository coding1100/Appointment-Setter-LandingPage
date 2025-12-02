import { FC } from "react";

interface Testimonialprops {}

const Testimonial: FC<Testimonialprops> = ({}) => {
  const testimonials = [
    {
      quote:
        '"We used to lose every after-hours job. Now the AI answers late-night calls instantly, books emergencies, and secures next-day appointments before customers move on."',
      name: "Morgan Blake",
      city: "Austin, TX — Sep/2025",
      image: "/images/reviews/review1.jpg",
    },
    {
      quote:
        '"Middle-of-the-night leaks were costing us thousands. Sam AI  catches those calls, gathers details, and confirms the crew slot in seconds. Revenue jumped fast."',
      name: "Ben Martin",
      city: "Phoenix, AZ — June/2025",
      image: "/images/reviews/review2.jpg",
    },
    {
      quote:
        '"When I’m stuck in meetings, the AI Appointment Setter picks up every call, verifies the issue, and schedules the right tech. No more callbacks or scrambling during lunch."',
      name: "Jason Lowery",
      city: "Denver, CO — Feb/2025",
      image: "/images/reviews/review3.webp",
    },
    {
      quote:
        '"I used to return 20 missed calls after my shift. Now Sam AI handles all daytime inquiries, confirms addresses, and books jobs without double-booking."',
      name: "Claire Walters",
      city: "Portland, OR — Jan/2025",
      image: "/images/reviews/review4.jpg",
    },
    {
      quote:
        '"We were drowning in voicemails. The AI answers instantly, logs transcripts, and sends everything to one dashboard. My team hasn’t touched voicemail in months."',
      name: "Micheal Mclaughlin",
      city: "Seattle, WA — Mar/2024",
      image: "/images/reviews/review5.jpg",
    },
    {
      quote:
        '"Instead of sorting through a full voicemail inbox every morning, we now see every call neatly transcribed. Nothing gets lost, and follow-ups are automatic."',
      name: "Naomi Feld",
      city: "Miami, FL — May/2024",
      image: "/images/reviews/review6.jpeg",
    },
    {
      quote:
        '"We used to track leads on spreadsheets. The AI now routes, nurtures, and updates each prospect automatically. My team finally focuses on closing — not admin."',
      name: "Evan Chambers",
      city: "Chicago, IL — Dec/2024",
      image: "/images/reviews/review7.jpeg",
    },
    {
      quote:
        '"Lead follow-up was slow and inconsistent. The AI Appointment Setter sends reminders, collects details, and keeps customers engaged. Close rates are up, and no leads slip through."',
      name: "Kevin Garcia",
      city: "Tampa, FL — Dec/2024",
      image: "/images/reviews/review8.jpeg",
    },
  ];

  return (
    <section className=" container mx-auto pt-10 pb-10">
      <h2 className="sm:text-[40px] text-2xl font-semibold leading-tight text-white md:text-[50px]">
        Loved by plumbing teams who live and die by booked jobs
      </h2>
      <div className="sm:mt-14 mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="relative flex h-full flex-col justify-between gap-6 rounded-[28px] border border-white/8 bg-[#070D1F]/75 p-8 text-left shadow-[0_22px_70px_rgba(5,12,35,0.45)] backdrop-blur-2xl transition hover:-translate-y-2 hover:border-white/18"
          >
            <span className="sm:text-[20px] text-base leading-[1.5] text-[#E8ECFF]">
              {testimonial.quote}
            </span>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full border border-white/15 object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-[#8192C3]">
                  {testimonial.city}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
