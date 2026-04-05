import { useState } from 'react';
import Icon from '@/components/ui/icon';
import DocumentModal from '@/components/DocumentModal';

const ofertaContent = (
  <div className="space-y-4">
    <h3 className="text-white font-bold text-base">ПУБЛИЧНАЯ ОФЕРТА о заключении договора купли-продажи</h3>

    <div>
      <p className="text-white font-semibold mb-1">1. Общие положения</p>
      <p>В настоящей Публичной оферте содержатся условия заключения Договора купли-продажи. Настоящей офертой признается предложение, адресованное одному или нескольким конкретным лицам, которое достаточно определенно и выражает намерение лица, сделавшего предложение, считать себя заключившим Договор с адресатом, которым будет принято предложение.</p>
      <p className="mt-2">Совершение указанных в настоящей Оферте действий является подтверждением согласия обеих Сторон заключить Договор купли-продажи на условиях, в порядке и объеме, изложенных в настоящей Оферте.</p>
      <p className="mt-2">Договор купли-продажи считается заключенным и приобретает силу с момента совершения Сторонами действий, предусмотренных в настоящей Оферте, и означающих безоговорочное, а также полное принятие всех условий настоящей Оферты без каких-либо изъятий или ограничений на условиях присоединения.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">Термины и определения</p>
      <p><span className="text-white/80">Договор</span> — текст настоящей Оферты с Приложениями, являющимися неотъемлемой частью настоящей Оферты, акцептованный Покупателем путем совершения конклюдентных действий.</p>
      <p className="mt-1"><span className="text-white/80">Конклюдентные действия</span> — поведение, которое выражает согласие с предложением контрагента заключить, изменить или расторгнуть договор.</p>
      <p className="mt-1"><span className="text-white/80">Товар</span> — товаром по договору купли-продажи могут быть любые вещи с соблюдением правил, предусмотренных статьей 129 ГК РФ.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">2. Предмет Договора</p>
      <p>2.1. По настоящему Договору Продавец обязуется передать вещь (Товар) в собственность Покупателя, а Покупатель обязуется принять Товар и уплатить за него определенную денежную сумму.</p>
      <p className="mt-1">2.2. Наименование, количество, ассортимент Товара, его стоимость, порядок доставки и иные условия определяются на основании сведений Продавца при оформлении заявки Покупателем.</p>
      <p className="mt-1">2.3. Акцепт настоящей Оферты выражается в совершении конклюдентных действий: регистрации на сайте, заполнении заявки, сообщении сведений по телефону или электронной почте, а также оплате Товара.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">3. Права и обязанности Сторон</p>
      <p className="text-white/80 mt-1">Продавец обязуется:</p>
      <ul className="list-disc list-inside space-y-1 mt-1">
        <li>передать Покупателю Товар надлежащего качества и в надлежащей упаковке;</li>
        <li>передать Товар свободным от прав третьих лиц;</li>
        <li>организовать доставку Товаров Покупателю;</li>
        <li>предоставить всю необходимую информацию в соответствии с требованиями законодательства РФ.</li>
      </ul>
      <p className="text-white/80 mt-2">Покупатель обязуется:</p>
      <ul className="list-disc list-inside space-y-1 mt-1">
        <li>предоставить Продавцу достоверную информацию, необходимую для исполнения Договора;</li>
        <li>принять и оплатить Товар в соответствии с условиями Договора;</li>
        <li>гарантирует, что все условия Договора ему понятны и принимаются в полном объеме.</li>
      </ul>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">4. Цена и порядок расчетов</p>
      <p>4.1. Стоимость и порядок оплаты Товара определяются на основании сведений Продавца при оформлении заявки.</p>
      <p className="mt-1">4.2. Все расчеты по Договору производятся в безналичном порядке.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">5. Обмен и возврат Товара</p>
      <p>5.1. Покупатель вправе осуществить возврат (обмен) Товара, приобретенного дистанционным способом, в соответствии с требованиями ГК РФ, Закона РФ от 07.02.1992 N 2300-1 «О защите прав потребителей» и Правил, утвержденных Постановлением Правительства РФ от 31.12.2020 N 2463.</p>
      <p className="mt-1">5.2. Требование об обмене либо возврате Товара подлежит удовлетворению, если Товар не был в употреблении, сохранены его потребительские свойства и имеются доказательства приобретения его у Продавца.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">6. Конфиденциальность и безопасность</p>
      <p>При реализации настоящего Договора Стороны обеспечивают конфиденциальность и безопасность персональных данных в соответствии с ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных». Стороны обязуются сохранять конфиденциальность информации, полученной в ходе исполнения Договора.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">7. Форс-мажор</p>
      <p>Стороны освобождаются от ответственности за неисполнение обязательств, если это вызвано обстоятельствами непреодолимой силы: запретными действиями властей, эпидемиями, стихийными бедствиями и т.д. В случае наступления таких обстоятельств Сторона уведомляет другую в течение 30 рабочих дней. Если обстоятельства действуют более 60 рабочих дней — каждая Сторона вправе отказаться от Договора.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">8. Ответственность Сторон</p>
      <p>В случае неисполнения обязательств по Договору Стороны несут ответственность в соответствии с условиями настоящей Оферты и обязаны возместить причиненные убытки.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">9. Срок действия Оферты</p>
      <p>Оферта вступает в силу с момента размещения на сайте Продавца и действует до её отзыва. Продавец вправе вносить изменения в условия Оферты в любой момент. Договор вступает в силу с момента акцепта условий Оферты Покупателем.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">10. Дополнительные условия</p>
      <p>Договор регулируется действующим законодательством Российской Федерации. Споры урегулируются мирным путем; досудебный порядок урегулирования является обязательным. Языком Договора определен русский язык.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">11. Реквизиты Продавца</p>
      <p>Полное наименование: Шевченко Андрей Игоревич</p>
      <p>ИНН: 650401990699</p>
      <p>ОГРНИП: 321392600054674</p>
      <p>Телефон: +7 966 767-03-33</p>
      <p>E-mail: Comp.askei@gmail.com</p>
    </div>
  </div>
);

