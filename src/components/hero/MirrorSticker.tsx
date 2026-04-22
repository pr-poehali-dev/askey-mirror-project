// Наклейки спроектированы под ширину 320px (внутренняя поверхность зеркала).
// Масштабируются через transform:scale в MirrorDecor в зависимости от реального размера.

const MirrorStickerTop = () => (
  <div
    className="animate-mirror-content-reveal"
    style={{
      animationDelay: '800ms',
      background: 'rgba(255,255,255,0.97)',
      width: '320px',
      paddingBottom: '10px',
    }}
  >
    {/* Статус-бар iOS */}
    <div style={{ position: 'relative', height: '28px', margin: '6px 0 4px' }}>
      <span style={{
        position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
        fontSize: '13px', fontWeight: 700, color: '#111',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        letterSpacing: '-0.5px', lineHeight: 1,
      }}>9:41</span>

      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80px', height: '24px', borderRadius: '12px', background: '#111',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
      }}>
        <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#1a1a1a', border: '1.5px solid #333' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2a2a2a' }} />
      </div>

      <div style={{
        position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', gap: '5px', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', gap: '1.5px', alignItems: 'flex-end' }}>
          {[4, 6, 8, 11].map((h, i) => (
            <div key={i} style={{ width: '3px', height: `${h}px`, borderRadius: '1px', background: '#111', opacity: i < 3 ? 1 : 0.3 }} />
          ))}
        </div>
        <svg width="14" height="11" viewBox="0 0 12 10" fill="none">
          <path d="M6 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#111"/>
          <path d="M3.5 6C4.3 5.2 5.1 4.8 6 4.8s1.7.4 2.5 1.2" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M1.5 4C2.8 2.7 4.3 2 6 2s3.2.7 4.5 2" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
        </svg>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <div style={{ width: '22px', height: '11px', borderRadius: '3px', border: '1.5px solid #111', padding: '1.5px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '75%', height: '100%', background: '#111', borderRadius: '1px' }} />
          </div>
          <div style={{ width: '2px', height: '6px', borderRadius: '0 1px 1px 0', background: '#111', opacity: 0.5 }} />
        </div>
      </div>
    </div>

    {/* Instagram шапка */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          padding: '2px', flexShrink: 0,
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#c8b8a2' }} />
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', fontFamily: 'sans-serif', lineHeight: 1.3 }}>your_profile</div>
          <div style={{ fontSize: '11px', color: '#666', fontFamily: 'sans-serif', lineHeight: 1.3 }}>Москва</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#111' }} />)}
      </div>
    </div>
  </div>
);

const MirrorStickerBottom = () => (
  <div
    className="animate-mirror-content-reveal"
    style={{
      animationDelay: '900ms',
      background: 'rgba(255,255,255,0.97)',
      width: '320px',
      padding: '10px 12px 14px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '7px' }}>
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
        {[
          { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e53935"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>, label: '12K' },
          { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label: '21' },
          { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>, label: '832' },
          { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>, label: '1007' },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {icon}
            <span style={{ fontSize: '13px', color: '#111', fontFamily: 'sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>{label}</span>
          </div>
        ))}
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
    </div>
    <div style={{ fontSize: '13px', color: '#333', fontFamily: 'sans-serif', lineHeight: 1.4 }}>
      <span style={{ fontWeight: 700 }}>your_profile</span>{' '}Ваша любая подпись
    </div>
  </div>
);

export { MirrorStickerTop, MirrorStickerBottom };