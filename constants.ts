
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ELEMENTS：城市守护者与居民的社交任务系统',
    description: '基于社区互助设计理念的社交任务平台，整合居民需求与城市服务的创新解决方案。',
    tags: ['UX设计', '社区', '交互设计'],
    imageUrl: 'https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/01.jpg',
  },
  {
    id: '2',
    title: 'THE GAZE：被监视者的逃生协议',
    description: '探索隐私与监控主题的交互式装置设计，通过沉浸式体验诠释个人自由与社会观察的对话。',
    tags: ['互动装置', '体验设计', '叙事'],
    imageUrl: 'https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/02.jpg',
  },
  {
    id: '3',
    title: '记忆锚点：Memory Anchor',
    description: '利用认知心理学与交互设计探索记忆的可视化表达，打造情感与时间交织的沉浸式体验。',
    tags: ['认知设计', '数据可视化', '体验'],
    imageUrl: 'https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/03.jpg',
  },
  {
    id: '4',
    title: 'RUI：个人数字绘画作品集',
    description: '汇集多年数字艺术创作精华，展现从概念设计到最终呈现的完整创意历程与审美探索。',
    tags: ['数字艺术', '插画', '角色设计'],
    imageUrl: 'https://rui-portfolio-01-1417441599.cos.ap-shanghai.myqcloud.com/04.jpg',
  }
];

export const SKILLS: Skill[] = [
  { name: 'Figma (UI/UX 核心)', level: 100, category: 'Design' },
  { name: 'Blender / 视觉渲染', level: 95, category: '3D' },
  { name: 'Unity / 3D 原型', level: 90, category: '3D' },
  { name: 'Gemini/AI 集成', level: 85, category: 'AI' },
  { name: 'React / 前端架构', level: 85, category: 'Frontend' },
  { name: 'VSCode/编程功底', level: 80, category: 'Development' },
];

export const PORTFOLIO_BIO = `我是 Rui，一名交互设计师与前端工程师，专注于打造兼具功能性与美感的数字体验。
 我擅长搭建设计与工程之间的桥梁，使用 3D 图形与生成式 AI 创建下一代网络界面。 
 欢迎长期工作机会与合作。`;
