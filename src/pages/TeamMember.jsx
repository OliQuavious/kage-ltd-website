import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import team from "../data/Team";
import { HashLink } from 'react-router-hash-link';
import {
  HiChevronLeft,
  HiChevronRight,
  HiMail,
  HiPhone,
} from "react-icons/hi";

export default function TeamMember() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const memberId = parseInt(id, 10);
  const member = team.find((m) => m.id === memberId);
  const currentIndex = team.findIndex((m) => m.id === memberId);

  if (!member)
    return (
      <div className="text-center text-red-600 mt-20 text-lg">
        Team member not found.
      </div>
    );

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % team.length;
    navigate(`/team-member/${team[nextIndex].id}`);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + team.length) % team.length;
    navigate(`/team-member/${team[prevIndex].id}`);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-6 items-start bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500">
        {/* Image */}
        <div className="w-full max-w-md mx-auto max-h-[480px]">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-contain rounded-l-2xl"
          />
        </div>

      {/* Info */}
<div className="p-8 space-y-8 bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-300 bg-opacity-90 rounded-r-3xl shadow-xl text-center text-gray-900 relative overflow-hidden">
  {/* Decorative subtle animated shape */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-3xl animate-pulse pointer-events-none"></div>

  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight font-serif drop-shadow-md">
    {member.name}
  </h2>

  <p className="text-xl md:text-2xl font-semibold text-gray-800 italic tracking-wide">
    {member.role}
  </p>

  <div className="space-y-6 text-base md:text-lg">
    <div className="flex justify-center items-center gap-3 text-blue-900">
      <div className="p-2 bg-white rounded-full shadow-md flex items-center justify-center">
        <HiMail className="text-xl text-yellow-600" />
      </div>
      <a
        href={`mailto:${member.email}`}
        className="hover:underline hover:text-yellow-700 transition font-medium break-all"
      >
        {member.email}
      </a>
    </div>
    <div className="flex justify-center items-center gap-3 text-blue-900">
      <div className="p-2 bg-white rounded-full shadow-md flex items-center justify-center">
        <HiPhone className="text-xl text-yellow-600" />
      </div>
      <a
        href={`tel:${member.phone}`}
        className="hover:underline hover:text-yellow-700 transition font-medium"
      >
        {member.phone}
      </a>
    </div>
  </div>

<HashLink
  smooth
  to="/about#team-section"
  className="inline-block mt-6 px-6 py-2 bg-white bg-opacity-80 text-blue-900 font-semibold rounded-full shadow-md hover:bg-opacity-100 hover:shadow-lg transition"
>
  ← Back to Team
</HashLink>

</div>

        </div>
      {/* Bio */}
     <div className="max-w-4xl mx-auto mt-12 px-6 py-8 bg-white rounded-3xl shadow-lg border border-yellow-300 text-center text-gray-800">
  <p className="text-base md:text-lg leading-relaxed tracking-wide font-serif">
    {member.background}
  </p>

  <div className="mt-10 flex justify-center gap-6">
    <button
      onClick={handlePrev}
      className="flex items-center gap-3 px-6 py-3 bg-gray-100 text-gray-900 rounded-full shadow-md hover:bg-gray-200 active:scale-95 transition transform duration-200 ease-in-out text-sm font-medium"
      aria-label="Previous Team Member"
    >
      <HiChevronLeft className="text-xl text-yellow-600" />
      Previous
    </button>

    <button
      onClick={handleNext}
      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-600 active:scale-95 transition transform duration-200 ease-in-out text-sm"
      aria-label="Next Team Member"
    >
      Next
      <HiChevronRight className="text-xl" />
    </button>
  </div>
</div>

    </section>
  );
}