const privacyContent = (
  <div className="space-y-4">
    <h3 className="text-white font-bold text-base">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h3>

    <div>
      <p className="text-white font-semibold mb-1">1. Общие положения</p>
      <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта, которые предоставляют свои данные при оформлении заказа или обращении к Продавцу.</p>
      <p className="mt-2">Оператор персональных данных: ИП Шевченко Андрей Игоревич, ИНН: 650401990699, ОГРНИП: 321392600054674.</p>
      <p className="mt-2">Обработка персональных данных осуществляется в соответствии с ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">2. Какие данные мы собираем</p>
      <p>В процессе оформления заказа и взаимодействия с сайтом могут быть собраны следующие данные:</p>
      <ul className="list-disc list-inside space-y-1 mt-1">
        <li>имя и фамилия;</li>
        <li>номер телефона;</li>
        <li>адрес электронной почты;</li>
        <li>адрес доставки;</li>
        <li>данные об устройстве и браузере (cookies, IP-адрес).</li>
      </ul>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">3. Цели обработки данных</p>
      <p>Персональные данные обрабатываются в следующих целях:</p>
      <ul className="list-disc list-inside space-y-1 mt-1">
        <li>оформление и исполнение заказов;</li>
        <li>связь с покупателем по вопросам заказа;</li>
        <li>организация доставки товара;</li>
        <li>улучшение качества обслуживания;</li>
        <li>соблюдение требований законодательства РФ.</li>
      </ul>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">4. Передача данных третьим лицам</p>
      <p>Персональные данные не передаются третьим лицам, за исключением случаев, необходимых для исполнения договора (службы доставки, платежные системы), а также случаев, предусмотренных законодательством РФ.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">5. Хранение и защита данных</p>
      <p>Оператор принимает необходимые технические и организационные меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные хранятся не дольше, чем этого требуют цели их обработки.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">6. Права пользователя</p>
      <p>Пользователь вправе:</p>
      <ul className="list-disc list-inside space-y-1 mt-1">
        <li>получить информацию об обработке своих данных;</li>
        <li>потребовать уточнения, блокировки или уничтожения своих данных;</li>
        <li>отозвать согласие на обработку персональных данных;</li>
        <li>обжаловать действия Оператора в уполномоченный орган по защите прав субъектов персональных данных.</li>
      </ul>
      <p className="mt-2">Для реализации своих прав обращайтесь: <span className="text-white/80">Comp.askei@gmail.com</span> или <span className="text-white/80">+7 966 767-03-33</span>.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">7. Cookies</p>
      <p>Сайт использует файлы cookies для улучшения работы и анализа посещаемости. Пользователь может отключить cookies в настройках браузера, однако это может повлиять на функциональность сайта.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">8. Изменение политики</p>
      <p>Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на сайте. Продолжение использования сайта после изменений означает согласие с новой редакцией.</p>
    </div>

    <div>
      <p className="text-white font-semibold mb-1">9. Контакты</p>
      <p>ИП Шевченко Андрей Игоревич</p>
      <p>Телефон: +7 966 767-03-33</p>
      <p>E-mail: Comp.askei@gmail.com</p>
    </div>
  </div>
);

