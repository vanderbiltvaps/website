import React from "react";
import Image from "next/image";
import Link from "next/link";
import { board, FAQ } from "@/utils/info";
import Board from "@/components/Board";
import image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-100 flex flex-col items-center px-20 py-20">
        <h1
          className="text-5xl font-light text-center font-playfair mb-4"
          style={{ fontVariant: "small-caps" }}
        >
          Who We Are
        </h1>
        <p className="text-center font-roboto-flex text-xl font-light">
          Our mission is to grow a global network of highly motivated student
          leaders who seek to impact Vanderbilt and the greater business
          community. We want to foster a tight-knit community focused on
          developing professional and leadership skills for success. We welcome
          students of all majors and interests to join our club in order to
          develop their professional skills.
        </p>
      </div>

      <div className="mx-auto px-4 py-12 mt-24">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-12 mx-20">
            <Image
              src="/vapsprofessional.png"
              alt="Professional development event"
              width={400}
              height={300}
            />
            <div className="">
              <h2
                className="text-5xl font-light mb-4 font-playfair text-center"
                style={{ fontVariant: "small-caps" }}
              >
                Professional
              </h2>
              <p className="text-left font-roboto-flex font-light text-xl">
                VAPS is committed to professional development through events
                such as resume workshops, networking events, mentorship program,
                and more. From IB to Tech, VAPS prioritizes on building relevant
                skills, guiding members to professional success.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mx-20">
            <Image
              src="/vapscommunity.png"
              alt="VAPS community event"
              width={400}
              height={300}
            />

            <div>
              <h2
                className="text-5xl mb-4 font-playfair text-center font-light"
                style={{ fontVariant: "small-caps" }}
              >
                Community
              </h2>
              <p className="text-left font-roboto-flex font-light text-xl">
                VAPS is a vibrant community dedicated to supporting and
                empowering Asian students as they navigate their academic and
                professional journeys. The club provides a collaborative
                environment where members can connect, share experiences, and
                gain valuable insights into various industries.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 mt-12">
          <div className="flex flex-col md:flex-row items-center gap-12 mx-20">
            <Image
              src="/vapslearning.png"
              alt="Professional development event"
              width={400}
              height={300}
            />
            <div>
              <h2
                className="text-5xl font-light mb-4 font-playfair text-center"
                style={{ fontVariant: "small-caps" }}
              >
                Learning Model
              </h2>
              <p className="text-left font-roboto-flex font-light text-xl mb-2">
                Fall: Learn & Explore; Spring: Dive & Challenge.
              </p>
              <p className="text-left font-roboto-flex font-light text-xl">
                Our programming line-up is specifically designed to help you get
                a sense of different industries and general idea in the fall;
                our mentorship program helps you truly learn about the chosen
                industry
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-5xl font-light text-center mb-12 font-playfair"
            style={{ fontVariant: "small-caps" }}
          >
            Meet Our 2024-2025 Exec Board
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {board.map((data, index) => (
              <Board
                name={data.name}
                major={data.major}
                year={data.year}
                image={data.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-5xl text-center mb-12 font-playfair"
            style={{ fontVariant: "small-caps" }}
          >
            Frequently Asked Questions
          </h2>
          {FAQ.map((faq, index) => (
            <div key={index}>
              <p className="font-playfair font-light text-3xl mb-2">
                {faq.question}
              </p>
              <p className="font-roboto-flex text-lg font-light mb-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-5xl mb-10 font-playfair"
            style={{ fontVariant: "small-caps" }}
          >
            Still Have Questions?
          </h2>
          <Link
            href="/contact"
            className="bg-vaps-blue text-white px-10 py-4 rounded-full hover:opacity-90 transition duration-300 text-2xl font-light"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
