const MirrorStickerTop = () => (
  <div
    className="absolute top-0 left-0 right-0 animate-mirror-content-reveal"
    style={{
      zIndex: 9,
      animationDelay: '800ms',
      background: 'rgba(255,255,255,0.97)',
      paddingBottom: '7px',
    }}
  >
    {/* Статус-бар iOS */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '8px 10px 0',
      marginBottom: '4px',
    }}>
      {/* Время */}
      <span style={{ fontSize: '7px', fontWeight: 700, color: '#111', fontFamily: '-apple-system, sans-serif', letterSpacing: '-0.3px' }}>
        9:41
      </span>

      {/* Dynamic Island */}
      <div style={{
        width: '50px', height: '16px',
        borderRadius: '20px',
        background: '#111',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
        flexShrink: 0,
      }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#1a1a1a', border: '1.5px solid #333' }} />
        <div style={{ width: '2.5px', height: '2.5px', borderRadius: '50%', background: '#2a2a2a' }} />
      </div>

      {/* Правые иконки */}
      <div style={{ display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'flex-end' }}>
        {/* Сигнал */}
        <div style={{ display: 'flex', gap: '1px', alignItems: 'flex-end' }}>
          {[2, 4, 6, 8].map((h, i) => (
            <div key={i} style={{ width: '2px', height: `${h}px`, borderRadius: '1px', background: '#111', opacity: i < 3 ? 1 : 0.25 }} />
          ))}
        </div>
        {/* Wi-Fi */}
        <svg width="8" height="6" viewBox="0 0 12 10" fill="none">
          <path d="M6 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#111"/>
          <path d="M3.5 6C4.3 5.2 5.1 4.8 6 4.8s1.7.4 2.5 1.2" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M1.5 4C2.8 2.7 4.3 2 6 2s3.2.7 4.5 2" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
        </svg>
        {/* Батарея */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <div style={{ width: '12px', height: '6px', borderRadius: '2px', border: '1px solid #111', padding: '1px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '75%', height: '100%', background: '#111', borderRadius: '1px' }} />
          </div>
          <div style={{ width: '1.5px', height: '3px', borderRadius: '0 1px 1px 0', background: '#111', opacity: 0.5 }} />
        </div>
      </div>
    </div>

    {/* Instagram шапка */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{
          width: '26px', height: '26px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          padding: '1.5px', flexShrink: 0,
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#c8b8a2' }} />
        </div>
        <div>
          <div style={{ fontSize: '8px', fontWeight: 700, color: '#111', fontFamily: 'sans-serif', lineHeight: 1.2 }}>your_profile</div>
          <div style={{ fontSize: '6.5px', color: '#666', fontFamily: 'sans-serif', lineHeight: 1.2 }}>Москва</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#111' }} />)}
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
      padding: '7px 10px 0',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#e53935"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>12 тыс.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>21</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
          <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>832</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          <span style={{ fontSize: '7px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>1007</span>
        </div>
      </div>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
    </div>
    <div style={{ fontSize: '6.5px', color: '#333', fontFamily: 'sans-serif', lineHeight: 1.4, marginBottom: '6px' }}>
      <span style={{ fontWeight: 700 }}>your_profile</span>
      {' '}Ваша любая подпись
    </div>
    {/* Home indicator — полоска как у iPhone */}
    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '6px' }}>
      <div style={{ width: '36px', height: '4px', borderRadius: '2px', background: '#111', opacity: 0.2 }} />
    </div>
  </div>
);

export { MirrorStickerTop, MirrorStickerBottom };