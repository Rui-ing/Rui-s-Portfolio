
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(project)}
      onTap={() => onSelect(project)}
      role="button"
      tabIndex={0}
      className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all hover:border-pink-500/40 hover:shadow-[0_20px_40px_rgba(244,114,182,0.1)] cursor-pointer"
      onKeyPress={(e) => { if (e.key === 'Enter') onSelect(project); }}
    >
      <div className="aspect-[16/10] w-full overflow-hidden relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Hover Badge */}
        <div className="absolute top-4 right-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
          <div className="p-3 rounded-full bg-pink-500 text-white shadow-lg">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 text-[10px] uppercase tracking-widest font-bold bg-white/5 text-pink-200/70 rounded-full border border-white/5 group-hover:border-pink-500/20 group-hover:bg-pink-500/5 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
