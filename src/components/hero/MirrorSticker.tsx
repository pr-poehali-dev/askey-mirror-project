// Наклейки используют только % и em — масштабируются вместе с зеркалом автоматически

const MirrorStickerTop = () => (
  <div
    className="animate-mirror-content-reveal"
    style={{
      animationDelay: '800ms',
      background: 'rgba(255,255,255,0.97)',
      width: '100%',
      paddingBottom: '2.5%',
    }}
  >
    {/* Статус-бар iOS */}
    <div style={{ position: 'relative', height: '8%', minHeight: '22px', maxHeight: '32px', margin: '1.5% 0 1%' }}>
      {/* Время */}
      <span style={{
        position: 'absolute', left: '4%', top: '50%', transform: 'translateY(-50%)',
        fontSize: 'clamp(9px, 3.8cqw, 14px)', fontWeight: 700, color: '#111',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        letterSpacing: '-0.5px', lineHeight: 1,
      }}>9:41</span>

      {/* Dynamic Island */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25%', height: '80%',
        borderRadius: '999px', background: '#111',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15%',
      }}>
        <div style={{ width: '28%', paddingBottom: '28%', borderRadius: '50%', background: '#1a1a1a', border: '1px solid #333' }} />
        <div style={{ width: '14%', paddingBottom: '14%', borderRadius: '50%', background: '#2a2a2a' }} />
      </div>

      {/* Правые иконки */}
      <div style={{
        position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', gap: '4%', alignItems: 'center',
      }}>
        {/* Сигнал */}
        <div style={{ display: 'flex', gap: '1px', alignItems: 'flex-end', height: '10px' }}>
          {[4, 6, 8, 10].map((h, i) => (
            <div key={i} style={{ width: '2px', height: `${h}px`, borderRadius: '1px', background: '#111', opacity: i < 3 ? 1 : 0.3 }} />
          ))}
        </div>
        {/* WiFi */}
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <circle cx="6" cy="8" r="1.2" fill="#111"/>
          <path d="M3.5 5.5C4.3 4.7 5.1 4.3 6 4.3s1.7.4 2.5 1.2" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M1 3C2.6 1.4 4.2.7 6 .7s3.4.7 5 2.3" stroke="#111" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
        </svg>
        {/* Батарея */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <div style={{ width: '18px', height: '9px', borderRadius: '2px', border: '1px solid #111', padding: '1.5px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '70%', height: '100%', background: '#111', borderRadius: '1px' }} />
          </div>
          <div style={{ width: '1.5px', height: '5px', background: '#111', opacity: 0.5, borderRadius: '0 1px 1px 0' }} />
        </div>
      </div>
    </div>

    {/* Instagram шапка */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4% 1%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Аватар */}
        <div style={{
          width: 'clamp(26px, 10%, 38px)', height: 'clamp(26px, 10%, 38px)',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          padding: '2px', flexShrink: 0,
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#c8b8a2' }} />
        </div>
        <div>
          <div style={{ fontSize: 'clamp(9px, 3.8cqw, 13px)', fontWeight: 700, color: '#111', fontFamily: 'sans-serif', lineHeight: 1.3 }}>your_profile</div>
          <div style={{ fontSize: 'clamp(8px, 3.2cqw, 11px)', color: '#666', fontFamily: 'sans-serif', lineHeight: 1.3 }}>Москва</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '3px' }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#111' }} />)}
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
      width: '100%',
      padding: '2.5% 4% 3%',
    }}
  >
    {/* Иконки действий */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
      <div style={{ display: 'flex', gap: 'clamp(8px, 4%, 16px)', alignItems: 'center' }}>
        {/* Лайк */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#e53935">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span style={{ fontSize: 'clamp(9px, 3.8cqw, 13px)', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>12K</span>
        </div>
        {/* Комментарий */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span style={{ fontSize: 'clamp(9px, 3.8cqw, 13px)', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>21</span>
        </div>
        {/* Репост */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
            <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
          </svg>
          <span style={{ fontSize: 'clamp(9px, 3.8cqw, 13px)', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>832</span>
        </div>
        {/* Отправить */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          <span style={{ fontSize: 'clamp(9px, 3.8cqw, 13px)', color: '#111', fontFamily: 'sans-serif', fontWeight: 600 }}>1007</span>
        </div>
      </div>
      {/* Сохранить */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
    </div>
    {/* Подпись */}
    <div style={{ fontSize: 'clamp(9px, 3.8cqw, 13px)', color: '#333', fontFamily: 'sans-serif', lineHeight: 1.4 }}>
      <span style={{ fontWeight: 700 }}>your_profile</span>{' '}Ваша любая подпись
    </div>
  </div>
);

export { MirrorStickerTop, MirrorStickerBottom };
