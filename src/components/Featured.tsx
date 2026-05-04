export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="how">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мгновенная оценка аккаунта, автоматическая выплата и полная анонимность. Бот работает 24/7 — просто запусти и получи деньги за несколько минут.
        </p>
        <div className="flex flex-col gap-3 mb-8 text-neutral-700 text-base">
          <p>⚡ Выплата в течение 5 минут</p>
          <p>🔒 Анонимно и безопасно</p>
          <p>📊 Честная оценка по рыночной цене</p>
          <p>🤖 Работает без выходных, 24/7</p>
        </div>
        <a
          href="https://t.me/"
          className="px-6 py-3 text-sm font-semibold uppercase tracking-wide cursor-pointer w-fit transition-all duration-300 hover:opacity-80"
          style={{ background: "#2AABEE", color: "#fff" }}
        >
          Запустить бота →
        </a>
      </div>
    </div>
  );
}