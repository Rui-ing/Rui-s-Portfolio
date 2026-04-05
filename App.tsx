
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Layers, Cpu, Palette, Code, ChevronDown } from 'lucide-react';
import Scene from './components/Scene';
import ProjectCard from './components/ProjectCard';
import AIAgent from './components/AIAgent';
import { PROJECTS, SKILLS, PORTFOLIO_BIO } from './constants';
import { Project } from './types';

// Declare TCPlayer on window
declare global {
  interface Window {
    TCPlayer: any;
  }
}

const App: React.FC = () => {
  const [isAIAgentOpen, setIsAIAgentOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initialize TCPlayer for first and third projects
  useEffect(() => {
    if (selectedProject?.id === '1' || selectedProject?.id === '3') {
      // Wait for DOM to be ready
      setTimeout(() => {
        if (selectedProject.id === '1') {
          // Initialize first player
          const videoElement1 = document.getElementById('player-container-id') as HTMLVideoElement;
          if (videoElement1 && window.TCPlayer) {
            const player1 = window.TCPlayer('player-container-id', {
              reportable: false,
            });
            player1.src('https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/Video/01-1.mov');
          }

          // Initialize second player
          const videoElement2 = document.getElementById('player-container-id-2') as HTMLVideoElement;
          if (videoElement2 && window.TCPlayer) {
            const player2 = window.TCPlayer('player-container-id-2', {
              reportable: false,
            });
            player2.src('https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/Video/01-2.mov');
          }
        }

        if (selectedProject.id === '3') {
          // Initialize third player
          const videoElement3 = document.getElementById('player-container-id-3') as HTMLVideoElement;
          if (videoElement3 && window.TCPlayer) {
            const player3 = window.TCPlayer('player-container-id-3', {
              reportable: false,
            });
            player3.src('https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/Video/02-1.mov');
          }
        }
      }, 100);
    }
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen selection:bg-pink-500/30 bg-[#030303] text-white">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-pink-500 origin-left z-[100]" style={{ scaleX }} />

      {/* 3D Background */}
      <Scene />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-center bg-transparent">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-pink-500 flex items-center justify-center text-sm shadow-lg shadow-pink-500/20">RI</div>
          <span>RUI.DEV</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-zinc-400">
          {[
            { label: '作品', href: '#work' },
            { label: '技能栈', href: '#stack' },
            { label: '关于', href: '#about' }
          ].map((item) => (
            <motion.a 
              key={item.label}
              href={item.href} 
              whileHover={{ scale: 1.1, color: '#fff' }}
              className="hover:text-white transition-colors relative group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-2xl bg-white text-black font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            联系我
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[90vh] text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/5 text-pink-400 text-[10px] font-bold tracking-widest uppercase mb-10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            欢迎机会
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-[0.9] uppercase">
            Rui's <br /> <span className="text-pink-500">Portfolio</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 font-medium mb-14 max-w-2xl mx-auto leading-relaxed">
            一名深耕 <span className="text-white">3D</span> 与 <span className="text-white">生成式 AI</span> 领域的交互设计师。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-5 rounded-3xl bg-pink-500 text-white font-black text-lg hover:shadow-[0_15px_30px_rgba(244,114,182,0.3)] transition-all flex items-center justify-center gap-3"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              查看作品 <ArrowRight size={22} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold text-lg transition-all"
              onClick={() => setIsAIAgentOpen(true)}
            >
              与 AI Rui 对话
            </motion.button>
          </div>
        </motion.div>
        
        {/* Helper Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 uppercase tracking-widest font-bold flex flex-col items-center gap-2">
           <span>向下滚动探索</span>
           <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
           >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </header>

      {/* Featured Projects */}
      <section id="work" className="relative py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-pink-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-6 block">案例研究</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight uppercase">精选 <br /> 作品</h2>
          </div>
          <p className="max-w-xs text-zinc-500 text-base leading-relaxed font-medium">
            展示在 Web 和移动平台上的技术熟练度与创意愿景。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onSelect={(p) => setSelectedProject(p)} />
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#0B0B0B] text-white rounded-2xl shadow-2xl w-full h-[95vh] max-w-7xl flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 flex-shrink-0">
              <div>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm text-zinc-400">{selectedProject.tags.join(' • ')}</p>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-zinc-400 hover:text-white text-lg">✕</button>
            </div>
            
            {/* Content - Full width scrollable */}
            <div className="overflow-y-auto flex-1 p-6">
              {selectedProject.id === '1' && (
                <div className="w-full mb-6 flex flex-col lg:flex-row gap-4 justify-center">
                  <div className="border border-pink-500/30 rounded-lg overflow-hidden" style={{width: '620px', height: '286px'}}>
                    <video id="player-container-id" preload="auto" width="620" height="250" playsInline></video>
                  </div>
                  <div className="border border-pink-500/30 rounded-lg overflow-hidden" style={{width: '620px', height: '286px'}}>
                    <video id="player-container-id-2" preload="auto" width="620" height="250" playsInline></video>
                  </div>
                </div>
              )}
              {selectedProject.id === '3' && (
                <div className="w-full mb-6 flex justify-center">
                  <div className="border border-pink-500/30 rounded-lg overflow-hidden" style={{width: '620px', height: '286px'}}>
                    <video id="player-container-id-3" preload="auto" width="620" height="250" playsInline></video>
                  </div>
                </div>
              )}
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-auto object-contain rounded-lg mb-6" 
              />
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-pink-300">项目描述</h4>
                <p className="text-zinc-300 leading-relaxed text-base">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tech Stack */}
      <section id="stack" className="relative py-40 px-6 bg-pink-500/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-bold mb-8 text-white uppercase tracking-tighter">工具与能力</h2>
              <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
                我擅长利用跨领域工具，打通从创意概念、3D 原型到最终落地的设计全链路。
              </p>
              <div className="flex gap-5">
                {[Code, Cpu, Palette].map((Icon, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(244,114,182,0.1)', color: '#f472b6' }}
                    className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3 items-end">
                    <span className="text-zinc-200 font-bold text-sm tracking-wide uppercase">{skill.name}</span>
                    <span className="text-pink-500/60 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-40 px-6 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 rounded-3xl mx-auto mb-16 bg-gradient-to-tr from-pink-500 to-rose-400 p-[2px] shadow-2xl shadow-pink-500/20"
        >
          <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center overflow-hidden">
             <img src="https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/ICON.jpg" alt="Rui Avatar" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-16 leading-[1.1] uppercase tracking-tighter">
          "将 <span className="text-pink-500">美学</span> 与 <span className="text-pink-500">算法</span> 精准结合。"
        </h3>
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-20 font-medium whitespace-pre-wrap">
          {PORTFOLIO_BIO}
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="text-zinc-500 text-sm font-medium mb-2">联系方式</div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 text-zinc-300 hover:shadow-lg hover:shadow-pink-500/5 transition-all cursor-pointer"
              onClick={() => navigator.clipboard.writeText('NoizandNoodles')}
            >
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <div className="text-sm font-bold">微信</div>
                <div className="text-xs text-zinc-400">NoizandNoodles</div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 text-zinc-300 hover:shadow-lg hover:shadow-pink-500/5 transition-all"
            >
              <span className="text-2xl">✉️</span>
              <div className="text-left">
                <div className="text-sm font-bold">QQ 邮箱</div>
                <div className="text-xs text-zinc-400">2870159308@qq.com</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-white/5 bg-black/80 backdrop-blur-xl text-center">
          <p className="text-zinc-600 text-xs font-bold tracking-widest uppercase mb-4">
          用心打造，精准无误
        </p>
        <p className="text-zinc-500 text-[10px] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} RUI PORTFOLIO • NEXUS ENGINE v3
        </p>
      </footer>

      {/* AI Agent */}
      <AIAgent isOpen={isAIAgentOpen} onToggle={() => setIsAIAgentOpen(open => !open)} />
    </div>
  );
};

export default App;
