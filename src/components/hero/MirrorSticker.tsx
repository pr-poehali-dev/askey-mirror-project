// Зеркало = Instagram-пост на iPhone.
// Размеры через vw — зеркало занимает clamp(180px,40vw,320px) → иконки пропорциональны.

// Зеркало: clamp(180px, 40vw, 320px). Берём 40vw как базу.
// Иконки: 6vw (≈15px на 250px, ≈22px на 360px) — выглядит как настоящий Instagram.

const ic = (base: number) => `clamp(${base * 0.7}px, ${base * 0.025}vw, ${base}px)`;

const MirrorStickerTop = () => (
  <div style={{ background: '#ffffff', width: '100%' }}>

    {/* ── Статус-бар iOS ── */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      padding: '5px 12px 3px',
    }}>
      {/* Время */}
      <span style={{
        fontSize: 'clamp(10px, 3.2vw, 14px)',
        fontWeight: 700,
        color: '#000',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        letterSpacing: '-0.3px',
        lineHeight: 1,
        flexShrink: 0,
      }}>9:41</span>

      {/* Dynamic Island */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(52px, 17vw, 78px)',
        height: 'clamp(16px, 5.5vw, 24px)',
        borderRadius: '999px',
        background: '#000',
        flexShrink: 0,
      }} />

      {/* Правые иконки */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        flexShrink: 0,
      }}>
        {/* Сигнал */}
        <svg style={{ width: 'clamp(12px,3.8vw,16px)', height: 'clamp(9px,3vw,12px)' }} viewBox="0 0 17 12" fill="none">
          <rect x="0" y="4" width="3" height="8" rx="1" fill="#000"/>
          <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="#000"/>
          <rect x="9" y="1" width="3" height="11" rx="1" fill="#000"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#000" opacity="0.3"/>
        </svg>
        {/* Wi-Fi */}
        <svg style={{ width: 'clamp(12px,3.8vw,16px)', height: 'clamp(9px,3vw,12px)' }} viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#000"/>
          <path d="M4.2 7.2C5.3 6 6.6 5.3 8 5.3s2.7.7 3.8 1.9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M1.2 4.2C3.1 2.2 5.4 1 8 1s4.9 1.2 6.8 3.2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* Батарея */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <div style={{
            width: 'clamp(18px,6vw,24px)',
            height: 'clamp(9px,3vw,12px)',
            borderRadius: '3px',
            border: '1.5px solid #000',
            padding: '1.5px',
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}>
            <div style={{ width: '70%', height: '100%', background: '#000', borderRadius: '1px' }} />
          </div>
          <div style={{ width: '2px', height: '6px', background: 'rgba(0,0,0,0.35)', borderRadius: '0 1px 1px 0' }} />
        </div>
      </div>
    </div>

    {/* ── Instagram шапка ── */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 10px 8px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
        {/* Аватар */}
        <div style={{
          flexShrink: 0,
          width: 'clamp(26px, 9vw, 38px)',
          height: 'clamp(26px, 9vw, 38px)',
          borderRadius: '50%',
          padding: '2px',
          background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          boxSizing: 'border-box',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4b896 0%, #c8a882 100%)',
            border: '1.5px solid #fff',
            boxSizing: 'border-box',
          }} />
        </div>
        {/* Ник и локация */}
        <div style={{ lineHeight: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 'clamp(10px, 3.2vw, 13px)',
            fontWeight: 700,
            color: '#000',
            fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            marginBottom: '2px',
            whiteSpace: 'nowrap',
          }}>your_profile</div>
          <div style={{
            fontSize: 'clamp(9px, 2.8vw, 11px)',
            color: '#666',
            fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            whiteSpace: 'nowrap',
          }}>Москва</div>
        </div>
      </div>
      {/* Три точки */}
      <div style={{ display: 'flex', gap: '3px', alignItems: 'center', flexShrink: 0 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 'clamp(3px, 1vw, 5px)',
            height: 'clamp(3px, 1vw, 5px)',
            borderRadius: '50%',
            background: '#000',
          }} />
        ))}
      </div>
    </div>
  </div>
);

const MirrorStickerBottom = () => (
  <div style={{
    background: '#ffffff',
    width: '100%',
    padding: '8px 10px 16px',
  }}>
    {/* Иконки действий */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '6px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 3vw, 14px)' }}>
        {/* Лайк */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg style={{ width: 'clamp(14px,5vw,20px)', height: 'clamp(14px,5vw,20px)', flexShrink: 0 }} viewBox="0 0 24 24" fill="#e53935">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span style={{ fontSize: 'clamp(9px, 3vw, 12px)', color: '#000', fontFamily: 'sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>12K</span>
        </div>
        {/* Комментарий */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg style={{ width: 'clamp(14px,5vw,20px)', height: 'clamp(14px,5vw,20px)', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span style={{ fontSize: 'clamp(9px, 3vw, 12px)', color: '#000', fontFamily: 'sans-serif', fontWeight: 600 }}>21</span>
        </div>
        {/* Поделиться */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg style={{ width: 'clamp(14px,5vw,20px)', height: 'clamp(14px,5vw,20px)', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          <span style={{ fontSize: 'clamp(9px, 3vw, 12px)', color: '#000', fontFamily: 'sans-serif', fontWeight: 600 }}>832</span>
        </div>
      </div>
      {/* Сохранить */}
      <svg style={{ width: 'clamp(14px,5vw,20px)', height: 'clamp(14px,5vw,20px)', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
    </div>
    {/* Подпись */}
    <div style={{
      fontSize: 'clamp(9px, 3vw, 12px)',
      color: '#222',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: 1.45,
    }}>
      <span style={{ fontWeight: 700 }}>your_profile</span>
      {' '}Ваша любая подпись к зеркалу — любой текст, цитата или пожелание
    </div>
  </div>
);

export { MirrorStickerTop, MirrorStickerBottom };
