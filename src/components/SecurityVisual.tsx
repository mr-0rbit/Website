import { Lock, ShieldCheck, Bug, Activity, FileCheck, GraduationCap } from 'lucide-react';

const orbitIcons = [Bug, Activity, FileCheck, ShieldCheck, GraduationCap, Lock];

export default function SecurityVisual() {
  return (
    <div className="shield-3d relative flex items-center justify-center h-[420px] sm:h-[480px]">
      {/* Ambient glow */}
      <div className="absolute w-64 h-64 bg-brand-500/15 rounded-full blur-[100px]" />

      {/* Rotating orbit rings */}
      <div className="shield-orbit absolute inset-0 flex items-center justify-center">
        <div className="shield-ring relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
          {/* Ring line */}
          <div className="absolute inset-0 rounded-full border border-brand-500/20" />
          <div className="absolute inset-6 rounded-full border border-brand-500/10" />

          {/* Orbiting icons */}
          {orbitIcons.map((Icon, i) => {
            const angle = (i / orbitIcons.length) * Math.PI * 2;
            const radius = 160;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div
                  className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 border border-brand-500/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-brand/10"
                  style={{ transform: 'rotateY(0deg)', backfaceVisibility: 'hidden' }}
                >
                  <Icon className="w-5 h-5 text-brand-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center shield with float */}
      <div className="shield-float relative z-10">
        <div className="shield-3d-inner">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-700/10 border border-brand-500/30 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-brand/20">
            <img src="/logo1 copy 3.png" alt="Rynex Security" className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
