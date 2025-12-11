import { ModuleData, NavigationItem, CaseStudy, Track } from './types';
import { Network, Brain, Music, Database, Shield, Swords, Zap } from 'lucide-react';

export const COLORS = {
  background: '#121212',
  surface: '#1c1c1c',
  primary: '#f2f2f2',
  secondary: '#aaaaaa',
  accent: '#cd7f32',
  highlight: '#f5f5dc',
  border: '#36454F',
};

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Doctrine', 
    path: '/doctrine',
    children: [
      { label: 'Foundations', path: '/doctrine/foundations' },
      { label: 'Attack Cycle', path: '/doctrine/attack' },
      { label: 'Defense', path: '/doctrine/defense' }
    ]
  },
  { label: 'Breadcrumb Web', path: '/breadcrumb-web' },
  { label: 'Seuss to Cypher', path: '/seuss-to-cypher' },
  { label: 'Music', path: '/music' },
  { label: 'Source Code', path: '/source-code' },
];

export const MODULES: ModuleData[] = [
  {
    id: 'breadcrumb',
    title: 'The Breadcrumb Web',
    subtitle: 'Pattern Recognition',
    description: 'Learn to recognize coordinated manipulation through annotated case studies extracted from primary source material.',
    status: 'in-development',
    path: '/breadcrumb-web',
    audience: 'People who suspect coordinated manipulation but can\'t articulate what they\'re seeing.',
    method: 'Pattern recognition through primary source material.',
  },
  {
    id: 'seuss',
    title: 'Seuss to Cypher',
    subtitle: 'Cognitive Architecture',
    description: 'Technical breakdowns of cognitive manipulation techniques. Understand the mechanics of rhythm, meter, and linguistic disruption.',
    status: 'complete',
    path: '/seuss-to-cypher',
    audience: 'People who know they\'re being manipulated but don\'t understand the mechanics.',
    method: 'Neurolinguistic analysis of pattern establishment and disruption.',
  },
  {
    id: 'music',
    title: 'Music',
    subtitle: 'Embodied Mastery',
    description: 'Live demonstration that defensive protocols become automatic when fully internalized. Performance as proof-of-concept.',
    status: 'in-development',
    path: '/music',
    audience: 'People who need proof that mastery is achievable.',
    method: 'Performance as proof-of-concept for complete integration.',
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'CS-001',
    title: 'The Engineered Outrage Protocol in Social Settings',
    date: '2023-11-14',
    incident: 'Subject A introduced a controversial topic with specific trigger keywords known to be sensitive to the target, immediately followed by Subject B recording the reaction while feigning disinterest.',
    tactic: 'Provocation / Documentation Trap. Doctrine Ref: Attack Cycle > Exploitation Cascade.',
    recognition: 'Simultaneity of provocation and recording readiness violated baseline probability of random social interaction.',
    counter: 'Strategic Silence & Grey Rock. Doctrine Ref: Defense > Response Control.',
    lesson: 'Orchestrators rely on your predictability. When you disrupt the expected emotional output, their collection mechanism fails.'
  },
  {
    id: 'CS-002',
    title: 'Synchronized Isolation Tactics',
    date: '2023-12-02',
    incident: 'Three peripheral network members cancelled scheduled engagements within a 2-hour window using identical phrasing ("Something sudden came up").',
    tactic: 'Swarm Devaluation. Doctrine Ref: Foundations > Asymmetric HUMINT.',
    recognition: 'Linguistic patterning (identical phrasing) suggests a single author distributed to multiple actors.',
    counter: 'Radical Autonomy. Doctrine Ref: Defense > Psychological Hardening.',
    lesson: 'When the network moves in unison, it reveals the command structure. Isolation is only effective if you require their validation.'
  }
];

export const TRACKS: Track[] = [
  {
    id: 'track-01',
    title: 'Kindergarten Gangster',
    description: 'Featured demonstration of complete integration—AAO doctrine embodied. Demonstrates what "they test me, I teach" sounds like fully internalized.',
    technicalAnnotation: [
      'Opening establishes boom-bap baseline (pattern contract)',
      'Strategic syncopation at "Excuse me, sir..." (cognitive disruption)',
      'Hook uses anapestic drive (da-da-DUM foundation)',
      'Outro delivers finality through stable pattern return'
    ],
    duration: '3:42',
    isFeatured: true
  },
  {
    id: 'track-02',
    title: 'Polyrhythmic Defense',
    description: 'An auditory exploration of the "Grey Rock" technique applied to rhythm.',
    technicalAnnotation: [
      'Steady 4/4 kick represents the defensive baseline',
      'Erratic hi-hat patterns represent incoming stimuli',
      'Bassline refuses to engage with the chaotic treble frequencies'
    ],
    duration: '2:55'
  },
  {
    id: 'track-03',
    title: 'Surgical Detachment',
    description: 'Instrumental piece focusing on the concept of clinical observation during conflict.',
    technicalAnnotation: [
      'Cold, metallic synth textures',
      'Minimalist progression (emotional starvation)',
      'Sudden silence gaps (response control)'
    ],
    duration: '4:10'
  }
];