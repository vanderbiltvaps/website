import Image from "next/image";

export default function MentorshipPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-100 py-20">
        <h1
          className="text-5xl text-center font-playfair font-light mb-8"
          style={{ fontVariant: "small-caps" }}
        >
          Our Mentorship Program
        </h1>
        <p className="text-center font-light font-roboto-flex text-xl px-10">
          Our mission is to grow a global network of highly motivated student
          leaders who seek to impact Vanderbilt and the greater business
          community. We want to foster a tight-knit community focused on
          developing professional and leadership skills for success. We welcome
          students of all majors and interests to join our club in order to
          develop their professional skills.
        </p>
      </div>

      <div className=" p-20">
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <Image
            src="/mentorshippic.png"
            alt="Group of mentorship program participants"
            width={800}
            height={400}
          />
        </div>

        <div className="mb-8">
          <h1
            className="text-5xl text-center font-playfair font-light mb-8"
            style={{ fontVariant: "small-caps" }}
          >
            About the Program
          </h1>
          <p className="font-roboto-flex font-light text-xl">
            Our signature program is proud to host the VAPS Spring Mentorship
            Program. Mentees will get matched with mentors that have experience
            in your dream field! In the 10-week session, mentees will also learn
            a multitude of techniques and tips on how to break in the industry.
            Keep an eye out for applications in November!
          </p>
        </div>

        <div className="mb-8">
          <h1
            className="text-5xl text-center font-playfair font-light mb-8"
            style={{ fontVariant: "small-caps" }}
          >
            What We Look For
          </h1>
          <p className="font-roboto-flex font-light text-xl">
            We look for ambitious and dedicated students wanting to break into
            their preferred industry. In the application, we expect to see how
            the Mentorship Program will benefit you. We also look for potential.
          </p>
        </div>

        <div>
          <h1
            className="text-5xl text-center font-playfair font-light mb-8"
            style={{ fontVariant: "small-caps" }}
          >
            What Will I Learn?
          </h1>
          <p className="font-roboto-flex font-light text-xl">
            In the 10-week program, you will attend learning sessions every week
            to learn everything from refining the perfect resume, to sparking
            coffee chats with alumni. You will also be introduced to the
            exclusive VAPS LinkedIn Network, where you can connect with alumni
            across various industries.
          </p>
        </div>
      </div>
    </div>
  );
}
