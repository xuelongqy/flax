import type { Offer } from './game';
import { BOLT_EVOLUTION, REACTOR, WEAPONS } from './content.ts';

export type Language = 'zh' | 'en';

const en = {
  loading: 'Loading outpost…',
  assetError: 'Asset loading failed. Please retry.',
  retry: 'Retry',
  objective: 'Fight endless waves. The run ends when your health reaches zero.',
  touchHelp: 'Drag the joystick to move · Tap the pulse icon to defend · Pause anytime',
  keyboardHelp: 'WASD / arrows to move · Space to pulse · Esc to pause',
  hudKeyboardHelp: 'WASD  MOVE       SPACE  PULSE       ESC  PAUSE',
  start: 'Start',
  settings: 'Settings',
  best: 'BEST',
  longest: 'LONGEST',
  language: 'Language',
  chinese: '中文',
  english: 'English',
  showFps: 'Show FPS',
  fpsHelp: 'Actual combat drawing rate; inactive while paused.',
  fps: 'FPS',
  fpsInactive: '--',
  quality: 'Quality',
  balanced: 'balanced',
  detailed: 'detailed',
  reducedMotion: 'Reduced motion',
  music: 'Music',
  effects: 'Effects',
  haptics: 'Haptics',
  on: 'on',
  off: 'off',
  done: 'Done',
  paused: 'PAUSED',
  resume: 'Resume',
  restart: 'Restart',
  levelUp: 'LEVEL UP',
  chooseUpgrade: 'Choose one upgrade',
  upgradeHint: 'Select a card · 1 / 2 / 3',
  select: 'Select',
  rank: 'Rank',
  evolution: 'Evolution',
  maxRank: 'MAX',
  signalLost: 'SIGNAL LOST',
  score: 'Score',
  elapsed: 'Time',
  kills: 'Kills',
  droneDisabled: 'Drone disabled',
  guardians: 'Guardians',
  mainMenu: 'Main menu',
  rotateLandscape: 'Rotate to landscape',
  enlargeWindow: 'Enlarge the window to continue',
  health: 'Health',
  experience: 'Experience',
  level: 'LV',
  pause: 'Pause',
  pulse: 'Pulse',
  pulseCooldown: 'Pulse cooldown',
  reactor: 'Reactor',
  reactorHold: `Hold the marked plate for ${REACTOR.captureSeconds}s`,
  overchargeReady: 'Overcharge ready',
  overchargeHint: 'Pulse near the exposed core',
  nest: 'Summoning nest',
  nestHint: 'Destroy to stop reinforcements',
  fieldHint:
    'Electric ground: leave the hatched boundary before it pulses. It hits enemies too.',
  movementJoystick: 'Movement joystick',
  boltWeapon: 'Bolt weapon',
  orbitWeapon: 'Orbit weapon',
  chainWeapon: 'Chain weapon',
  newerSave: 'Newer save preserved; settings not saved.',
  savingUnavailable: 'Saving unavailable.',
  audioUnavailable: 'Audio unavailable; playing silently.',
  displayGroup: 'DISPLAY',
  audioGroup: 'AUDIO',
  controlsGroup: 'CONTROLS',
  systems: 'OUTPOST // SYSTEM READY',
  loadout: 'LOADOUT',
  resultReport: 'MISSION REPORT',
  pausedHelp: 'Encounter paused. Resume when ready.',
};

type Copy = typeof en;

