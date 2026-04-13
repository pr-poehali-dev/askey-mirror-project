// Базовый размер шрифта на корне — clamp работает на div, а не на SVG.
// Всё внутри в em, SVG тоже через style (не атрибуты width/height).
const ROOT = 'clamp(10px, 3.2vw, 13px)';

const MirrorStickerTop = () => (
  <div
    className="absolute top-0 left-0 right-0 animate-mirror-content-reveal"
    style={{
      zIndex: 9,
      animationDelay: '800ms',
      background: 'rgba(255,255,255,0.97)',
      paddingBottom: '0.5em',
      fontSize: ROOT,
    }}
  >
    {/* Статус-бар iOS */}
    <div style={{
      position: 'relative',
      height: '1.8em',
      margin: '0.4em 0 0.25em',
    }}>
      {/* Время — абсолютно слева */}
      <span style={{
        position: 'absolute',
        left: '1em',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '0.9em', fontWeight: 700, color: '#111',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        letterSpacing: '-0.5px', lineHeight: 1,
      }}>
        9:41
      </span>

      {/* Dynamic Island — абсолютно по центру */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '3.2em', height: '1.15em',
        borderRadius: '1em',
        background: '#111',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.28em',
      }}>
        <div style={{ width: '0.42em', height: '0.42em', borderRadius: '50%', background: '#1a1a1a', border: '1.5px solid #333' }} />
        <div style={{ width: '0.2em', height: '0.2em', borderRadius: '50%', background: '#2a2a2a' }} />
      </div>

      {/* Правые иконки — абсолютно справа */}
      <div style={{
        position: 'absolute',
        right: '1em',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', gap: '0.22em', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', gap: '1px', alignItems: 'flex-end' }}>
          {[3, 5, 7, 9].map((h, i) => (
            <div key={i} style={{ width: '2px', height: `${h}px`, borderRadius: '1px', background: '#111', opacity: i < 3 ? 1 : 0.3 }} />
          ))}
        </div>
        <svg style={{ width: '0.82em', height: '0.68em' }} viewBox="0 0 12 10" fill="none">
          <path d="M6 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#111"/>
          <path d="M3.5 6C4.3 5.2 5.1 4.8 6 4.8s1.7.4 2.5 1.2" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M1.5 4C2.8 2.7 4.3 2 6 2s3.2.7 4.5 2" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
        </svg>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <div style={{ width: '1.2em', height: '0.6em', borderRadius: '2px', border: '1px solid #111', padding: '1px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '75%', height: '100%', background: '#111', borderRadius: '1px' }} />
          </div>
          <div style={{ width: '2px', height: '0.35em', borderRadius: '0 1px 1px 0', background: '#111', opacity: 0.5 }} />
        </div>
      </div>
    </div>

    {/* Instagram шапка */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.9em' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6em' }}>
        <div style={{
          width: '2.6em', height: '2.6em', borderRadius: '50%',
          background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          padding: '2px', flexShrink: 0,
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#c8b8a2' }} />
        </div>
        <div>
          <div style={{ fontSize: '0.9em', fontWeight: 700, color: '#111', fontFamily: 'sans-serif', lineHeight: 1.2 }}>your_profile</div>
          <div style={{ fontSize: '0.75em', color: '#666', fontFamily: 'sans-serif', lineHeight: 1.2 }}>Москва</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.25em' }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: '0.35em', height: '0.35em', borderRadius: '50%', background: '#111' }} />)}
      </div>
    </div>
  </div>
);

const MirrorStickerBottom = () => (
  <div
    className="absolute bottom-0 left-0 right-0 animate-mirror-content-reveal"
    style={{
      zIndex: 10,
      animationDelay: '900ms',
      background: 'rgba(255,255,255,0.97)',
      padding: '0.6em 0.9em 0',
      fontSize: ROOT,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5em' }}>
      <div style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25em' }}>
          <svg style={{ width: '1.1em', height: '1.1em', flexShrink: 0 }} viewBox="0 0 24 24" fill="#e53935">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span style={{ fontSize: '0.85em', color: '#111', fontFamily: 'sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>12K</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25em' }}>
          <svg style={{ width: '1.1em', height: '1.1em', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span style={{ fontSize: '0.85em', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>21</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25em' }}>
          <svg style={{ width: '1.1em', height: '1.1em', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
            <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
          </svg>
          <span style={{ fontSize: '0.85em', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>832</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25em' }}>
          <svg style={{ width: '1.1em', height: '1.1em', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          <span style={{ fontSize: '0.85em', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>1007</span>
        </div>
      </div>
      <svg style={{ width: '1.1em', height: '1.1em', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
    </div>
    <div style={{ fontSize: '0.9em', color: '#333', fontFamily: 'sans-serif', lineHeight: 1.4, marginBottom: '0.5em' }}>
      <span style={{ fontWeight: 700 }}>your_profile</span>
      {' '}Ваша любая подпись
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '0.5em' }}>
      <div style={{ width: '3em', height: '3px', borderRadius: '2px', background: '#111', opacity: 0.2 }} />
    </div>
  </div>
);

export { MirrorStickerTop, MirrorStickerBottom };