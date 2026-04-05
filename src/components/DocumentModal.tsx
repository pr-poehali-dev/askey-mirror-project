import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const DocumentModal = ({ isOpen, onClose, title, children }: DocumentModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl flex flex-col"
        style={{ background: '#0d0d14', border: '1px solid rgba(168,85,247,0.3)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(168,85,247,0.2)' }}
        >
          <h2 className="text-white font-bold text-base sm:text-lg">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
          >
            <Icon name="X" size={16} className="text-white/70" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5 text-white/60 text-sm leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;