const Footer = () => {
  const [ofertaOpen, setOfertaOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer
        className="relative py-10 sm:py-12 border-t"
        style={{ background: '#060609', borderColor: 'rgba(255,255,255,0.2)' }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
            {/* О компании */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl sm:rounded-2xl neon-border-purple flex items-center justify-center">
                  <span
                    className="text-gradient font-black text-xs sm:text-sm"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    А
                  </span>
                </div>
                <span
                  className="text-lg sm:text-xl font-black tracking-widest neon-text-purple"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  АСКЕЙ
                </span>
              </div>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Производство премиальных зеркал с наклейками и адресной подсветкой. Доставка по всей России.
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                {[
                  { icon: 'Camera', color: '#f8fafc' },
                  { icon: 'Send', color: '#22d3ee' },
                  { icon: 'MessageCircle', color: '#22c55e' },
                ].map((social) => (
                  <button
                    key={social.icon}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: `${social.color}22`, border: `1px solid ${social.color}44` }}
                  >
                    <Icon name={social.icon} size={14} style={{ color: social.color }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Навигация */}
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Навигация</h4>
              <div className="space-y-1.5 sm:space-y-2">
                {[
                  { label: 'Каталог', href: '#catalog' },
                  { label: 'О производстве', href: '#production' },
                  { label: 'Сроки', href: '#timeline' },
                  { label: 'Портфолио', href: '#portfolio' },
                  { label: 'Контакты', href: '#contacts' },
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="block text-white/40 hover:text-purple-400 text-xs sm:text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Гарантии */}
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Гарантии</h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { icon: 'Shield', text: 'Гарантия 12 месяцев на подсветку' },
                  { icon: 'RotateCcw', text: 'Возврат в течение 14 дней' },
                  { icon: 'Truck', text: 'Доставка по всей России' },
                  { icon: 'Award', text: 'Сертификаты качества материалов' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 sm:gap-3">
                    <Icon name={item.icon} size={12} className="text-purple-400 flex-shrink-0" />
                    <span className="text-white/40 text-[10px] sm:text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Реквизиты */}
          <div
            className="pt-5 sm:pt-6 border-t mb-4"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <p className="text-white/25 text-[10px] sm:text-xs text-center leading-relaxed">
              ИП Шевченко Андрей Игоревич · ИНН: 650401990699 · ОГРНИП: 321392600054674
            </p>
          </div>

          {/* Нижняя строка */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          >
            <p className="text-white/25 text-[10px] sm:text-xs">© 2026 Аскей. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setOfertaOpen(true)}
                className="text-white/25 hover:text-purple-400 text-[10px] sm:text-xs transition-colors duration-200 underline underline-offset-2"
              >
                Публичная оферта
              </button>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-white/25 hover:text-purple-400 text-[10px] sm:text-xs transition-colors duration-200 underline underline-offset-2"
              >
                Политика конфиденциальности
              </button>
            </div>

          </div>
        </div>
      </footer>

      <DocumentModal
        isOpen={ofertaOpen}
        onClose={() => setOfertaOpen(false)}
        title="Публичная оферта"
      >
        {ofertaContent}
      </DocumentModal>

      <DocumentModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Политика конфиденциальности"
      >
        {privacyContent}
      </DocumentModal>
    </>
  );
};

export default Footer;