import React from "react";
import { FiUser, FiCalendar, FiMessageCircle } from "react-icons/fi";
import Image from "next/image";

interface JournalCardProps {
  id: number;
  image: string;
  author: string;
  date: string;
  comments: number;
  title: string;
  excerpt: string;
  slug: string;
}

const JournalCard: React.FC<JournalCardProps> = ({
  image,
  author,
  date,
  comments,
  title,
  excerpt,
  slug,
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl duration-300">
      {/* Image Container */}
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <FiUser size={16} className="text-myblue" aria-hidden="true" />
            <span className="uppercase font-medium">{author}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FiCalendar size={16} className="text-myblue" aria-hidden="true" />
            <time dateTime={date}>{date}</time>
          </div>

          <div className="flex items-center gap-1.5">
            <FiMessageCircle
              size={16}
              className="text-myblue"
              aria-hidden="true"
            />
            <span>{comments} COMMENTS</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-myblue transition-colors">
          <a
            href={slug}
            className="focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded"
          >
            {title}
          </a>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed">{excerpt}</p>
      </div>
    </article>
  );
};

export default JournalCard;