const zh: Copy = {
  loading: '正在载入前哨站…',
  assetError: '资源加载失败，请重试。',
  retry: '重试',
  objective: '迎击无尽敌潮，生命归零才会结束。',
  touchHelp: '拖动摇杆移动 · 点击脉冲图标防御 · 随时暂停',
  keyboardHelp: 'WASD / 方向键移动 · 空格释放脉冲 · Esc 暂停',
  hudKeyboardHelp: 'WASD  移动       空格  脉冲       ESC  暂停',
  start: '开始行动',
  settings: '设置',
  best: '最高分',
  longest: '最长生存',
  language: '语言',
  chinese: '中文',
  english: 'English',
  showFps: '显示帧率',
  fpsHelp: '显示实际战斗绘制帧率，暂停时停止计数。',
  fps: 'FPS',
  fpsInactive: '--',
  quality: '画质',
  balanced: '均衡',
  detailed: '精细',
  reducedMotion: '减少动态效果',
  music: '音乐',
  effects: '音效',
  haptics: '触感反馈',
  on: '开启',
  off: '关闭',
  done: '完成',
  paused: '已暂停',
  resume: '继续',
  restart: '重新开始',
  levelUp: '升级',
  chooseUpgrade: '选择一项升级',
  upgradeHint: '选择卡片 · 1 / 2 / 3',
  select: '选择',
  rank: '阶级',
  evolution: '进化',
  maxRank: '满阶',
  signalLost: '信号中断',
  score: '得分',
  elapsed: '时间',
  kills: '击杀',
  droneDisabled: '无人机已失能',
  guardians: '守卫击破',
  mainMenu: '主菜单',
  rotateLandscape: '请横屏游玩',
  enlargeWindow: '请放大窗口后继续',
  health: '生命值',
  experience: '经验值',
  level: '等级',
  pause: '暂停',
  pulse: '脉冲',
  pulseCooldown: '脉冲冷却',
  reactor: '反应堆',
  reactorHold: `在标记平台内停留 ${REACTOR.captureSeconds} 秒`,
  overchargeReady: '过载就绪',
  overchargeHint: '靠近暴露的核心释放脉冲',
  nest: '召唤巢',
  nestHint: '摧毁以阻止增援',
  fieldHint: '电场：放电前离开斜纹边界，电流也会伤到敌人。',
  movementJoystick: '移动摇杆',
  boltWeapon: '电弧弹武器',
  orbitWeapon: '环绕刃武器',
  chainWeapon: '连锁放电武器',
  newerSave: '已保留新版存档，本次设置不会保存。',
  savingUnavailable: '暂时无法保存。',
  audioUnavailable: '音频不可用，继续静音游玩。',
  displayGroup: '显示',
  audioGroup: '声音',
  controlsGroup: '操作',
  systems: '前哨站 // 系统就绪',
  loadout: '武装模块',
  resultReport: '任务报告',
  pausedHelp: '战斗已暂停，准备就绪后继续。',
};

export function strings(language: Language): Copy {
  return language === 'en' ? en : zh;
}

interface OfferCopy {
  title: string;
  description: string;
}

const chineseOffers: Record<string, OfferCopy> = {
  'weapon:bolt': {
    title: '电弧弹',
    description: '自动向最近的敌人发射能量弹。',
  },
  'weapon:orbit': {
    title: '环绕刃',
    description: '刀刃环绕无人机，切割附近敌人。',
  },
  'weapon:chain': {
    title: '连锁放电',
    description: '闪电在附近敌人之间跳跃。',
  },
  'evolution:bolt:pierce': {
    title: '贯穿电弧',
    description: `每发最多贯穿 ${BOLT_EVOLUTION.pierce.targets} 名敌人，伤害提高 ${Math.round((BOLT_EVOLUTION.pierce.damageMultiplier - 1) * 100)}%。`,
  },
  'evolution:bolt:blast': {
    title: '爆破电弧',
    description: `命中后在附近爆破，伤害提高 ${Math.round((BOLT_EVOLUTION.blast.damageMultiplier - 1) * 100)}%。`,
  },
  'passive:fireRate': {
    title: '速充电容',
    description: '每阶使自动攻击冷却缩短 12%。',
  },
  'passive:moveSpeed': {
    title: '矢量推进',
    description: '每阶使移动速度提高 12%。',
  },
  'passive:pickupRadius': {
    title: '能量磁场',
    description: '每阶使能量收集范围增加 32。',
  },
  'passive:maxHealth': {
    title: '强化装甲',
    description: '每阶增加 25 点生命上限，并恢复等量生命。',
  },
  repair: {
    title: '紧急修复',
    description: '恢复最大生命值的 20%。',
  },
};

export function offerCopy(offer: Offer, language: Language): OfferCopy {
  const copy =
    language === 'zh' && Object.hasOwn(chineseOffers, offer.id)
      ? chineseOffers[offer.id]!
      : {
          title: offer.title,
          description: offer.description.replace(/ Rank \d+ of \d+\.$/, ''),
        };
  const rank = offer.rank - 1;
  if (offer.id === 'weapon:bolt') {
    const count = WEAPONS.bolt.bolts[rank]!;
    return {
      title: copy.title,
      description:
        language === 'zh'
          ? `每轮扇形发射 ${count} 发能量弹，自动瞄准附近敌人。`
          : `Fire ${count} ${count === 1 ? 'bolt' : 'bolts'} per volley in an aimed fan.`,
    };
  }
  if (offer.id === 'weapon:orbit')
    return {
      title: copy.title,
      description:
        language === 'zh'
          ? `${WEAPONS.orbit.blades[rank]} 把环绕刃持续切割附近敌人。`
          : `${WEAPONS.orbit.blades[rank]} orbiting blades cut nearby threats.`,
    };
  if (offer.id === 'weapon:chain')
    return {
      title: copy.title,
      description:
        language === 'zh'
          ? `连锁闪电每次最多击中 ${WEAPONS.chain.targets[rank]} 名敌人。`
          : `Each discharge jumps through up to ${WEAPONS.chain.targets[rank]} threats.`,
    };
  return copy;
}
